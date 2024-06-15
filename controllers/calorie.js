const Calorie = require("../models/calorie")

require("dotenv").config()

//calorie route handler
exports.calorie = async (req,res) => {
    try{
        //get data
        const {calories} = req.body

        //create entry for user
        let health = await Calorie.create({
            calories,
        })

        return res.status(200).json({
            success: true,
            message: "Calorie saved",
            data: health,
        })
    }
    catch(error){
        console.error(error)
        return res.status(200).json({
            success: false,
            message: "Error while fetching calorie",
        })
    }
}