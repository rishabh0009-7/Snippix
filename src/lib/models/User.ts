import mongoose ,{Schema, Document} from "mongoose";
 

export interface IUser  extends Document{

clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;

}

const UserSchema = new Schema <IUser> ({

    clerkId :{
        type:String,
        required :true ,
        unique :true,
    }  ,
    email :{
        type:String,
        required :true ,
        unique :true,

    },
    firstName: String,
  lastName: String,
  username: String,
  avatar: String,
},{
    timestamps :true ,
})

UserSchema.index ({clerkId :1})
UserSchema.index ({email :1})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)