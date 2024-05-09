import React from "react"
import { AiOutlineLink, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { BsBook, BsClipboard2, BsClock, BsEnvelope, BsFillCalendar2DayFill, BsHouseFill } from "react-icons/bs"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiNodejsSmall, DiReact, DiSass } from "react-icons/di"
import { FaCode, FaFacebook, FaGlobeAmericas, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const links = [
    {
        name: 'Home',
        hash: '/',
        icon: React.createElement(BsHouseFill),
    },
    {
        name: 'Timetable',
        hash: '/timetable',
        icon: React.createElement(BsClock),
    },
    {
        name: 'Notes',
        hash: '/notes',
        icon: React.createElement(BsClipboard2),
    },
    {
        name: 'Calendar',
        hash: '/calendar',
        icon: React.createElement(BsFillCalendar2DayFill),
    },
    {
        name: 'Email',
        hash: '/email',
        icon: React.createElement(BsEnvelope),
    },
]

export const homepageLinks = [
    {
      name: "Home",
      hash: "/",
    },
    {
        name: "About",
        hash: "#about",
      },
      {
        name: "Projects",
        hash: "#projects",
      },
      {
        name: "Skills",
        hash: "#skills",
      },
      {
        name: "Experience",
        hash: "#experience",
      },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Keen Studio",
      description:
        "I work as a programmer at Keen Studio. With experienced professionals around me, I challenge myself everyday.",
      tags: ["React", "Next.js", "Wordpress", "Payload CMS", "HubSpot"],
      name: 'keen',
      projectHref: 'https://keen-studio.com/'
    },
    {
      title: "Biologos",
      description:
        "I implemented a robust breadcrumbs feature for Biologos that will help users navigate the site with ease.",
      tags: ["Next.js", "TypeScript", "Javascript", "Payload CMS"],
      name: 'biologos',
      projectHref: 'https://biologos.org/'
    },
    {
      title: "Mathison Architects",
      description:
        "I re-did the filtering, fetching, and loading logic for the Mathison Architect projects page, making it fast and efficient.",
      tags: ["Next.js", "MongoDB", "React", "Typescript"],
      name: 'mathison',
      projectHref: 'https://www.mathisonarchitects.com/'
    },
    {
      title: "Emerson HC",
      description:
        "I developed custom coded HTML email templates as well as HubSpot templates for Emerson Human Capital.",
      tags: ["HTML", "HubSpot", "CSS"],
      name: 'emerson',
      projectHref: 'https://www.emersonhc.com/'
    },
  ] as const;

  export const experiencesData = [
    {
      title: "Humble Beginnings",
      location: "Grand Rapids, MI",
      description:
        "I started small, learning CSS & HTML first. Shortly after, I delved into Javascript and React.",
      icon: React.createElement(FaReact),
      date: "Jun 2023",
    },
    {
      title: "The Next Step",
      location: "Grand Rapids, MI",
      description:
        "I dove into the world of Next.js, Payload, and Node.js.",
      icon: React.createElement(FaNodeJs),
      date: "Jan 2024",
    },
    {
      title: "Keen Studio Intern",
      location: "Grand Rapids, MI",
      description:
        "My time at Keen has been extremely beneficial to me. Being exposed to real-world problems will set me apart from other young developers.",
      icon: React.createElement(FaCode),
      date: "Feb 2024 - present",
    },
  ] as const;

export const menuItems = [
    {
        name: 'Pages',
        icon: React.createElement(BsBook),
        color: 'orange',
    },
    {
        name: 'Links',
        icon: React.createElement(AiOutlineLink),
        color: 'purple'
    },
    {
        name: 'About',
        icon: React.createElement(AiOutlineUser),
        color: 'green'
    },
    {
        name: 'Settings',
        icon: React.createElement(AiOutlineSetting),
        color: 'blue'
    },
    {
        name: 'Help',
        icon: React.createElement(AiOutlineQuestionCircle),
        color: 'red'
    },
]

export const components = [
    {
        header: 'Timetable',
        description: 'Keep track of your work hours!',
        lightTeaser: '/clockinlight.png',
        darkTeaser: '/clockindark.png',
        href: '/timetable'
    },
    {
        header: 'Notepad',
        description: 'Write down your thoughts!',
        lightTeaser: '/lightNotepad.png',
        darkTeaser: '/darkNotepad.png',
        href: '/notes'
    },
    {
        header: 'Calendar',
        description: 'Jot down meetings and more!',
        lightTeaser: '/lightTimetable.png',
        darkTeaser: '/darkTimetable.png',
        href: '/calendar'
    },
    {
        header: 'Email',
        description: 'Send and recieve emails!',
        lightTeaser: '/emaillight.png',
        darkTeaser: '/emaildark.png',
        href: '/email',
    },
]

export const linkSettings = [
    {
        name: 'Github',
        icon: React.createElement(DiGithubBadge, { size: 30 }), 
        href: 'https://github.com/Saioren',
      },
        {
            name: 'LinkedIn',
            icon: React.createElement(FaLinkedinIn, { size: 24 }),
            href: 'https://www.linkedin.com/in/evan-mikrut-799190283/',
        },
        {
            name: 'Facebook',
            icon: React.createElement(FaFacebook, { size: 24 }),
            href: 'https://www.facebook.com/mikrutEvan/',
        },
        {
            name: 'X',
            icon: React.createElement(FaXTwitter, { size: 24 }),
            href: 'https://twitter.com/mikrutevan1',
        },
    ]
    export const languages = [
        {
            name: 'Javascript',
            icon:  React.createElement(DiJavascript),
            href: 'https://www.javascript.com/',
            color: '',
        },
        {
            name: 'CSS',
            icon:  React.createElement(DiCss3),
            href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            color: 'blue',
        },
        {
            name: 'HTML',
            icon:  React.createElement(DiHtml5),
            href: 'https://www.w3schools.com/html/html_intro.asp',
            color: 'orange',
        },
        {
            name: 'Typescript',
            icon:  'typescript-icon.svg',
            href: 'https://www.typescriptlang.org/',
            color: 'blue',
        },
        {
            name: 'React',
            icon:  React.createElement(DiReact, {size: 20}),
            href: 'https://react.dev/',
            color: 'teal',
        },
        {
            name: 'Payload CMS',
            icon:  '/payload.png',
            href: 'https://payloadcms.com/',
            color: 'black',
        },
        {
            name: 'Next.JS',
            icon:  'next-js.svg',
            href: 'https://nextjs.org/',
            color: 'black',
        },
        {
            name: 'Sass',
            icon:  React.createElement(DiSass, {size: 20}),
            href: 'https://sass-lang.com/',
            color: 'red',
        },
        {
          name: 'HubSpot',
          icon:  '/hubspot.png',
          href: 'https://www.hubspot.com/',
          color: 'orange',
      },
        {
            name: 'Node.JS',
            icon:  React.createElement(DiNodejsSmall, {size: 20}),
            href: 'https://nodejs.org/en',
            color: 'green',
        },
        {
            name: 'Tailwind',
            icon:  'tailwind-css.svg',
            href: 'https://tailwindcss.com/',
            color: 'lightBlue',
        },
        {
            name: 'Framer Motion',
            icon:  'framer-motion.svg',
            href: 'https://www.framer.com/motion/',
            color: 'magenta',
        },
        {
            name: 'Wordpress',
            icon:  '/wordpress.png',
            href: 'https://wordpress.com/',
            color: 'gray',
        },
        {
            name: 'MongoDB',
            icon:   React.createElement(DiMongodb),
            href: 'https://www.mongodb.com/',
            color: 'orange',
        },
    ]

