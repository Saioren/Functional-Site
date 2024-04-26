import React from "react"
import { AiOutlineLink, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { BsBook, BsClipboard2, BsClock, BsEnvelope, BsFillCalendar2DayFill, BsHouseFill } from "react-icons/bs"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiNodejsSmall, DiReact, DiSass } from "react-icons/di"
import { FaCode, FaFacebook, FaGlobeAmericas, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import darkSaioren from '@/public/darkSaioren.png'
import lightSaioren from '@/public/lightSaioren.png'
import keenImage from '@/public/evan.png'
import coursesImage from '@/public/courses.png'

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
      tags: ["React", "Next.js", "Wordpress", "Payload CMS"],
      darkImageUrl: keenImage,
      lightImageUrl: keenImage,
    },
    {
      title: "Coding Courses",
      description:
        "I've taken multiple in-depth 10-20 hour courses for each language of interest. I am confident in my abilities to code in Javascript, and anything related.",
      tags: ["React", "TypeScript", "Javascript", "CSS", "HTML"],
      darkImageUrl: coursesImage,
      lightImageUrl: coursesImage,
    },
    {
      title: "Saioren.io",
      description:
        "Welcome to my first live site. If you're curious about more of my projects, check out my GitHub.",
      tags: ["React", "Next.js", "Framer", "Tailwind", "MongoDB"],
      darkImageUrl: darkSaioren,
      lightImageUrl: lightSaioren,
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
      title: "Leveling Up",
      location: "Grand Rapids, MI",
      description:
        "I began learning Typescript, Next.js & Node.js. These bolstered my abilities greatly.",
      icon: React.createElement(FaNodeJs),
      date: "Jan 2024",
    },
    {
      title: "Keen Studio Intern",
      location: "Grand Rapids, MI",
      description:
        "I'm slowly becoming proficient at front & backend development in Javascript.  From Next.js to MongoDB.",
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

