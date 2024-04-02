'use server'

import { validateString } from '@/utils/utils'
import {Resend} from 'resend'
import ReactEmailStyle from '@/app/components/Email/ReactStyle'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message');
    const recipient = formData.get('recipient');
    const subjectData = formData.get('subjectData');

    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email",
        }
    }

    if(!validateString(subjectData, 500)){
        return {
            error: "Invalid subject",
        }
    }

    if(!validateString(recipient, 500)){
        return {
            error: "Invalid recipient"
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
            from: `Contact form ${senderEmail}`,
            to: recipient as string,
            subject: subjectData as string,
            reply_to: senderEmail as string,
            //text: message as string, 
            react: React.createElement(ReactEmailStyle, {
                message: message,
                senderEmail: senderEmail as string,
                subjectData: subjectData as string,
            })
        })
    } catch (error) {
        
    } 

}