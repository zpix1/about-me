import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import Avatar from "../images/photo.jpg";

export const RESUME_DATA = {
  name: "Ivan Baksheev",
  initials: "IB",
  location: "Novosibirsk, Russia, UTC+7",
  locationLink: "https://www.google.com/maps/place/Novosibirsk",
  avatarUrl: Avatar,
  about:
    "Fullstack engineer. Mathematics, programming, and cybersecurity enthusiast. Active CTF participant.",
  personalWebsiteUrl: "https://zpix1.github.io",
  contact: {
    email: "dczpix@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zpix1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ivan-baksheev-94518a230/",
        icon: LinkedInIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/zpix1",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "Novosibirsk State University",
      degree: "Master's Degree in Informatics and Computer Engineering",
      start: "2023",
      end: "2025",
    },
    {
      school: "Novosibirsk State University",
      degree: "Bachelor's Degree in Informatics and Computer Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Huawei R&D",
      badges: [],
      title: "Typescript Engineer",
      start: "Apr. 2022",
      end: "To Date",
      description:
        "Working on an IDE-related desktop software using Electron, TypeScript, React, Java",
    },
    {
      company: "JetBrains",
      badges: ["Remote"],
      title: "Software Developer",
      start: "July 2021",
      end: "Mar. 2022",
      description:
        "Developed a feature-rich internal web app using TypeScript, React, styled-components, Protobuf, and gRPC. Integrated JWT and OAuth2 for subsystem connections, and ensured robustness with Cypress testing. Collaborated on a Scala codebase, utilized various tools, and managed databases and AWS services. Created a FastAPI-powered web app for ML entity comparison, enhancing model precision for the team",
    },
  ],
  skills: [
    "Python",
    "Computer Security",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "WebSockets",
  ],
  projects: [
    {
      title: "Youtube Anti Translate",
      techStack: ["Chrome Extension", "JavaScript"],
      description:
        "A chrome extension to disable YouTube video titles translation, 5000+ users",
      link: {
        label: "chromewebstore.google.com",
        href: "https://chromewebstore.google.com/detail/youtube-anti-translate/ndpmhjnlfkgfalaieeneneenijondgag?hl=ru",
      },
    },
    {
      title: "Pechatay",
      techStack: ["Vue.js", "WebSockets"],
      description: "PvP typing trainer",
      link: {
        label: "pechatay",
        href: "https://zpix1.github.io/pechatay/#/",
      },
    },

    {
      title: "VK PM Downloader",
      techStack: ["Vue.js"],
      description:
        "Client-side VK (Russian social network) private messages downloader with a nice material design, UI/UX, and a broad customer base",
      logo: "YourLogoURLHere",
      link: {
        label: "zpix1.github.io/vk-pm-downloader/",
        href: "https://zpix1.github.io/vk-pm-downloader/",
      },
    },
    {
      title: "MindTrainer",
      techStack: ["Ruby On Rails", "JavaScript", "Python", "Docker"],
      description:
        "A website for high school and university students to have fun and train by solving small math-related tasks",
      link: {
        label: "mindtrainer.ru",
        href: "https://mindtrainer.ru/",
      },
    },
  ],
} as const;
