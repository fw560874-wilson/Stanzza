const CDN = "https://cdn.prod.website-files.com";
const SITE = `${CDN}/69e1cc2c4bb2c432ebac4f2b`;
const WORK = `${CDN}/69ee72eb1c52062dd6b93785`;
const stock = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const images = {
  hero: `${SITE}/6a86de87db6a9dc42a4d26f1_4647ee0674beddf5340624786cf907f2_%D1%81%D1%82%D0%B0%D0%BD%D0%B7%D0%B0.avif`,
  pau: `${WORK}/6a4788c15cf2d44eb4b4f178_Pau.avif`,
  pauDetail: `${SITE}/6a478a453663695b288b7d9c_Pau%206.avif`,
  pauAlt: `${SITE}/6a478a842ccb9c9938480ade_Pau%207.avif`,
  valencia: `${WORK}/6a4788d5841b24ccb7063b9e_Valencia.avif`,
  chok: `${WORK}/6a47c8a660ca9bcc367ad484_Chok.avif`,
  jazean: `${WORK}/6a4788394562395f962728a3_Jazean.avif`,
  dose: `${WORK}/6a47c89b96f96fdc8b6fc485_Dose.avif`,
  team: `${SITE}/69ee70eaa5bc49a9712a21d3_team-work.webp`,
  workflow: `${SITE}/69ee70ea874551e8c744ee9f_team-workflow.webp`,
  object: `${SITE}/69ee70eab905a69a8f98030c_team-object.webp`,
  approachOne: `${SITE}/69ee77923ae9375fc0eb29da_3e1a9d810222586c5f0f51a03a0a533a_approach-frame-one.avif`,
  approachFour: `${SITE}/69ee77919776552620ffd5f7_a47db701177f70f1906b6197489f7bf7_approach-frame-four.avif`,
  approachFive: `${SITE}/69ee77925bbf68a06ecaa5eb_8eb35646c8feee2b67de8ca9b0e18a74_approach-frame-five.avif`,
  yearsOne: `${SITE}/69ee724eea478df4265a33fc_years%20card%20one.webp`,
  yearsTwo: `${SITE}/69ee724e3cd9f83fbd24af55_years%20card%20two.webp`,
  yearsThree: `${SITE}/69ee724efddc2a87eca52d47_years%20card%20three.webp`,
  yearsFour: `${SITE}/69ee724ea3b0fb3a7a781748_years%20card%20four.webp`,
  blogAtelier: `${WORK}/6a54ebe74a9d263b36e1bbf2_1.avif`,
  blogAtelierAlt: `${WORK}/6a4274eced0ea1dfd767f7ce_unnamed%20(1).avif`,
  blogPavilion: `${WORK}/6a54e95e15904f715ba47cc8_1.avif`,
  blogCotton: `${WORK}/6a3d4f69979005eb86a7e17b_reel.avif`,
  kirill: `${WORK}/6a550c31b738ef972b8c1417_1.avif`,
  heroAnim1: `${SITE}/69ee6e801ae6e050e47e94e6_1-hero-anim.webp`,
  heroAnim2: `${SITE}/69ee6e804fe5acc3c96a8b93_2-hero-anim.webp`,
  heroAnim3: `${SITE}/69ee6e809651caedf81df034_3-hero-anim.webp`,
  heroAnim4: `${SITE}/69ee6e800ada5ef0d5615b4e_4-hero-anim.webp`,
  heroAnim5: `${SITE}/69ee6e8020b6501ed7d5fe10_5-hero-anim.webp`,
  heroAnim6: `${SITE}/69ee6e80ac7c1015b9a83885_6-hero-anim.webp`,
  heroAnim7: `${SITE}/69ee6e80a5bc49a97129f69a_7-hero-anim.webp`,
  heroAnim8: `${SITE}/69ee6e8046b909eb8a768789_8-hero-anim.webp`,
  mainRoom: `${SITE}/69ee6f783661a77a4c257694_159404928da08c0dfc3695631bfdaa51_main.avif`,
  frameWide: `${WORK}/6a3d4b7b96a0e4f739732ef0_Frame%202147225912.avif`,
  frameStudy: `${SITE}/6a44f2a458ad22521be92f2f_Frame%202131331331.avif`,
  maskOne: `${SITE}/69ee715c5a1922a3cf704f04_Mask%20group-1.webp`,
  maskTwo: `${SITE}/69ee715cd027b41f18e6543d_Mask%20group.webp`,
  people: `${SITE}/69ee77926808ef1ff1eee44a_object-scroll-people.webp`,
  unnamedA: `${WORK}/6a42748f3f7ee8496f2fb61b_unnamed.avif`,
  unnamedB: `${WORK}/6a4d1558248d5f8950290b8b_unnamed%20(1).avif`,
  unnamedC: `${WORK}/6a4d17d6c74aae2378bbbbad_unnamed.avif`,
  teamleader: `${SITE}/69ee70ea3661a77a4c258807_teamleader.webp`,
  mainAlt: `${SITE}/69ee7924b8fa1fe493daa4b2_main.avif`,
  linenLiving: stock("photo-1600210492486-724fe5c67fb0"),
  stoneHall: stock("photo-1618221195710-dd6b41faaea6"),
  houseVolume: stock("photo-1600607687939-ce8a6c25118c"),
  calmKitchen: stock("photo-1600566753190-17f0baa2a6c3"),
  courtyard: stock("photo-1600585154340-0ef3c08c0084"),
  softBedroom: stock("photo-1616486338812-3dadae4b4ace"),
  oakLounge: stock("photo-1600210491892-03d54c0aaf87"),
  galleryLiving: stock("photo-1631679706909-1844bbd07221"),
  linenBed: stock("photo-1615873968403-89e068629265"),
  diningLight: stock("photo-1600585154526-990dced4db0d"),
  paleSalon: stock("photo-1600047509807-ba8f99d2cdac"),
  chefKitchen: stock("photo-1556912173-46c336c7fd55"),
  cityBedroom: stock("photo-1560448204-e02f11c3d0e2"),
  artWall: stock("photo-1618220179428-22790b461013"),
  marbleKitchen: stock("photo-1600585152220-90363fe7e115"),
  sofaRoom: stock("photo-1598928506311-c55ded91a20c"),
  plantCorner: stock("photo-1586023492125-27b2c045efd7"),
  quietNordic: stock("photo-1519710164239-da123dc03ef4"),
  brightFlat: stock("photo-1493809842364-78817add7ffb"),
  timberKitchen: stock("photo-1484154218964-2a4ed3638168"),
  loftLight: stock("photo-1502672260266-1c1ef2d93688"),
  greenSalon: stock("photo-1615529182904-14819c35db37"),
  beigeSuite: stock("photo-1616594039964-ae9021a400a0"),
  whiteVilla: stock("photo-1600607688969-a5bfcd646154"),
  stairHall: stock("photo-1600607687644-c7171b42498b"),
  poolCourt: stock("photo-1600607687920-4e2a09cf159d"),
  cafeBanquette: stock("photo-1554118811-1e0d58224f24"),
  coffeeRoom: stock("photo-1559925393-8be0ec4767c8"),
  espressoBar: stock("photo-1445116572660-236099ec97a9"),
  stoneBath: stock("photo-1617103996702-96ff29b1c467"),
  longTable: stock("photo-1617806118233-18e1de247200"),
  limeWash: stock("photo-1618221381711-42ca8ab6e903"),
  apartmentGlow: stock("photo-1560185007-c5ca9d2c014d"),
  sittingNook: stock("photo-1560185127-6ed189bf02f4"),
};

export type Shot = { src: string; alt: string };

const shot = (src: string, alt: string): Shot => ({ src, alt });

export const interiors = {
  about: [
    shot(images.pauDetail, "Pau Claris living room"),
    shot(images.valencia, "Valencia apartment seating"),
    shot(images.chok, "Cafe Chok"),
    shot(images.pauAlt, "Pau Claris detail"),
    shot(images.jazean, "Jazean coffee house"),
    shot(images.dose, "Dose coffee house"),
    shot(images.approachOne, "Architecture study"),
    shot(images.blogCotton, "Cotton House"),
    shot(images.linenLiving, "Linen living room"),
    shot(images.oakLounge, "Oak lounge"),
    shot(images.galleryLiving, "Gallery living room"),
    shot(images.diningLight, "Dining with daylight"),
    shot(images.softBedroom, "Soft bedroom"),
    shot(images.calmKitchen, "Calm kitchen"),
    shot(images.heroAnim1, "Composed living room"),
    shot(images.heroAnim3, "Warm interior light"),
    shot(images.mainRoom, "Main studio room"),
    shot(images.paleSalon, "Pale salon"),
    shot(images.greenSalon, "Green salon"),
    shot(images.quietNordic, "Quiet nordic room"),
    shot(images.maskOne, "Material composition"),
    shot(images.stoneHall, "Stone hall"),
    shot(images.courtyard, "Courtyard house"),
    shot(images.plantCorner, "Plant corner"),
  ],
  projects: [
    shot(images.pau, "Pau Claris Apartment"),
    shot(images.valencia, "Valencia apartment"),
    shot(images.chok, "Cafe Chok"),
    shot(images.jazean, "Jazean coffee house"),
    shot(images.dose, "Dose coffee house"),
    shot(images.pauDetail, "Pau Claris living room"),
    shot(images.pauAlt, "Pau Claris interior"),
    shot(images.hero, "Studio interior"),
    shot(images.blogAtelier, "L'Atelier Barcelona"),
    shot(images.houseVolume, "House volume"),
    shot(images.whiteVilla, "White villa interior"),
    shot(images.stairHall, "Stair hall"),
    shot(images.artWall, "Living room with art"),
    shot(images.sofaRoom, "Composed sofa room"),
    shot(images.cafeBanquette, "Hospitality banquette"),
    shot(images.coffeeRoom, "Coffee room"),
    shot(images.espressoBar, "Espresso bar"),
    shot(images.limeWash, "Limewash interior"),
    shot(images.heroAnim2, "Selected living room"),
    shot(images.heroAnim5, "Selected seating"),
    shot(images.frameWide, "Wide interior frame"),
    shot(images.longTable, "Long dining table"),
    shot(images.poolCourt, "Courtyard pool"),
    shot(images.mainAlt, "Finished room"),
  ],
  approach: [
    shot(images.approachOne, "Approach — architecture"),
    shot(images.approachFour, "Approach — design"),
    shot(images.approachFive, "Approach — delivery"),
    shot(images.workflow, "Studio workflow"),
    shot(images.team, "Team at work"),
    shot(images.object, "Material object"),
    shot(images.pauDetail, "Proportion study"),
    shot(images.stoneHall, "Material hall"),
    shot(images.timberKitchen, "Timber kitchen study"),
    shot(images.marbleKitchen, "Marble kitchen"),
    shot(images.chefKitchen, "Working kitchen"),
    shot(images.stoneBath, "Stone bathroom"),
    shot(images.frameStudy, "Drawing and proportion"),
    shot(images.yearsTwo, "Light study"),
    shot(images.people, "Studio process"),
    shot(images.heroAnim4, "Room in progress"),
    shot(images.heroAnim6, "Material palette"),
    shot(images.loftLight, "Loft light study"),
    shot(images.brightFlat, "Bright apartment plan"),
    shot(images.apartmentGlow, "Evening apartment glow"),
    shot(images.sittingNook, "Sitting nook"),
    shot(images.teamleader, "Studio lead"),
    shot(images.unnamedC, "Finished detail"),
    shot(images.courtyard, "Volume and courtyard"),
  ],
  awards: [
    shot(images.hero, "Awarded studio interior"),
    shot(images.pau, "Pau Claris Apartment"),
    shot(images.jazean, "Jazean coffee house"),
    shot(images.dose, "Dose coffee house"),
    shot(images.chok, "Cafe Chok"),
    shot(images.blogPavilion, "Barcelona Pavilion"),
    shot(images.valencia, "Valencia apartment"),
    shot(images.whiteVilla, "Recognised villa interior"),
    shot(images.galleryLiving, "Recognised living room"),
    shot(images.oakLounge, "Oak lounge"),
    shot(images.linenLiving, "Linen composition"),
    shot(images.heroAnim7, "Recognised dining"),
    shot(images.heroAnim8, "Recognised seating"),
    shot(images.mainRoom, "Composed interior"),
    shot(images.blogAtelier, "L'Atelier Barcelona"),
    shot(images.espressoBar, "Hospitality bar"),
    shot(images.cafeBanquette, "Cafe banquette"),
    shot(images.paleSalon, "Pale salon"),
    shot(images.greenSalon, "Green salon"),
    shot(images.beigeSuite, "Beige suite"),
    shot(images.unnamedA, "Awarded hospitality room"),
    shot(images.pauDetail, "Pau Claris living room"),
  ],
  blog: [
    shot(images.blogAtelier, "L'Atelier Barcelona"),
    shot(images.blogAtelierAlt, "L'Atelier display"),
    shot(images.blogPavilion, "Barcelona Pavilion"),
    shot(images.blogCotton, "Cotton House"),
    shot(images.pauAlt, "Interior study"),
    shot(images.quietNordic, "Quiet editorial room"),
    shot(images.plantCorner, "Plant still"),
    shot(images.sofaRoom, "Editorial sofa"),
    shot(images.linenBed, "Editorial bedroom"),
    shot(images.cityBedroom, "City bedroom"),
    shot(images.artWall, "Art wall living room"),
    shot(images.coffeeRoom, "Cafe editorial"),
    shot(images.approachFour, "Design frame"),
    shot(images.unnamedA, "Pastry shop interior"),
    shot(images.unnamedB, "Quiet Barcelona room"),
    shot(images.unnamedC, "Cotton House detail"),
    shot(images.heroAnim1, "Editorial living room"),
    shot(images.heroAnim3, "Editorial seating"),
    shot(images.frameWide, "Wide room study"),
    shot(images.diningLight, "Dining editorial"),
    shot(images.sittingNook, "Reading nook"),
    shot(images.limeWash, "Limewash study"),
  ],
  contact: [
    shot(images.kirill, "Kirill, founder"),
    shot(images.team, "Studio work"),
    shot(images.workflow, "Studio workflow"),
    shot(images.pauDetail, "Barcelona interior"),
    shot(images.object, "Material object"),
    shot(images.stoneHall, "Studio hall"),
    shot(images.people, "Studio conversations"),
    shot(images.teamleader, "Studio lead"),
    shot(images.linenLiving, "Barcelona living room"),
    shot(images.oakLounge, "Studio lounge"),
    shot(images.heroAnim2, "Barcelona room"),
    shot(images.maskOne, "Material sample"),
    shot(images.mainAlt, "Finished composition"),
    shot(images.frameStudy, "Studio study"),
    shot(images.yearsFour, "Studio space"),
    shot(images.apartmentGlow, "Evening interior"),
    shot(images.longTable, "Studio table"),
    shot(images.marbleKitchen, "Kitchen sample"),
    shot(images.beigeSuite, "Quiet suite"),
    shot(images.courtyard, "House courtyard"),
  ],
};

export const videos = {
  hero: "https://futuria-webm-video.b-cdn.net/stanza/stanzza.webm",
  writer: "https://futuria-webm-video.b-cdn.net/stanza/writer.mov",
  kirill: "https://futuria-webm-video.b-cdn.net/stanza/output_h264.mp4",
};

export const studio = {
  name: "Stanzza",
  email: "kirill@stanzza.design",
  phone: "+34 654 496 780",
  phoneHref: "tel:+34654496780",
  address: "Carrer d'Ausiàs March 13, 08010 Barcelona",
  maps: "https://maps.app.goo.gl/TGYpnaESmci1h4PS8",
  socials: {
    instagram: "https://www.instagram.com/stanzza_design",
    linkedin: "https://www.linkedin.com/in/kirill-ivko-a503a6313",
    behance: "https://www.behance.net/stanzza",
    facebook: "https://www.facebook.com/Stanzza-Design-111487748009895",
  },
};

export const nav = [
  { label: "About", to: "/#composition", image: images.pauDetail },
  { label: "Projects", to: "/projects", image: images.pau },
  { label: "Approach", to: "/approach", image: images.approachOne },
  { label: "Awards", to: "/awards", image: images.hero },
  { label: "Blog", to: "/blog", image: images.blogPavilion },
  { label: "Contact", to: "/contact", image: images.kirill },
];

export type Project = {
  slug: string;
  title: string;
  date: string;
  days: number;
  area: number;
  city: string;
  country: string;
  image: string;
  gallery: string[];
  accent: string;
  client: string;
  objective: string;
  solution: string;
  notes: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "pau-claris-apartment",
    title: "Pau Claris Apartment",
    date: "22 January 2025",
    days: 62,
    area: 150,
    city: "Barcelona",
    country: "Spain",
    image: images.pau,
    gallery: [
      images.pau,
      images.pauDetail,
      images.pauAlt,
      images.hero,
      images.valencia,
      images.linenLiving,
      images.oakLounge,
      images.galleryLiving,
      images.diningLight,
      images.approachOne,
      images.heroAnim1,
      images.mainRoom,
      images.maskOne,
    ],
    accent: "#7A8452",
    client:
      "A married couple who have already raised adult children and are welcoming grandchildren. They bought a spacious apartment in the Eixample, in a house at the turn of the XIX–XX centuries, and immediately started renovation in order to rewrite the interior for themselves.",
    objective:
      "To make a partial but deep renovation: without interfering with the distribution of the premises, to re-reflect the individuality of the owners through materials, furniture, light and engineering systems — and at the same time preserve everything authentic that already gives the apartment a soul.",
    solution:
      "We preserved everything authentic — the hardwood floors, the steel kitchen, the black historical columns. We uncovered the 19th-century brickwork and applied a modern Italian layer to it: bold furniture and light laid out to the rhythm of the family day.",
    notes: [
      {
        title: "Heritage",
        text: "All the decoration was stripped to the ground, and the original 19th-century brickwork was revealed around the arched balcony windows. This became the main historical gesture of the interior.",
      },
      {
        title: "Authenticity",
        text: "Only the floor, supporting structures, bathrooms and built-in furniture remained intact — a steel kitchen, authentic wooden parquet, black historical metal columns. Everything that gives the apartment a soul remains in its place.",
      },
      {
        title: "Furniture",
        text: "We applied a modern Italian layer to this Barcelona in its purest form — bold, recognizable furniture. Each item here is not filling, but a choice and reflection of the owner.",
      },
      {
        title: "Light",
        text: "Light became a separate drama of space — lighting scenarios laid out according to the rhythm of the family day, from morning to late conversations.",
      },
    ],
  },
  {
    slug: "valencia-apartment",
    title: "Valencia apartment",
    date: "22 January 2024",
    days: 78,
    area: 124,
    city: "Barcelona",
    country: "Spain",
    image: images.valencia,
    gallery: [
      images.valencia,
      images.pauAlt,
      images.hero,
      images.pauDetail,
      images.blogCotton,
      images.quietNordic,
      images.paleSalon,
      images.greenSalon,
      images.softBedroom,
      images.yearsTwo,
      images.heroAnim3,
      images.frameStudy,
      images.unnamedB,
    ],
    accent: "#2C3C66",
    client:
      "A young family relocating to Barcelona, looking for a calm, light-filled home with a clear daily rhythm.",
    objective:
      "Create a composed apartment where circulation feels effortless, materials age well, and every room works as part of one interior.",
    solution:
      "We kept the plan honest, refined proportion, and built the atmosphere through a restrained palette of stone, timber and linen. Light does the rest.",
    notes: [
      {
        title: "Plan",
        text: "Circulation was clarified so the home reads as one sequence rather than a set of rooms.",
      },
      {
        title: "Material",
        text: "A quiet palette of limewash, oak and stone keeps the rooms calm and connected.",
      },
    ],
  },
  {
    slug: "cafe-chok",
    title: "Cafe Chok",
    date: "23 November 2023",
    days: 32,
    area: 131,
    city: "Riyadh",
    country: "Saudi Arabia",
    image: images.chok,
    gallery: [
      images.chok,
      images.dose,
      images.jazean,
      images.blogAtelier,
      images.cafeBanquette,
      images.coffeeRoom,
      images.espressoBar,
      images.object,
      images.approachFive,
      images.heroAnim5,
      images.unnamedA,
      images.frameWide,
    ],
    accent: "#8A6A4A",
    client: "A hospitality brand looking for a precise, warm coffee room with a memorable first impression.",
    objective:
      "Design a compact cafe that feels generous: clear service, tactile materials, and a room people want to stay in.",
    solution:
      "The counter became the architectural centre. Seating, lighting and finishes were composed around it so the room feels complete from the street.",
    notes: [
      {
        title: "Counter",
        text: "The bar is both service and sculpture — the one object that organises the whole interior.",
      },
    ],
  },
  {
    slug: "jazean-coffee-house",
    title: "Jazean coffee house",
    date: "22 January 2023",
    days: 65,
    area: 511,
    city: "Riyadh",
    country: "Saudi Arabia",
    image: images.jazean,
    gallery: [
      images.jazean,
      images.chok,
      images.dose,
      images.team,
      images.workflow,
      images.cafeBanquette,
      images.espressoBar,
      images.longTable,
      images.yearsThree,
      images.heroAnim7,
      images.people,
      images.unnamedC,
    ],
    accent: "#4A5340",
    client: "A growing coffee house looking for a composed public room with a strong material identity.",
    objective:
      "Turn a large floorplate into a sequence of calm zones without losing the energy of a coffee house.",
    solution:
      "We used scale, light and furniture groupings to break the volume into rooms within a room — still one composition.",
    notes: [
      {
        title: "Scale",
        text: "Large interiors need discipline. We used repeated materials and a clear seating rhythm to keep the space coherent.",
      },
    ],
  },
  {
    slug: "dose-coffee-house",
    title: "Dose coffee house",
    date: "22 January 2022",
    days: 82,
    area: 364,
    city: "Riyadh",
    country: "Saudi Arabia",
    image: images.dose,
    gallery: [
      images.dose,
      images.jazean,
      images.chok,
      images.blogAtelierAlt,
      images.coffeeRoom,
      images.marbleKitchen,
      images.timberKitchen,
      images.approachFour,
      images.yearsFour,
      images.heroAnim8,
      images.mainAlt,
      images.maskTwo,
    ],
    accent: "#3D2C24",
    client: "Dose, a coffee brand that needed the interior to feel as considered as the product.",
    objective:
      "Deliver a hospitality interior that is precise, warm and operationally clear from the first day of service.",
    solution:
      "Material, light and circulation were resolved together so the room works for guests and staff without visual noise.",
    notes: [
      {
        title: "Service",
        text: "A beautiful cafe still has to work. The plan protects the guest experience and the line behind the bar.",
      },
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  image: string;
  photos?: string[];
  author: string;
  body: { heading?: string; paragraphs?: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "latelier-barcelona",
    title: "L'Atelier Barcelona: a pastry shop where dessert is the main character and the interior is his stage",
    excerpt:
      "When a good interior can make a product more valuable than it is, L'Atelier Barcelona is an excellent example of this solution.",
    date: "11 Jan 2026",
    read: "5 min read",
    image: images.blogAtelier,
    photos: [
      images.blogAtelierAlt,
      images.unnamedA,
      images.heroAnim2,
      images.frameWide,
      images.coffeeRoom,
      images.espressoBar,
      images.paleSalon,
    ],
    author: "Kirill, CEO & Founder",
    body: [
      {
        paragraphs: [
          "In this pastry shop, the sales area is designed so that desserts don’t look like food — they look like jewelry displayed in an art boutique. This is not a metaphor. It is a precise architectural approach.",
          "They designed a space that respects the product so deeply that it turns it into an exhibit.",
        ],
      },
      {
        heading: "1. The core idea: dessert as a precious object",
        paragraphs: [
          "Most pastry shops are built around display cases. Here, the display is not furniture — it is an architectural tool that defines the entire atmosphere.",
          "Everything in the sales area follows one principle: nothing should be more important than the dessert.",
        ],
        list: [
          "Clean background",
          "Minimalist lines",
          "Highly transparent glass",
          "Precise lighting",
          "Honest materials",
          "Quiet spatial composition",
        ],
      },
      {
        heading: "2. Display cases: jewelry-level presentation",
        paragraphs: ["The display cases are a masterclass in design."],
        list: [
          "Minimal framing — almost invisible, creating the illusion that desserts are floating.",
          "Museum-style lighting directed inward to highlight volume, glaze and layered structure.",
          "A low visual horizon so the eye lands on the dessert, not the glass.",
          "Clear composition: even rows, repetition, rhythm, visual calm.",
        ],
      },
      {
        heading: "3. Honest materials as a background",
        list: [
          "Metal emphasizes precision and technical quality",
          "Glass creates transparency without visual noise",
          "Light surfaces enhance the colours of the desserts",
          "Matte panels provide soft, diffused light",
        ],
        paragraphs: [
          "There are no imitations or decorative excess. Only authentic materials that do not compete with the product.",
        ],
      },
      {
        heading: "Final insight",
        paragraphs: [
          "If you want to create a premium product, you must first create a premium context. The display case is a stage where the product becomes art.",
        ],
      },
    ],
  },
  {
    slug: "barcelona-pavilion",
    title: "Barcelona Pavilion: the building that made minimalism luxurious",
    excerpt:
      "Some buildings still feel modern even as they approach a century in age. The Barcelona Pavilion by Ludwig Mies van der Rohe is one of them.",
    date: "11 Jan 2026",
    read: "6 min read",
    image: images.blogPavilion,
    photos: [
      images.approachOne,
      images.pauAlt,
      images.unnamedB,
      images.heroAnim4,
      images.mainRoom,
      images.stoneHall,
      images.whiteVilla,
      images.stairHall,
    ],
    author: "Kirill, CEO & Founder",
    body: [
      {
        paragraphs: [
          "It is difficult to believe that such clarity of form, such precision of glass and stone planes, emerged in an era dominated by ornament. Mies was ahead of his time, using honest materials and uncompromising composition to redefine what architecture could be.",
        ],
      },
      {
        heading: "1. About the architect",
        paragraphs: [
          "Ludwig Mies van der Rohe, a leading figure of the Bauhaus movement, shaped the modern understanding of minimalism. His phrase “Less is more” finds its true meaning in projects like the Barcelona Pavilion, where simplicity becomes substance and materials carry the narrative.",
        ],
      },
      {
        heading: "2. Purpose of the Pavilion",
        paragraphs: [
          "The Pavilion was designed in 1928 and built in 1929 for the International Exposition in Barcelona. It was intended to represent a new Germany, its modern mindset, its technological progress and its architectural future.",
        ],
      },
      {
        heading: "3. Honest materials as the core idea",
        paragraphs: [
          "Mies rejected decoration entirely. He believed that materials themselves should express meaning and emotion without imitation or applied ornament.",
        ],
        list: [
          "Alpine green marble — bold veining and complex texture",
          "Golden onyx — translucent, warm, an emotional focal point",
          "Travertine — neutral and grounding",
          "Chrome-plated steel — reflective and precise",
          "Glass — a boundary that dissolves spatial limits",
        ],
      },
      {
        heading: "Final insight",
        paragraphs: [
          "The Barcelona Pavilion is more than a masterpiece of modernism. It is a project that made minimalism feel luxurious, while proving that honest materials can be more powerful than any decoration.",
        ],
      },
    ],
  },
  {
    slug: "cotton-house",
    title: "Cotton House: a quiet Barcelona place you only share with your own",
    excerpt:
      "A hotel interior that feels like a private house: proportion, material and a kind of silence you remember.",
    date: "8 Jan 2026",
    read: "4 min read",
    image: images.blogCotton,
    photos: [
      images.yearsOne,
      images.pauDetail,
      images.unnamedC,
      images.heroAnim6,
      images.blogCotton,
      images.linenBed,
      images.quietNordic,
      images.sittingNook,
    ],
    author: "Kirill, CEO & Founder",
    body: [
      {
        paragraphs: [
          "Some interiors are designed to impress immediately. Cotton House works in the opposite direction: it reveals itself slowly, through proportion, material and a kind of silence you only notice when you leave.",
          "It is a Barcelona place you do not advertise. You take people you trust.",
        ],
      },
      {
        heading: "A house, not a lobby",
        paragraphs: [
          "The strength of Cotton House is that it never over-explains itself. Rooms feel composed rather than decorated. Furniture sits where it should. Light is allowed to do the work.",
        ],
      },
      {
        heading: "What we take from it",
        list: [
          "Restraint is a form of luxury",
          "Circulation can feel like hospitality",
          "Materials should age, not perform",
          "A good room does not need to announce itself",
        ],
      },
    ],
  },
];

export const faqs = [
  {
    q: "Do you only create the design project, or do you manage the renovation end to end?",
    a: "We support the project at every stage — from the initial concept to a fully furnished and completed space. Construction is carried out by a licensed general contractor selected through a tender. We manage the full implementation process on your behalf.",
  },
  {
    q: "What is included in the design project, and what will I receive?",
    a: "The design project has three sections: design concept, 3D visualisation, and architectural documentation. You receive a fully approved set that can be used to prepare an accurate cost estimate and start the renovation without additional revisions.",
  },
  {
    q: "How much does the design project cost, and what affects the price?",
    a: "Every property is unique, so cost is calculated individually. Price depends on size, scope, residential or commercial use, interior style, custom solutions, and the current condition of the property.",
  },
  {
    q: "How is the renovation estimate prepared, and what does it include?",
    a: "The estimate is prepared from the approved design, engineering, finishes schedule and specifications. It is prepared in two languages — Russian and Spanish — and compared through a contractor tender so you receive a verified calculation.",
  },
  {
    q: "What happens if the final cost of works exceeds the estimate?",
    a: "The final estimate is fixed after the tender and included in the contractor contract. It can only change by additional agreement — usually if you change the scope after approval, or if hidden site conditions appear.",
  },
  {
    q: "What are the stages of work — from first enquiry to completion?",
    a: "Design (concept, visualisation, documentation, engineering), budgeting (estimate, tender, schedule, procurement), and implementation (supervision, project management, procurement, handover).",
  },
  {
    q: "How long does the design project take, and how long does the renovation take?",
    a: "On average, design takes 1 to 4 months and construction 6 to 12 months. The exact timeline is included in the detailed work schedule.",
  },
  {
    q: "What is design supervision, and why do I need it?",
    a: "The designer visits the site 1–2 times a week, checks progress against the project, approves samples and resolves issues that could not be predicted in advance. Without it, the build can drift from the approved design.",
  },
  {
    q: "Do I need permits for the renovation, and do you handle them?",
    a: "In Spain, renovation usually requires a licencia de obras. Our licensed architects prepare the documentation and organise the permit process.",
  },
  {
    q: "Can we work together remotely if I live in another country or city?",
    a: "Yes. Design can be developed remotely. Implementation happens locally in Barcelona and Catalonia. You receive a personal Notion workspace with documents, estimates and site photos updated in real time.",
  },
];

export const delivery = [
  {
    n: "01",
    title: "One responsible lead",
    text: "A single point of contact from brief to handover — full accountability, no handoffs.",
  },
  {
    n: "02",
    title: "Structured process",
    text: "Each phase has defined stages, milestones, and sign-offs. Nothing moves forward without your approval.",
  },
  {
    n: "03",
    title: "Changes and costs — always visible",
    text: "Every revision is documented, priced, and agreed before execution. No surprises on the invoice.",
  },
  {
    n: "04",
    title: "Quality on site",
    text: "Author supervision throughout construction — your vision doesn't get lost in translation.",
  },
];

export const pillars = [
  {
    n: "01",
    title: "Architecture",
    text: "Planning, circulation, engineering logic. The invisible layer that makes daily life effortless.",
  },
  {
    n: "02",
    title: "Design",
    text: "Material, light, proportion, restraint. Choices that feel calm and age well.",
  },
  {
    n: "03",
    title: "Delivery",
    text: "Coordination, timing, detailing through handover. Where the design stays intact.",
  },
];

export const stats = [
  { value: "10", label: "Years in Spain" },
  { value: "20", label: "Years in practice" },
  { value: "38", label: "Projects in Spain" },
  { value: "182", label: "Projects worldwide" },
];

export const clients = [
  "Mango",
  "MediaMarkt",
  "Dose",
  "Jazean",
  "Elis",
  "Kaldi",
  "Baron",
  "Everyway",
];

export const awards = [
  {
    year: "2026",
    title: "Awwwards Nominee",
    org: "Awwwards",
    text: "STANZZA design was nominated for Site of the Day — recognised for composition, motion and a complete digital experience.",
  },
  {
    year: "2026",
    title: "Webflow Featured",
    org: "Webflow",
    text: "Selected among contemporary studio sites for typography, editorial pacing and material photography.",
  },
  {
    year: "2025",
    title: "Hospitality interiors",
    org: "Studio recognition",
    text: "Jazean, Dose and Cafe Chok established the studio’s hospitality language across Riyadh.",
  },
  {
    year: "2015–2026",
    title: "European practice",
    org: "Stanzza Design Europe",
    text: "A decade of work in Spain, with 38 completed projects and a practice that began in 2002.",
  },
];
