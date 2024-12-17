import mongoose from "mongoose";
export const dbConnection = () => {


  mongoose
    .connect("mongodb+srv://ansariminhaj8208:%40Mugeera8@cluster0.faoxd.mongodb.net/fooddelivery")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
