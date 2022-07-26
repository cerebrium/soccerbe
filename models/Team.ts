import mongoose from "mongoose";

const { Schema } = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
  },
  sport: {
    type: String,
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});

export default mongoose.model("Team", TeamSchema);
