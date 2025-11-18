// FUNCTION CONSTRUCTOR

function Mammals(
  name,
  lifespan,
  group,
  food,
  description,
  length,
  weight,
  found,
  image
) {
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

//  CREATE MAMMALS
let mammalEchidna = new Mammals(
  'Echidna',
  '50 years',
  'Mammals',
  'Insects such as ants and termites, beetle larvae and worms',
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
  '76cm',
  '10kg',
  'Throughout Australia',
  '../assets/animals/mammals/mammals-echidna.png'
);

let mammalTasmanianDevil = new Mammals(
  'Tasmanian Devil',
  '5 years',
  'Mammals',
  'Meat from other animals such as wallabies and wombats',
  "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
  '70cm',
  '10kg',
  'Tasmania',
  '../assets/animals/mammals/mammals-tasmanian_devil.png'
);

let mammalQuokka = new Mammals(
  'Quokka',
  '10 years',
  'Mammals',
  'Plant eaters, shrubs and grasses',
  "TThe Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  '50cm',
  '3kg',
  'Rottnest Island',
  '../assets/animals/mammals/mammals-quokka.png'
);

//  ARRAY OF MAMMALS
let mammalArray = [mammalEchidna, mammalTasmanianDevil, mammalQuokka];

// SELECT SIDEBAR AND MAIN CONTENT
let sidebar = document.querySelector('.sidebar');
let mainContent = document.querySelector('.mammal_Container');

// Default welcome text
let introText = document.createElement('div');
introText.classList.add('intro-text');
introText.textContent = 'Welcome to Mammals Section';
mainContent.appendChild(introText);

// Sidebar heading
let sidebarHeading = document.createElement('h3');
sidebarHeading.textContent = 'MAMMALS';
sidebar.appendChild(sidebarHeading);

// CREATE SIDEBAR ITEMS
mammalArray.forEach((mammal) => {
  let sidebarItem = document.createElement('div');
  sidebarItem.textContent = mammal.name;
  sidebarItem.classList.add('sidebar-names');
  sidebar.appendChild(sidebarItem);

  // Main content container for each mammal
  let animalContent = document.createElement('div');
  animalContent.classList.add('animal-content');

  // Animal name
  let title = document.createElement('div');
  title.classList.add('animal-title');
  title.textContent = mammal.name;

  // Animal image
  let img = document.createElement('img');
  img.src = mammal.image;
  img.alt = mammal.name;
  img.classList.add('animal-img');

  // Short description
  let desc = document.createElement('div');
  desc.classList.add('animal-description');
  desc.textContent = mammal.description.substring();

  // Extra info container
  let extraInfo = document.createElement('div');
  extraInfo.classList.add('extra-info');
  extraInfo.innerHTML = `
        Lifespan: ${mammal.lifespan} <br>
        Group: ${mammal.group} <br>
        Food: ${mammal.food} <br>
        Length: ${mammal.length} <br>
        Weight: ${mammal.weight} <br>
        Found: ${mammal.found}`;

  extraInfo.style.display = 'none'; // initially hidden

  // Read More / Read Less button
  let toggleBtn = document.createElement('button');
  toggleBtn.classList.add('toggle-btn');
  toggleBtn.textContent = 'Read More';

  toggleBtn.addEventListener('click', () => {
    if (extraInfo.style.display === 'none') {
      extraInfo.style.display = 'block';
      toggleBtn.textContent = 'Read Less';
    } else {
      extraInfo.style.display = 'none';
      toggleBtn.textContent = 'Read More';
    }
  });

  // Append everything
  animalContent.appendChild(title);
  animalContent.appendChild(img);
  animalContent.appendChild(desc);
  animalContent.appendChild(extraInfo);
  animalContent.appendChild(toggleBtn);
  mainContent.appendChild(animalContent);

  // SIDEBAR ITEM CLICK WITH ACTIVE LOGIC
  sidebarItem.addEventListener('click', () => {
    const isActive = sidebarItem.classList.contains('active');

    // Remove active from all sidebar items and contents
    document
      .querySelectorAll('.sidebar-names')
      .forEach((item) => item.classList.remove('active'));
    document
      .querySelectorAll('.animal-content')
      .forEach((content) => content.classList.remove('active'));

    // If clicking same active item, show welcome message
    if (isActive) {
      introText.style.display = 'block';
    } else {
      // Show selected animal content
      sidebarItem.classList.add('active');
      animalContent.classList.add('active');
      introText.style.display = 'none';
    }
  });
});

//  IMAGE ZOOM FEATURE
document.querySelectorAll('.animal-img').forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});
