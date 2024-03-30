import mongoose from 'mongoose';

const TimerSchema = new mongoose.Schema(
    {
        hours: {
            type: Number,
            default: 0
        },
        minutes: {
            type: Number,
            default: 0
        },
        seconds: {
            type: Number,
            default: 0
        },
        weeklyHours: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const Timer = mongoose.models.Timer || mongoose.model('Timer', TimerSchema);

export default Timer;
