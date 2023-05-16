import mongoose from "mongoose";

const db = async function () {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "supernova",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.set("strictQuery", false);
    console.log(`MongoDB Connected ${con.connection.host}`);
  } catch (err) {
    console.error(`Error : ${err.message}`);
    process.exit(1);
  }
};

export default db;
