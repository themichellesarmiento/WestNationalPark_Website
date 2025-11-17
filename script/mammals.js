// Constructor

function Mammals(name, lifespan, group, food, description, length, weight, found) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
}

// Animals

let mammalEchidna = new Mammals(
    "Echidna", "50 years", "Mammals",
    "Insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs...",
    "76cm", "10kg", "Throughout Australia"
);

let mammalTasmanianDevil = new Mammals(
    "Tasmanian Devil", "5 years", "Mammals",
    "Meat from other animals such as wallabies and wombats",
    "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae...",
    "70cm", "10kg", "Tasmania"
);

let mammalQuokka = new Mammals(
    "Quokka", "10 years", "Mammals",
    "Plant eaters, shrubs and grasses",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer...",
    "50cm", "3kg", "Rottnest Island"
);

// Array of animals

let mammalArray = [mammalEchidna, mammalTasmanianDevil, mammalQuokka];

// Sidebar and main content

let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".mammal_Container");

// Create heading
let heading = document.createElement("h2");
heading.textContent = "MAMMALS";
sidebar.appendChild(heading);

// Default welcome message
mainContent.innerHTML = `<h2>Welcome to Mammals Section</h2>`;

// Add each animal to sidebar
mammalArray.forEach(mammal => {
    let item = document.createElement("div");
    item.textContent = mammal.name;
    item.classList.add("sideBar_mammals")
    item.style.cursor = "pointer";
    item.style.padding = "5px 0";
    sidebar.appendChild(item);

    
     // Click event: show only that animal's details

    item.addEventListener("click", () => { let isActive = item.classList.contains("active");

        if (isActive) {
            item.classList.remove("active");
            mainContent.innerHTML = `<h2>Welcome to Mammals Section</h2>`;
            return;
        }

        // Clear previous active

        document.querySelectorAll(".sidebar div.active").forEach(el => el.classList.remove("active"));

        // Set active class on clicked item
        item.classList.add("active");

        mainContent.innerHTML = `
            <h2>${mammalEchidna.name}</h2>
            <p><strong>Lifespan:</strong> ${mammalEchidna.lifespan}</p>
            <p><strong>Group:</strong> ${mammalEchidna.group}</p>
            <p><strong>Food:</strong> ${mammalEchidna.food}</p>
            <p><strong>Description:</strong> ${mammalEchidna.description}</p>
            <p><strong>Length:</strong> ${mammalEchidna.length}</p>
            <p><strong>Weight:</strong> ${mammalEchidna.weight}</p>
            <p><strong>Found:</strong> ${mammalEchidna.found}</p>`;
    });
});













































