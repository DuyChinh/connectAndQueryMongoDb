const mongoose = require("mongoose")
const url = "mongodb+srv://coder:pJF51RR1Q4msc0mr@cluster0.acruwl9.mongodb.net/Posts?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url);

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Blog = mongoose.model("blogs", postSchema);

module.exports = Blog;
