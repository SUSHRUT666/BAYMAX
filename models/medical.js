const mongoose = require('mongoose')

const medicalSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
    },
    medicines: {
        type: [String],
        required: true,
    },
    diseases: {
        type: [String],
        required: true,
    },
    past_records: {
        type: [String],
        required: true,
    },
})

module.exports = mongoose.model("Medical", medicalSchema)