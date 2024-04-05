import React from "react"
import { AiOutlineLink, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { BsBook, BsClipboard2, BsClock, BsEnvelope, BsFillCalendar2DayFill, BsHouseFill } from "react-icons/bs"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiNodejsSmall, DiReact, DiSass } from "react-icons/di"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import timetableImg from '@/public/darkTimetable.png'

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
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: timetableImg,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: timetableImg,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: timetableImg,
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
            name: 'MongoDB',
            icon:   React.createElement(DiMongodb),
            href: 'https://www.mongodb.com/',
            color: 'orange',
        },
    ]

