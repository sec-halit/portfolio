import mongoose from "mongoose";
import type { DefaultUser,User as OAuthUser } from "next-auth/core/types";
import validator from "validator"

// interface IUserModel{
//     name:string
//     email:string
//     password:string
//     image:string
// }
// class UserModel implements IUserModel{
//     name=""
//     email=""
//     password=""
//     image=""
// }
export interface IUser extends OAuthUser {
    password: string
    resetToken: string
    update: string
    validEmail: string
    emailToken: string
}
export class User {
    password: string | undefined;
    id?: string | undefined;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    resetToken?: string | null | undefined;
}
const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        default: "guest"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter valid email address"],
    },
    password: {
        type: String
    },
    image: {
        type: String,
        default: ""
    },
    resetToken: { type: String },
    update: { type: String },
    validEmail: { type: String, default: "not" },
    emailToken: { type: String },
},
    { timestamps: true }
);
export default mongoose.models.users || mongoose.model<IUser>('users', userSchema);