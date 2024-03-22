import React from "react"
import { AiOutlineLink, AiOutlineQuestionCircle, AiOutlineSetting, AiOutlineUser } from "react-icons/ai"

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
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Experience',
        hash: '#experience',
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
        lightTeaser: '/lightTimetable.JPG',
        darkTeaser: '/darkTimetable.JPG'
    },
    {
        header: 'Timetable',
        description: 'Keep track of your work hours!',
        lightTeaser: '/lightTimetable.JPG',
        darkTeaser: '/darkTimetable.JPG'
    },
    {
        header: 'Timetable',
        description: 'Keep track of your work hours!',
        lightTeaser: '/lightTimetable.JPG',
        darkTeaser: '/darkTimetable.JPG'
    },
]