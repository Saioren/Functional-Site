import mongoose from 'mongoose';

let isConnected = false;

const connectMongoDB = async () => {
    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: 'saiorenio',
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            isConnected = true;
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            process.exit(1);
        }
    }
};

const closeMongoDBConnection = async () => {
    if (isConnected) {
        await mongoose.connection.close();
        isConnected = false;
        console.log('Disconnected from MongoDB');
    }
};

// Graceful shutdown
process.on('SIGINT', async () => {
    await closeMongoDBConnection();
    process.exit(0);
});

export { connectMongoDB, closeMongoDBConnection };
