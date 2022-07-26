import mongoose from "mongoose";
const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  votes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Location", LocationSchema);
