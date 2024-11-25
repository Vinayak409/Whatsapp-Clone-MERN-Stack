import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const { DB_USERNAME, DB_PASSWORD } = process.env;

// MongoDB connection options
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  retryWrites: true,
  w: "majority",
};

// Get MongoDB URL based on environment
const getMongoURL = () => {
  // Use Docker MongoDB URL if running in container, else use local MongoDB URL
  return process.env.DOCKER_ENV
    ? `mongodb://${DB_USERNAME}:${DB_PASSWORD}@mongodb:27017/?authSource=admin`
    : `mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017/?authSource=admin`;
};

const Connection = async () => {
  try {
    if (!DB_USERNAME || !DB_PASSWORD) {
      throw new Error(
        "MongoDB credentials not provided in environment variables"
      );
    }

    const URL = getMongoURL();
    await mongoose.connect(URL, mongooseOptions);

    // Add connection event listeners
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection established successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB connection disconnected");
    });

    // Handle application termination
    process.on("SIGINT", async () => {
      try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed through app termination");
        process.exit(0);
      } catch (err) {
        console.error("Error closing MongoDB connection:", err);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error("Error while connecting to database:", error.message);
    process.exit(1);
  }
};

export default Connection;
