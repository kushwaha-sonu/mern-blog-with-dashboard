export const createBlog=async(req,res,next)=>{

    res.json({message:"Blog created successfully",blog:req.body});

    // try{
    //     const {title,content}=req.body;
    //     if(!title || !content){
    //         return res.status(400).json({message:"Title and content are required"});
    //     }
    //     const blog=new Blog({
    //         title,
    //         content,
    //         user:req.user._id
    //     });
    //     await blog.save();
    //     res.status(201).json({message:"Blog created successfully",blog});
    // }catch(error){
    //     next(error);
    // }
}