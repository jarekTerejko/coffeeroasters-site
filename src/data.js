import HomeHeroBgD from "./assets/home/desktop/image-hero-coffeepress.jpg";
import HomeHeroBgT from "./assets/home/tablet/image-hero-coffeepress.jpg";
import HomeHeroBgM from "./assets/home/mobile/image-hero-coffeepress.jpg";
import AboutUsHeroBgD from "./assets/about/desktop/image-hero-whitecup.jpg";
import AboutUsHeroBgT from "./assets/about/tablet/image-hero-whitecup.jpg";
import AboutUsHeroBgM from "./assets/about/mobile/image-hero-whitecup.jpg";
import CreateYourPlanHeroBgD from "./assets/plan/desktop/image-hero-blackcup.jpg";
import CreateYourPlanHeroBgT from "./assets/plan/tablet/image-hero-blackcup.jpg";
import CreateYourPlanHeroBgM from "./assets/plan/mobile/image-hero-blackcup.jpg";
import granEspressoImg from "./assets/home/desktop/image-gran-espresso.png";
import planaltoImg from "./assets/home/desktop/image-planalto.png";
import piccolloImg from "./assets/home/desktop/image-piccollo.png";
import dancheImg from "./assets/home/desktop/image-danche.png";
import beanIcon from "./assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "./assets/home/desktop/icon-gift.svg";
import truckIcon from "./assets/home/desktop/icon-truck.svg";
import ukIcon from "./assets/about/desktop/illustration-uk.svg";
import canadaIcon from "./assets/about/desktop/illustration-canada.svg";
import australiaIcon from "./assets/about/desktop/illustration-australia.svg";

export const navLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About us",
    path: "/about",
  },
  {
    text: "Create your plan",
    path: "/plan",
  },
];

export const aboutUsHero = [
  {
    imageD: AboutUsHeroBgD,
    imageT: AboutUsHeroBgT,
    imageM: AboutUsHeroBgM,
    title: "About us",
    desc: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
  },
];

export const createYourPlanHero = [
  {
    imageD: CreateYourPlanHeroBgD,
    imageT: CreateYourPlanHeroBgT,
    imageM: CreateYourPlanHeroBgM,
    title: "Create a plan",
    desc: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
  },
];

export const homeHero = [
  {
    imageD: HomeHeroBgD,
    imageT: HomeHeroBgT,
    imageM: HomeHeroBgM,
    title: "Great coffee made simple.",
    desc: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
  },
];

export const collection = [
  {
    image: granEspressoImg,
    heading: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: planaltoImg,
    heading: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: piccolloImg,
    heading: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    image: dancheImg,
    heading: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const whyChooseTexts = [
  "Why choose us?",
  "A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.",
];

export const whyChooseCards = [
  {
    image: beanIcon,
    alt: "coffee bean",
    heading: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: giftIcon,
    alt: "gift",
    heading: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: truckIcon,
    alt: "truck",
    heading: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const howItWorks = [
  {
    heading: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for hem. There are new coffees in all profiles every month for you to try out.",
  },
  {
    heading: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your	subscription with no commitment through our online portal.",
  },
  {
    heading: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted.	Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const headquarters = [
  {
    icon: ukIcon,
    location: "United Kingdom",
    information: {
      street: "68 Ashfordby Rd",
      city: "Alcaston",
      state: "SY6 1YA",
      phone: "+44 1241 918425",
    },
  },
  {
    icon: canadaIcon,
    location: "Canada",
    information: {
      street: "1529 Eglington Avenue",
      city: "Toronto",
      state: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
  },
  {
    icon: australiaIcon,
    location: "Australia",
    information: {
      street: "36 Swanston Street",
      city: "Kewell",
      state: "Victoria",
      phone: "+61 4 9928 3629",
    },
  },
];

export const questions = [
  {
    name: "Preferences",
    open: true,
    question: "How do you drink your coffee?",
    answers: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
        selected: false,
      },
      {
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
        selected: false,
      },
      {
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
        selected: false,
      },
    ],
  },
  {
    name: "Bean Type",
    open: false,
    question: "What type of coffee?",
    answers: [
      {
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
        selected: false,
      },
      {
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
        selected: false,
      },
      {
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
        selected: false,
      },
    ],
  },
  {
    name: "Quantity",
    open: false,
    question: "How much would you like?",
    answers: [
      {
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        selected: false,
      },
      {
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        selected: false,
      },
      {
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        selected: false,
      },
    ],
  },
  {
    name: "Grind Option",
    open: false,
    question: "Want us to grind them?",
    answers: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
        selected: false,
      },
      {
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
        selected: false,
      },
      {
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
        selected: false,
      },
    ],
  },
  {
    name: "Deliveries",
    open: false,
    question: "How often should we deliver?",
    answers: [
      {
        title: "Every week",
        frequency: "weekly",
        description: "per shipment. Includes free first-class shipping.",
        selected: false,
      },
      {
        title: "Every 2 weeks",
        frequency: "biweekly",
        description: "per shipment. Includes free priority shipping.",
        selected: false,
      },
      {
        title: "Every month",
        frequency: "monthly",
        description: "per shipment. Includes free priority shipping.",
        selected: false,
      },
    ],
  },
];
