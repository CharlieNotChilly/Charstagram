import mongoose from "mongoose";


const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        //map is more efficient that array because you dont need to loop through everything 
        likes: {
            type: Map,
            of: Boolean,

        },
        comments: {
            type: Array,
            default: []
        },
        
    },
    { timestamps: true },
);
const Post = mongoose.model("Post", postSchema);
export default Post;