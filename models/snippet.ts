import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const SnippetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    isPublic: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
    },
    folderId: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },
    favorites: [
      {
        type: String, // Clerk user IDs
      },
    ],
    aiExplanation: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  }
);

export default models.Snippet || model("Snippet", SnippetSchema);
