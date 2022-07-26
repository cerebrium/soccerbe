import mongoose from "mongoose";
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  position: {
    type: String,
  },
  votes: [{ vote: { type: Schema.Types.ObjectId, ref: "Location" } }],
  teams: [{ team: { type: Schema.Types.ObjectId, ref: "Team" } }],
});

export default mongoose.model("Player", PlayerSchema);
