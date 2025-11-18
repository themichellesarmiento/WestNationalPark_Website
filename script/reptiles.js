// ===FUNCTION CONSTRUCTOR===
function Reptiles(name, lifespan, group, food, description, length, weight, found, image) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.image = image;
}

// ===CREATE REPTILES===
let reptileFrillNeckedLizard = new Reptiles(
    "Frill-Necked Lizard",
    "20 years",
    "Reptile",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    "1 kg",
    "Northern Australia",
    "assets/Animals/Reptiles/reptiles-frill_neckled.png"
);
let reptileHawksbillTurtle = new Reptiles(
    "Hawksbill Turtle",
    "50 years",
    "Reptile",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80 cm (carapace)",
    "50 kg",
    "Tropical coasts of Queensland, Northern Territory and Western Australia",
    "assets/Animals/Reptiles/reptiles-hawsksbill_turtle.png"
);
let reptilePerentie = new Reptiles(
    "Perentie",
    "20 years",
    "Reptile",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20 kg",
    "Deserts",
    "assets/Animals/Reptiles/reptiles-perentie.png"
);

// === ARRAY OF REPTILES ===
let reptilesArray = [reptileFrillNeckedLizard, reptileHawksbillTurtle, reptilePerentie];

// === SELECT SIDEBAR AND MAIN CONTENT CONTAINERS ===
let sidebarReptiles = document.querySelector(".sidebar");
let mainContent = document.querySelector(".content");

// === CREATE DEFAULT INTRO TEXT ===
let introContainer = document.createElement("div");
introContainer.classList.add("intro-content");

let introHeading = document.createElement("h2");
introHeading.textContent = "Welcome to the Reptiles Section";

let introParagraph = document.createElement("p");
introParagraph.textContent = "Explore the fascinating world of reptiles! Click on a name in the sidebar to learn more about each animal.";

introContainer.appendChild(introHeading);
introContainer.appendChild(introParagraph);
mainContent.appendChild(introContainer);

// === CREATE HEADING IN SIDEBAR ===
let sidebarHeading = document.createElement("h3");
sidebarHeading.textContent = "REPTILES";
sidebarHeading.classList.add("sidebar-heading");
sidebarReptiles.appendChild(sidebarHeading);

// === CREATE SIDEBAR ITEMS AND MAIN CONTENT PER ANIMAL ===
reptilesArray.forEach(reptile => {
    // Sidebar item
    let sidebarItem = document.createElement("div");
    sidebarItem.textContent = reptile.name;
    sidebarItem.classList.add("sidebar-names");
    sidebarReptiles.appendChild(sidebarItem);

    // Main content for this animal
    let animalContentContainer = document.createElement("div");
    animalContentContainer.classList.add("animal-content");

    let animalHeading = document.createElement("h2");
    animalHeading.textContent = reptile.name;

    let animalDescription = document.createElement("p");
    animalDescription.textContent = reptile.description;

    // Image placeholder
    let animalImage = document.createElement("img");
    animalImage.src = reptile.image;

    // Create Read-more button 
    let buttonReadMore = document.createElement("button");
    buttonReadMore.classList.add("read-more");
    buttonReadMore.textContent = "Read More";

    // === ADDITIONAL INFORMATION CONTAINER
    let animalAdditionalDescription = document.createElement("div");
    animalAdditionalDescription.classList.add("additional-info");

    // Extra fields
    let lifespanP = document.createElement("p");
    lifespanP.textContent = "Lifespan: " + reptile.lifespan;

    let groupP = document.createElement("p");
    groupP.textContent = "Group: " + reptile.group;

    let foodP = document.createElement("p");
    foodP.textContent = "Food: " + reptile.food;

    let lengthP = document.createElement("p");
    lengthP.textContent = "Length: " + reptile.length;

    let weightP = document.createElement("p");
    weightP.textContent = "Weight: " + reptile.weight;

    let foundP = document.createElement("p");
    foundP.textContent = "Found: " + reptile.found;

    // Append all extra fields into container
    animalAdditionalDescription.appendChild(lifespanP);
    animalAdditionalDescription.appendChild(groupP);
    animalAdditionalDescription.appendChild(foodP);
    animalAdditionalDescription.appendChild(lengthP);
    animalAdditionalDescription.appendChild(weightP);
    animalAdditionalDescription.appendChild(foundP);

    // Append heading to animal content block
    animalContentContainer.appendChild(animalHeading);

    // Append image and description to animal content block
    let startContent = document.createElement("div");
    startContent.classList.add("image-desc-row");
    startContent.appendChild(animalImage);
    startContent.appendChild(animalDescription);

    // Append start information to animal content block
    animalContentContainer.appendChild(startContent);

    // Append additional information to animal content block
    animalContentContainer.appendChild(animalAdditionalDescription);
    animalContentContainer.appendChild(buttonReadMore);



    // Add to main content area
    mainContent.appendChild(animalContentContainer);

    // === CLICK EVENT FOR SIDEBAR ITEM ===
    introContainer.classList.add("active");

    // In the click event:
    sidebarItem.addEventListener("click", () => {
        const isActive = sidebarItem.classList.contains("active");

        // remove active from all sidebar items
        document.querySelectorAll(".sidebar-names").forEach(item => item.classList.remove("active"));
        // hide all animal contents
        document.querySelectorAll(".animal-content").forEach(content => content.classList.remove("active"));

        //Refresh additional info if it was activated before 
        document.querySelectorAll(".animal-content").forEach(content => {
            const extraInfo = content.querySelector(".additional-info");
            const readButton = content.querySelector(".read-more");
            if (extraInfo) {
                extraInfo.classList.remove("active");
            }
            if (readButton) {
                readButton.textContent = "Read More";
            }
        })

        if (!isActive) {
            // active clicked animal
            sidebarItem.classList.add("active");
            animalContentContainer.classList.add("active");
            // hide intro
            introContainer.classList.remove("active");
        } else {
            // active intro
            introContainer.classList.add("active");
        }
    });
    // READ MORE CLICK INFORMATION
    let isOpened = false;

    buttonReadMore.addEventListener("click", () => {
        if (!isOpened) {
            animalAdditionalDescription.classList.add("active");
            buttonReadMore.textContent = "Read Less";
            isOpened = true;
        } else {
            animalAdditionalDescription.classList.remove("active");
            buttonReadMore.textContent = "Read More";
            isOpened = false;
        }
    });
})