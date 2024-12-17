import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);


const signupSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String,
  phone:Number
})

const signupModel = new mongoose.model("foodSignup",signupSchema)



export {Reservation,signupModel};
