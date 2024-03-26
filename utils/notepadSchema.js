/*const mongoose = require('mongoose')

const notepadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { 
        type: String,
        default: () => {
            const dateObj = new Date();
            const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            const day = ('0' + dateObj.getDate()).slice(-2);
            const year = dateObj.getFullYear().toString().slice(-2);
            return `${month}${day}${year}`;
        }
    },
    time: {
        type: String,
        default: () => {
            const dateObj = new Date();
            const hours = ('0' + dateObj.getHours()).slice(-2);
            const minutes = ('0' + dateObj.getMinutes()).slice(-2);
            return `${hours}:${minutes}`;
        }
    }
});

module.exports = mongoose.model('Note', notepadSchema)*/
