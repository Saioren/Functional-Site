import mongoose from 'mongoose';

let isConnected = false;

const connectMongoDB = async () => {
    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: 'saiorenio', 
            });
            isConnected = true;
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1); 
        }
    }
};

export { connectMongoDB };
