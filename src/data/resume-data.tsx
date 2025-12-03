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
      description: `Working on an IDE for 1C:Element - a business application development platform in the 1C:Enterprise ecosystem, 
      Russia's most popular business automation software.`,
    },
    {
      company: "Huawei RRI",
      badges: [],
      title: "Typescript Engineer",
      start: "April 2022",
      end: "Jan. 2025",
      description: `Contributed to Huawei Project as a Software Engineer, specializing in IDE desktop software. 
Developed an AI plugin from scratch, which included AI powered completion, edits, chat, codebase indexing and more.`,
    },
    {
      company: "JetBrains",
      badges: ["Remote"],
      title: "Software Developer",
      start: "July 2021",
      end: "March 2022",
      description: `Developed an internal web app to manage IDE error reports. 
        Integrated JWT and OAuth2 for subsystem connections, and ensured robustness with Cypress testing. 
        Collaborated on a Scala codebase. `,
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
        "A chrome extension to disable YouTube video titles translation, 100000+ users",
      link: {
        label: "github.com/zpix1/yt-anti-translate",
        href: "https://github.com/zpix1/yt-anti-translate",
      },
    },
    {
      title: "WinDisplay",
      techStack: ["Rust", "Tauri"],
      description: "A growing desktop app to manage your monitors stack",
      link: {
        label: "github.com/zpix1/windisplay",
        href: "https://github.com/zpix1/windisplay",
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
