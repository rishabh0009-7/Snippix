import mongoose , {Schema , Document } from "mongoose";


export interface ICategory extends Document {
    name: string;
    description?: string;
    color: string;
    userId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  }
const CategorySchema = new Schema <ICategory>({

    name: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      color: {
        type: String,
        default: '#3B82F6',
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    }, {
      timestamps: true,
    })

CategorySchema.index({userId:1} , {unique:true })

export default  mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);