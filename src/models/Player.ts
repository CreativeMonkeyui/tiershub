import mongoose, {
  Schema,
  model,
  models,
} from "mongoose";

const PlayerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    skin: {
      type: String,
      default: "Steve",
    },

    region: {
      type: String,
      default: "EU",
    },

    points: {
      type: Number,
      default: 0,
    },

    sword: {
      type: String,
      default: "LT5",
    },

    crystal: {
      type: String,
      default: "LT5",
    },

    smp: {
      type: String,
      default: "LT5",
    },

    pots: {
      type: String,
      default: "LT5",
    },

    mace: {
      type: String,
      default: "LT5",
    },

    axe: {
      type: String,
      default: "LT5",
    },

    nethpot: {
      type: String,
      default: "LT5",
    },
  },
  {
    timestamps: true,
  }
);

const Player =
  models.Player ||
  model("Player", PlayerSchema, "profiles");

export default Player;