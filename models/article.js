const mongoose = require('mongoose');
const schema = mongoose.Schema;

const articleSchema = new schema({
    image: {type: String, required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    type: { type: String, required: true },
    bienfaits: { type: String, required: true },
    prix: { type: Number }
});

module.exports = Article = mongoose.model("article", articleSchema)