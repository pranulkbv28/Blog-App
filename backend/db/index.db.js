import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    // console.log(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}${process.env.DB_NAME}`
    );

    console.log(
      `Connected to database: ${connection.connection.db.databaseName} successfully`
    );
  } catch (error) {
    console.log(
      "There was an error trying to connect to the database: ",
      error.message
    );
  }
};

export default connectToDb;
