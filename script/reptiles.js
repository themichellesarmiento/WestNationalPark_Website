//MAKING FUNCTION CONSTRUCTOR WITH DIFFERENT VARIABLES
function Reptiles(name, lifespan, group, food, description, length, weight, found) {
    this.name = name,
        this.lifespan = lifespan,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.found = found
}

//CREATE EACH NEW VARIABLE WITH DESCRIPTION TO FUNCTION CONSTRUCTOR
let reptileFrillNeckedLizard = new Reptiles(
    "Frill-Necked Lizard",
    "20 years",
    "Reptile",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    "1 kg",
    "Northern Australia")
let reptileHawksbillTurtle = new Reptiles("Hawksbill Turtle",
    "50 years",
    "Reptile",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird's beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80cm (carapace)",
    "50 kg",
    "Tropical coasts of Queensland, Northern Territory and Western Australia.")
let reptilePerentie = new Reptiles(
    "Perentie",
    "20 years",
    "Reptile",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20 kg",
    "Deserts")


// ===CREATING CONTENT IN SIDEBAR=== 

//LOOP THROUGH ARRAY
let reptilesArray = [reptileFrillNeckedLizard, reptileHawksbillTurtle, reptilePerentie]

//CHOOSE SIDEBAR TO INCLUDE CONTENT THERE
let sidebarReptiles = document.querySelector(".sidebar")

// CREATE HEADING IN SIDEBAR
let reptilesTitle = document.createElement("h3");
reptilesTitle.classList.add("sidebar-heading");
reptilesTitle.textContent = "REPTILES";
sidebarReptiles.appendChild(reptilesTitle);

//CREATE CLICK EVENT FOR HEADING IN SIDEBAR
reptilesTitle.addEventListener("click", () => {
    let isActiveHeading = reptilesTitle.classList.contains("active");

    //REMOVE ACTIVE FROM ALL NAMES AND HEADING
    document.querySelectorAll(".sidebar-names.active").forEach(item => item.classList.remove("active"))
    document.querySelectorAll(".sidebar-heading.active").forEach(item => item.classList.remove("active"))

    if (!isActiveHeading) {
        reptilesTitle.classList.add("active")
    }

})

// CREATE ITEMS FROM ARRAY
reptilesArray.forEach(reptile => {
    let reptilesContainer = document.createElement("div");
    reptilesContainer.classList.add("sidebar-names");
    reptilesContainer.textContent = reptile.name;
    sidebarReptiles.appendChild(reptilesContainer);

    // CLICK EVENT
    reptilesContainer.addEventListener("click", () => {
        let isActiveNames = reptilesContainer.classList.contains("active");

        // REMOVE ACTIVE FROM ALL OTHERS
        document.querySelectorAll(".sidebar-names.active").forEach(item =>
            item.classList.remove("active")
        );

        // REMOVE ACTIVE FROM HEADING
        reptilesTitle.classList.remove("active")

        // ACTIVATE CLICKED ITEM
        if (!isActiveNames) {
            reptilesContainer.classList.add("active");
        }
    });
});

