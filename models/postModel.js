//import mongoose
const mongoose = require('mongoose');


//route handler
const postSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
  },
  
  body: {
  type:String,
  required:true,
  },

  likes: [{
    type:mongoose.model.Types.Objectid,
    reference:"Like",
  }],

  comments: [{
     type:mongoose.model.Types.ObjectId,
    reference:"Comment",
  }]
  
});











module.exports = mongoose.model("Post",postSchema)