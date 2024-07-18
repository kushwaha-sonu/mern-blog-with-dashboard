import { Schema, models, model } from 'mongoose';
const blogSchema = Schema({
   
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },  

    // author:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }

}, { timestamps: true });

const Blog = models.Blog || model('Blog', blogSchema);

export default Blog;