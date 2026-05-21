import mongoose, {
  Schema,
  model,
  models,
} from "mongoose";

const PlayerSchema = new Schema(
  {
    userId: {
      type: String,
    },

    ign: {
      type: String,
      required: true,
    },

    account: {
      type: String,
      default: "Cracked",
    },

    region: {
      type: String,
      default: "AS",
    },

    tiers: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Player =
  models.Player ||
  model("Player", PlayerSchema);

export default Player;