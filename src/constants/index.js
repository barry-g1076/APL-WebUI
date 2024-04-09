import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  roadmap3,
  lexnpars,
  semantics,
  ai_integration,
  searchMd,
  telegram,
  twitter,
  microsoft,
  jasper,
  bard,
  chatgpt,
  claude,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Acknowledgements",
    url: "#acknowledgements",
  },
  {
    id: "2",
    title: "Team",
    url: "#team",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },

  {
    id: "4",
    title: "Documentation",
    url: "#documentation",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Editor",
    url: "#editor",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const typesnakeAcknowledgements = [
  "Endless gratitude to Mr. David White",
  "Special thanks to Microsoft",
  "Educated in APL (CIT 4004)",
];

export const typesnakeAcknowledgementsIcons = [
  microsoft,
  jasper,
  bard,
  chatgpt,
  claude,
];

export const roadmap = [
  {
    id: "0",
    title: "Lexer and Parser",
    text: "The TypeSnake parser and lexer were meticulously crafted using Python's PLY (Python Lex-Yacc), ensuring robustness and efficiency in parsing and tokenizing code structures with precision and reliability.",
    date: "April 2024",
    status: "done",
    imageUrl: lexnpars,
    colorful: true,
  },
  {
    id: "1",
    title: "Semantics and Compiler",
    text: "The TypeSnake compiler and semantics are meticulously crafted for efficient code interpretation and translation, ensuring high performance and accuracy for developers.",
    date: "April 2024",
    status: "done",
    imageUrl: semantics,
  },
  {
    id: "2",
    title: "TypeSnake App",
    text: "TypeSnake App: Currently in Development, Coming Soon!.",
    date: "April 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with LLM",
    text: "The TypeSnake IDE integrates AI for enhanced productivity, revolutionizing coding experiences with intelligent assistance.",
    date: "April 2024",
    status: "progress",
    imageUrl: ai_integration,
    colorful: true,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Perform Arithmetic",
    text: "TypeSnake offers seamless arithmetic operations, supporting both simple calculations and complex equations for accurate computation.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Create Functions",
    text: "TypeSnake empowers developers to streamline code and enhance readability by easily defining and utilizing functions for encapsulating reusable code blocks.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Error Handling",
    text: "TypeSnake ensures smoother development experiences with robust error handling, offering comprehensive reporting and debugging tools to enhance code reliability and maintainability.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Control Structures",
    text: "TypeSnake provides versatile control structures, empowering programmers to manage program flow and make decisions efficiently, facilitating the creation of dynamic and responsive programs.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
