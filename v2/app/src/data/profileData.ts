import { Achievement, Activity } from "./types";
import BlueberryMuffinsImage from "../assets/profile/IMG_8350.webp";
import MooncakesImage from "../assets/profile/IMG_8351.webp";

export const achievements: Achievement[] = [
  {
    slug: "first-win",
    icon: "🏆",
    title: "First Win",
    description: "Completed first project",
    unlocked: true,
  },
  {
    slug: "first-app",
    icon: "🚀",
    title: "Launched App",
    description: "Released my first app to the public",
    unlocked: true,
  },
  {
    slug: "linguist",
    icon: "🌐",
    title: "Certified Linguist",
    description: "Obtained certification for multiple languages",
    unlocked: true,
  },
  {
    slug: "arms-of-steel",
    icon: "💪🏾",
    title: "Arms of Steel",
    description: "Made bread from scratch",
    unlocked: true,
  },
  {
    slug: "buzzing-eardrums",
    icon: "🎶",
    title: "Buzzing Eardrums",
    description: "Went to 5+ concerts in a year",
    unlocked: true,
  },
];

export const interests = [
  {
    id: 1,
    name: "Room No 1117",
    details: "Newest album from ATEEZ, my favorite K-pop group",
    highlight: "INCOMING",
    color: "linear-gradient(135deg, #ff0092, #ffbde6)",
    image:
      "https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/voszjachlrh/2824efd5-106b-4667-adc3-44fb41cbafff/c0faf6cf-8e38-4e64-84a5-a49233c748eb/ori.jpg",
    alt: "ATEEZ",
    icon: "🎵",
  },
  {
    id: 2,
    name: "Jojo's Bizarre Adventure",
    details: "We're getting Steel Ball Run anime 😭",
    highlight: "FAV",
    color: "linear-gradient(135deg, #6236ff, #9fb0ff)",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_.jpg",
    icon: "🌸",
  },
  {
    id: 6,
    name: "The Sims",
    details: "First game I've ever played (The Sims 3 are the best)",
    highlight: "CORE MEMORY",
    color: "linear-gradient(135deg, #ff006e, #d0f4de)",
    image:
      "https://m.media-amazon.com/images/I/71DLhfD9DlL._AC_UF1000,1000_QL80_.jpg",
    icon: "🎮",
  },
  {
    id: 4,
    name: "Blueberry Creamcheese Muffins",
    details: "Latest creation",
    highlight: "MASTER CHEF",
    color: "linear-gradient(135deg, #e85d04, #faa307)",
    image: BlueberryMuffinsImage,
    icon: "🍰",
  },
  {
    id: 9,
    name: "Red Bean & Lotus Paste Mooncakes",
    details: "Favorite creation of mine, for Mid-Autumn Festival",
    highlight: "MASTER CHEF",
    color: "linear-gradient(135deg, #e85d04, #faa307)",
    image: MooncakesImage,
    icon: "🍰",
  },
  {
    id: 5,
    name: "Volleyball",
    details: "Power spiker position and team vice-captain in high school",
    highlight: "MVP PLAYER",
    color: "linear-gradient(135deg, #38b000, #9ef01a)",
    image:
      "https://images.unsplash.com/photo-1686753767715-37cb0c34212c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDI%3D",
    icon: "🏐",
  },
  {
    id: 7,
    name: "Grave of the Fireflies",
    details: "Best Studio Ghibli movie (I like to cry apparently)",
    highlight: "FAV",
    color: "linear-gradient(135deg, #3a0ca3, #f72585)",
    image:
      "https://m.media-amazon.com/images/I/71DxYiB0N0L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    name: "Orchestra class",
    details: "Played trumpet for 3 years in middle school",
    highlight: "MUSICIAN",
    color: "linear-gradient(135deg, #7209b7, #3f37c9)",
    image:
      "https://images.unsplash.com/photo-1740904258428-e33f0605b781?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yY2hlc3RyYSUyMHRydW1wZXR8ZW58MHx8MHx8fDA%3D",
    icon: "🎶",
  },
];
