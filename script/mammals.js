
function Mammals (name, lifespan, group, food, description, length, weight, found)
{
    this.name = name,
    this.lifespan = lifespan,
    this.group = group, 
    this.food = food,
    this.description = description,
    this.length = length,
    this.weight = weight,
    this.found = found
};

let mammalEchidna = new Mammals ("Echidna", "50 years", "Mammals", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus."
    , "insects such as ants and termites, beetle larvae and worms", "76cm", 
    "10kg", "Throughout Australia")

let mammalTasmanianDevil = new Mammals("Tasmanian Devil", "5 years", "Mammals", "A predator, then eat meat from other animals such as wallabies and wombats" ,"The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "70cm", "10kg", "Tasmania")
    
    
let mammalQuokka = new Mammals ("Quokka", "10 years", "Mammals", "Plant eaters, they munch on shrubs and grasses",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "50cm", "3kg")     


//console.log(`${mammalEchidna.name} has a life span of ${mammalEchidna.lifespan} and they found in ${mammalEchidna.found}`)


let mammalArray = [mammalEchidna, mammalTasmanianDevil, mammalQuokka]
console.log(mammalArray)

let sidebarMammals = document.querySelector(".sidebar")

let mammalsTitle = document.createElement("h2")

mammalsTitle.classList.add("sidebar-heading")

mammalsTitle.textContent = "MAMMALS"

sidebarMammals.appendChild(mammalsTitle)

mammalsTitle.addEventListener("click", () => 
{
    let isActiveHeading = mammalsTitle.classList.contains("active")

    document.querySelectorAll(".sidebar-names.active").forEach(item => item.classList.remove("active"))
    document.querySelectorAll(".sidebar-heading.active").forEach(item => item.classList.remove("active"))

    if (!isActiveHeading) {
        mammalsTitle.classList.add("active")
    }

})


mammalArray.forEach(mammal => {
    let mammalsContainer = document.createElement("div");
    mammalsContainer.classList.add("sidebar-names");
    mammalsContainer.textContent = mammal.name;
    sidebarMammals.appendChild(mammalsContainer);

    // CLICK EVENT
    mammalsContainer.addEventListener("click", () => {
        let isActiveNames = mammalsContainer.classList.contains("active");

        // REMOVE ACTIVE FROM ALL OTHERS
        document.querySelectorAll(".sidebar-names.active").forEach(item =>
            item.classList.remove("active")
        );

        // REMOVE ACTIVE FROM HEADING
        mammalsTitle.classList.remove("active")

        // ACTIVATE CLICKED ITEM
        if (!isActiveNames) {
            mammalsContainer.classList.add("active");
        }
    });
});






















// let container = document.querySelector(".mammal_Container")

// mammals.forEach(mammals => 
// {
//     let card = document.createElement("div")
//     card.classList.add("animal-card")

//     card.innerHTML = `<h2>${mammals.name}</h2>
//     <img = src = "${mammals.image}" alt = "${mammals.name}" height = "140px">`

//     container.appendChild(card)
// }
// )