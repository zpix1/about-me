import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import Avatar from "../images/photo.jpg";
import { CalendarIcon } from "lucide-react";

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
    tel: "+79130651214",
    social: [
      {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0C1oRprVPjFWSJi-jnQkibluaWAjObiYl8ztkR2o_5v3e8cXb9bQXULgaUkSJJicDhJSaKTmqb",
        icon: CalendarIcon,
      },
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
      start: "Sept. 2023",
      end: "July 2025",
    },
    {
      school: "Novosibirsk State University",
      degree: "Bachelor's Degree in Informatics and Computer Engineering",
      start: "Sept. 2019",
      end: "July 2023",
    },
  ],
  work: [
    {
      company: "1C Company",
      badges: ["Remote"],
      title: "Software Developer",
      start: "Jan. 2025",
      end: "To Date",
      description: ``,
    },
    {
      company: "Huawei RRI",
      badges: [],
      title: "Typescript Engineer",
      start: "April 2022",
      end: "Jan. 2025",
      description: `Contributed to Huawei Project as a Software Engineer, specializing in IDE desktop software. 
Utilized Electron, TypeScript, React, and Java to drive UI development, UI component library creation, and IDE extension infrastructure. 
Spearheaded CI setup and visual regression testing. 
Actively developed features for the IDE base platform, while also fixing bugs to enhance overall software reliability. 
Additionally, took ownership of a project component and effectively managed its development lifecycle.`,
    },
    {
      company: "JetBrains",
      badges: ["Remote"],
      title: "Software Developer",
      start: "July 2021",
      end: "March 2022",
      description:
        "Developed a feature-rich internal web app using TypeScript, React, styled-components, Protobuf, and gRPC. Integrated JWT and OAuth2 for subsystem connections, and ensured robustness with Cypress testing. Collaborated on a Scala codebase, utilized various tools, and managed databases and AWS services. Created a FastAPI-powered web app for ML entity comparison, enhancing model precision for the team.",
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
        "A chrome extension to disable YouTube video titles translation, 30000+ users",
      link: {
        label: "chromewebstore.google.com",
        href: "https://chromewebstore.google.com/detail/youtube-anti-translate/ndpmhjnlfkgfalaieeneneenijondgag",
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
  publications: [
    {
      title: "Method of Reducing Memory Size for Some Constrained Code",
      publisher: "IEEE",
      authors: "Ivan Baksheev; Boris Ryabko",
      date: "26 November 2024",
      link: {
        label: "IEEE Xplore",
        href: "https://ieeexplore.ieee.org/document/10758444",
      },
    },
  ],
} as const;
