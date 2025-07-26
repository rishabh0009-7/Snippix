import mongoose, { Schema, Document } from 'mongoose';

export interface ISnippet extends Document {
  title: string;
  description?: string;
  code: string;
  language: string;
  tags: string[];
  category?: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  isPrivate: boolean;
  isFavorite: boolean;
  aiExplanation?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const SnippetSchema = new Schema<ISnippet>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
    lowercase: true,
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  aiExplanation: String,
  views: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

SnippetSchema.index({ userId: 1 });
SnippetSchema.index({ language: 1 });
SnippetSchema.index({ tags: 1 });
SnippetSchema.index({ title: 'text', description: 'text', code: 'text' });
SnippetSchema.index({ createdAt: -1 });

export default mongoose.models.Snippet || mongoose.model<ISnippet>('Snippet', SnippetSchema);