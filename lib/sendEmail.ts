'use server'

import { validateString } from '@/utils/utils'
import {Resend} from 'resend'
import ReactEmailStyle from '@/app/components/Email/ReactStyle'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message');

    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email",
        }
    }

    if(!validateString(message, 5000)){
        return {
            error: "Invalid message",
        }
    }

    if(!message || typeof message !== 'string'){
        return {
            error: 'Invalid message'
        }
    }
    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'mikrutevan@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            //text: message as string, 
            react: React.createElement(ReactEmailStyle, {
                message: message,
                senderEmail: senderEmail as string,
            })
        })
    } catch (error) {
        
    } 

}