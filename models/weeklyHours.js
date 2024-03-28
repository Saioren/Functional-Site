import mongoose from 'mongoose';

const WeeklyHoursSchema = new mongoose.Schema(
    {
        weekNumber: {
            type: Number,
            required: true,
            unique: true
        },
        hours: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const WeeklyHours = mongoose.models.WeeklyHours || mongoose.model('WeeklyHours', WeeklyHoursSchema);

export default WeeklyHours;
