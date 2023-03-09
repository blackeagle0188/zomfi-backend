const mongoose = require("mongoose");

const LandSchema = mongoose.Schema({
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

const Land = mongoose.model("Land", LandSchema);

module.exports = Land;