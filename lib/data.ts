import React from "react"
import { AiOutlineLink, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"
import { DiCss3, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiNodejsSmall, DiReact, DiSass } from "react-icons/di"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const links = [
    {
        name: 'Home',
        hash: '/',
    },
    {
        name: 'Timetable',
        hash: '/timetable',
    },
    {
        name: 'Notes',
        hash: '/notes',
    },
    {
        name: 'Calendar',
        hash: '/calendar',
    },
]

export const menuItems = [
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
        lightTeaser: '/lightTimetable.png',
        darkTeaser: '/darkTimetable.png',
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
        },
        {
            name: 'CSS',
            icon:  React.createElement(DiCss3),
        },
        {
            name: 'HTML',
            icon:  React.createElement(DiHtml5),
        },
        {
            name: 'Typescript',
            icon:  'typescript-icon.svg',
        },
        {
            name: 'React',
            icon:  React.createElement(DiReact, {size: 20}),
        },
        {
            name: 'Next.JS',
            icon:  'next-js.svg',
        },
        {
            name: 'Sass',
            icon:  React.createElement(DiSass, {size: 20}),
        },
        {
            name: 'Node.JS',
            icon:  React.createElement(DiNodejsSmall, {size: 20}),
        },
        {
            name: 'Tailwind',
            icon:  'tailwind-css.svg',
        },
        {
            name: 'Framer Motion',
            icon:  'framer-motion.svg',
        },
        {
            name: 'MongoDB',
            icon:   React.createElement(DiMongodb),
        },
    ]

