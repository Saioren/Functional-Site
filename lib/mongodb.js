import mongoose from 'mongoose';

let isConnected = false;

const connectMongoDB = async () => {
    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: 'saiorenio',
                // Remove useNewUrlParser and useUnifiedTopology options
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // Add additional options to handle deprecation warnings
                // See https://mongoosejs.com/docs/migrating_to_7.html#no-more-deprecation-warnings
                // Add server selection and connection timeout options
                serverSelectionTimeoutMS: 5000, // Adjust timeout as needed
                connectTimeoutMS: 10000, // Adjust timeout as needed
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
