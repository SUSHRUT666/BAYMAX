const bcrypt = require('bcrypt')
const User = require("../models/user")
const jwt = require('jsonwebtoken')
// const cookie = require('cookie-parser')

require("dotenv").config()

//Sign up route handler
exports.signup = async (req,res) => {
    try{
        console.log(req.body)
        
        //get data
        const {name, email, password} = req.body

        //check if user already exist
        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        //secured password
        let hashedPassword
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            })
        }

        //create entry for user
        let user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return res.status(200).json({
            succes: true,
            message: "User created successfully",
            data: user,
        })
        
    }
    catch(error){
        console.error(error)
        return res.status(200).json({
            success: false,
            message: "User cannot be registered, plz try again later",
        })
    }
}


//Login route handler
exports.login = async (req,res) => {
    console.log(req.body)

    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all the details "
            })
        }

        //check for registered user
        let user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User does not exist"
            })
        }

        //verify password and generate a JWT token
        const payload = {
            email: user.email,
            id: user._id,
        }

        if(await bcrypt.compare(password, user.password)){
            //password match
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn : "2h",
            })

            //user = user.toObject()
            user.token = token
            user.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token",token,options).status(200).json({
                success : true,
                user,
                message:"User logged in successfully"
            });
        }
        else{
            //password not matched
            return res.status(403).json({
                success: false,
                message: "Password does not match"
            })
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Login failed"
        })
    }
}