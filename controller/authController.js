import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes'
import {BadRequestError} from "../errors/index.js";

const register = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        throw new BadRequestError('Please provide all values');
    }
    const userAlreadyExists = await User.findOne({email});
    // console.log("UserAlreadyExists" , userAlreadyExists);
    if (userAlreadyExists){
        throw new BadRequestError('User already exits. Please try with a different email')
    }
    const user = await User.create({name, email, password});
    user.createJWT();
    res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => res.send("User logged in");
const updateUser = async (req, res) => res.send("User updated");

export { register, login, updateUser };
