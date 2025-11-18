function Birds(
  birdName,
  description,
  group,
  lifespan,
  food,
  found,
  lengthofbird,
  weight,
  imageURL
) {
  this.birdName = birdName;
  this.description = description;
  this.group = group;
  this.lifespan = lifespan;
  this.food = food;
  this.found = found;
  this.lengthofbird = lengthofbird;
  this.weight = weight;
  this.imageURL = imageURL;
}

const birdCassowary = new Birds(
  'Cassowary',
  'It is not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida',
  'Bird',
  '20 Years',
  'Plants matter like fruit, insects and small animals like mice and lizards',
  'Queensland',
  '1.7m',
  '44Kg',
  './assets/animals/birds/birds-cassowary.png'
);
const birdKookaburra = new Birds(
  'Kookaburra',
  'Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-colored tail is patterned with black bars.',
  'Bird',
  '20 Years',
  'Insects and small animals including snakes, frogs and lizards',
  'Australia wide',
  '43cm',
  '300g',
  './assets/animals/birds/birds-kookaburra.png'
);
const birdBlackCockatoo = new Birds(
  'Black Cockatoo',
  'It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-colored beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognized, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.',
  'Bird',
  '41 Years',
  ' Fruit, seeds and other plant material',
  'SE Australia',
  '65cm',
  '900g',
  './assets/animals/birds/birds-blackCockatoo.png'
);

const contentWelcomeDescription = `Australia is home to over 800 bird species, with roughly 350 endemic.Many Australian birds are famous for their striking colors, such as the parrots and cockatoos, as well as unique behaviors like the Lyrebird's incredible mimicry.Kookaburra is amous for its loud, laughing call, commonly heard in urban and rural areas. Cockatoos is a diverse group of parrots, often seen in large, noisy flocks. Climate change and land clearing have also negatively impacted bird populations, with major bushfires causing significant loss of life.`;

let activelink = null;
let seeMore = false;

const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');

sidebar.innerHTML = '';
content.style.backgroundImage = 'none';
content.style.backgroundColor = '#eee9dd';

const sidebarBirdsInnerDiv = document.createElement('div');
// sidebarBirdsInnerDiv.style.backgroundColor = '#6be50eff';

const sidebarBirdsTitle = document.createElement('h3');
sidebarBirdsTitle.classList.add('sidebar-titile');
sidebarBirdsTitle.textContent = 'Birds';
sidebarBirdsInnerDiv.appendChild(sidebarBirdsTitle);

const sidebarLinkKookaburra = document.createElement('p');
sidebarLinkKookaburra.classList.add('sidebar-links');
sidebarLinkKookaburra.textContent = 'Kookaburra';

const sidebarLinkCassowary = document.createElement('p');
sidebarLinkCassowary.classList.add('sidebar-links');
sidebarLinkCassowary.textContent = 'Cassowary';

const sidebarLinkBlackCockatoo = document.createElement('p');
sidebarLinkBlackCockatoo.classList.add('sidebar-links');
sidebarLinkBlackCockatoo.textContent = 'Black cockatoo';

sidebarBirdsInnerDiv.appendChild(sidebarLinkCassowary);
sidebarBirdsInnerDiv.appendChild(sidebarLinkKookaburra);
sidebarBirdsInnerDiv.appendChild(sidebarLinkBlackCockatoo);
// sidebarBirdInnerDiv.style.backgroundColor = '#6be50eff';

sidebar.appendChild(sidebarBirdsInnerDiv);

const sidebarLinks = [
  sidebarLinkCassowary,
  sidebarLinkKookaburra,
  sidebarLinkBlackCockatoo,
];

const birdContent = [birdCassowary, birdKookaburra, birdBlackCockatoo];

const displayWelcomeContent = () => {
  content.innerHTML = '';
  const contenWrapper = document.createElement('div');
  const contentTitle = document.createElement('h2');
  const contentParagraph = document.createElement('p');
  contentTitle.textContent = 'Welcome to the birds section';
  contenWrapper.appendChild(contentTitle);
  contentParagraph.textContent = contentWelcomeDescription;
  contenWrapper.appendChild(contentParagraph);
  content.appendChild(contenWrapper);
};

const displayContent = (index) => {
  content.innerHTML = '';
  const contentBridName = document.createElement('h2');
  const birdImage = document.createElement('img');
  const birdDescription = document.createElement('p');

  contentBridName.textContent = birdContent[index].birdName;

  birdImage.src = birdContent[index].imageURL;
  birdImage.alt = birdContent[index].birdName + ' bird image';
  birdImage.style.width = '500px';
  birdImage.style.height = 'auto';

  birdDescription.textContent = !seeMore
    ? birdContent[index].description.slice(0, 500)
    : birdContent[index].description;
  if (seeMore) {
    const seemoreContent = document.createElement('p');
    seemoreContent.textContent = `Group : ${birdContent[index].group} \n Lifespan : ${birdContent[index].lifespan}\n Food :${birdContent[index].food}\n Found: ${birdContent[index].found} \n Lengthofbird: ${birdContent[index].lengthofbird} \n Weight : ${birdContent[index].weight}`;
  }

  const seeMoreButton = document.createElement('button');
  contentButton = seeMoreButton;
  seeMoreButton.textContent = seeMore ? 'See less' : 'See more';
  seeMoreButton.classList.add('content-button');

  seeMoreButton.addEventListener('click', () => {
    seeMore = !seeMore;
    displayContent(index);
    console.log(`See meore result: ${seeMore}`);
  });

  content.appendChild(contentBridName);
  content.appendChild(birdImage);
  content.appendChild(birdDescription);
  if (seeMore) {
    content.appendChild(seemoreContent);
  }
  content.appendChild(seeMoreButton);
};

displayWelcomeContent();

const resetSideBarLinks = () => {
  sidebarLinks.forEach((item) => {
    item.classList.remove('sidebar-link-active');
    item.classList.add('sidebar-links');
  });
};

sidebarLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (activelink === item) {
      displayWelcomeContent();
      resetSideBarLinks();
      activelink = null;
      return;
    }
    resetSideBarLinks();
    item.classList.add('sidebar-link-active');
    displayContent(index);
    activelink = item;
    activeIndex = index;
    console.log(activeIndex);
  });
});
