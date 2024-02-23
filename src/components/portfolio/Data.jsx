import roomtree1 from "../../assets/projects/roomtree/jointhetree.jpg";
import zombieSweeper from "../../assets/projects/zombieSweeper/zombie.png";
import renewU from "../../assets/projects/renewU/video.mp4";
import zoomin from "../../assets/projects/zoomIn/Zoom_in.png";
import covidTracker from "../../assets/projects/covidTracker/covid_tracker.png";
import oldPortfolio from "../../assets/projects/oldPortfolio/old_portfolio.png";

export const projectsData = [
  {
    id: 1,
    image: roomtree1,
    title: "RoomTree",
    category: ["App", "Startup"],
    description:
      "RoomTree, my innovative housing app, addresses the housing crisis for Canadian students and young adults. It simplifies the roommate and living space search by considering not only budget and location but also lifestyle preferences like age, gender, diet, drug usage, occupation, and party habits. RoomTree goes beyond basic criteria to enhance the housing experience for its users.",
    stack: [
      "JavaScript",
      "TypeScript",
      "CSS",
      "React-Native",
      "Firebase",
      "NodeJS",
      "Google Cloud",
    ],
    live: "https://www.linktr.ee/roomtree",
  },
  {
    id: 2,
    image: zombieSweeper,
    title: "Zombie Sweeper",
    category: ["App", "Side Project"],
    description:
      "An android Mine seeker game. In this game, there are zombies hidden in tombs, and it is the players job to find as many zombies in the fewest amount of taps. To make things more exciting, there is a 'scanning feature' that reveals the amount of zombies hidden in the row and column of the tapped tomb. The board size and amount of zombies are all completely customizable.",
    stack: ["Java", "Android"],
    source: "https://github.com/KemoLD/Zombie-Sweeper ",
  },
  {
    id: 3,
    video: renewU,
    title: "RenewU",
    category: ["Web", "Hackathon"],
    description:
      "At SFU's 'Fall Hacks 2023', embracing the theme of 'Turning Over a New Leaf', I created 'RenewU', a Self Help/Therapy Chat Bot. Powered by Microsoft Azure's Language and Cognitive Services, the UI offers an interactive experience.",
    stack: ["JavaScript", "CSS", "React", "Azure"],
    live: "https://renewu.netlify.app/",
    source: "https://github.com/KemoLD/renewu-frontend",
  },
  {
    id: 4,
    image: oldPortfolio,
    title: "Old Portfolio Website",
    category: ["Web", "Side Project"],
    description:
      "My Old Porfolio website built with NextJS, ThreeJS and Chakra-UI. It was a fun project to work on and I learned a lot about 3D web development.",
    stack: ["JavaScript", "CSS", "ThreeJS", "NextJS"],
    live: "https://renewu.netlify.app/",
    source: "https://github.com/KemoLD/portfolio_website",
  },
  {
    id: 5,
    image: zoomin,
    title: "Zoom In",
    category: ["Web", "Side Project"],
    description:
      "An Image sharing and downloading website similar to Pinterest, utilizing sanity IO. It implements sign in through Google Auth.",
    stack: ["JavaScript", "CSS", "React", "NodeJS"],
    live: "https://zoom-in.netlify.app ",
    source: "https://github.com/KemoLD/Media-website",
  },
  {
    id: 6,
    image: covidTracker,
    title: "Covid-19 Tracker",
    category: ["Web", "Side Project"],
    description:
      "A realtime COVID-19 cases, death and recoveries tracker. The website retrives data from the Disease.sh API. Not only does the website retrieve information for each country, but it also displays an interactive world map.",
    stack: ["JavaScript", "CSS", "React", "NodeJS"],
    live: "c-19-trackerr.netlify.app ",
    source: "https://github.com/KemoLD/Covid-19-tracker ",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "App",
  },
  {
    name: "Web",
  },
  {
    name: "Startup",
  },
  {
    name: "Hackathon",
  },
  {
    name: "Side Project",
  },
];
