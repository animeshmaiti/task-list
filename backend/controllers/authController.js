// login, logout, signup
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, cPassword } = req.body;

        if (password !== cPassword) {
            return res.status(400).json({ error: "Password does not match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword
        });
        if (newUser) {
            // generate token and set cookie
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }


    } catch (error) {
        console.log("during signup", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const isMatch = await bcrypt.compare(password, user?.password || "");
        if(!user || !isMatch){
            return res.status(400).json({error: "Invalid credentials"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username
        });

    } catch (error) {
        console.log("during login", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("during logout", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}
