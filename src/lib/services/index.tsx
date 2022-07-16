import Users, { IUser, User } from "@/lib/models/userModels";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
interface ISignInUser {
    password: string;
    user: User;
}

export const RegisterUser = async (params: IUser) => {
    const { name, email, password } = params
    if (!name || !email || !password) {
        return {
            status: 400,
            message: "Please add all fields",
            success: false
        }
    }

    // Check if user exists
    const userExists = await Users.findOne({ email })

    if (userExists) {
        return {
            status: 400,
            message: "User already exists",
            success: false
        }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await Users.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        return {
            status: 201,
            message: "",
            data: {
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            },
            success: true
        }
    } else {
        return {
            status: 400,
            message: "Invalid user data",
            success: false
        }
    }
}

export const SignInUser = async ({ password, user }: ISignInUser) => {
    if (!password) {
        throw new Error("Please enter password");
    }
    const isMatch = await bcrypt.compare(password, user?.password || "");
    if (!isMatch) {
        throw new Error("Password not correct");
    }
    return {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user?.id),
    };
}

const generateToken = (id: any) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
