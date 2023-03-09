const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
    tokenId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;