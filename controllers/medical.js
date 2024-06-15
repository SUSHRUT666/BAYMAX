const Medical = require("../models/medical")

require("dotenv").config()

//medical history route handler
exports.medical = async (req,res) => {
    try{
        //get data
        const {age, medicines, diseases, past_records} = req.body

        //create entry for user
        let user = await Medical.create({
            age, 
            medicines, 
            diseases, 
            past_records,
        })

        return res.status(200).json({
            success: true,
            message: "Medical history saved",
            data: user,
        })
    }
    catch(error){
        console.error(error)
        return res.status(200).json({
            success: false,
            message: "Error while fetching medical history",
        })
    }
}