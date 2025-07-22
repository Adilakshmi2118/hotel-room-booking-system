import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  description: String,
  image: String,
  amenities: [String],
  capacity: Number,
  availability: {
    from: Date,
    to: Date,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
