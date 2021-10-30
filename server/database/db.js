import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://admin:EjcOajqlrowJWcJk@cluster0.j3fdq.mongodb.net/SHAREBLOGretryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("Error Connecting Database", error);
  }
};

export default Connection;
