const mongoose = require('mongoose')

const calorieSchema = new mongoose.Schema({
    sugar_g: {
        type: String,
    },
    fiber_g: {
        type: String,
    },
    serving_size_g: {
        type: String,
    },
    sodium_mg: {
        type: String,
    },
    name: {
        type: String,
    },
    potassium_mg: {
        type: String,
    },
    fat_saturated_g: {
        type: String,
    },
    fat_total_g: {
        type: String,
    },
    calories: {
        type: String,
    },
    cholesterol_mg: {
        type: String,
    },
    protein_g: {
        type: String,
    },
    carbohydrates_total_g: {
        type: String,
    }
})

module.exports = mongoose.model("Calorie", calorieSchema)