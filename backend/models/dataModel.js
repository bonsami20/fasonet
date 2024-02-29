import mongoose from "mongoose";

const dataSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },

    technologie: {
      type: String,
      required: true,
    },

    debit: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Data = mongoose.model("Data", dataSchema);
