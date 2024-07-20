import { Schema,model } from "mongoose";

const HouseSchema =  new Schema({
    thumbNail: String,
    description: String,
    price: Number,
    address: String,
    status: Boolean,
    user:{
          type: Schema.Types.ObjectId,
          ref:'User'
    }
})

export default model('House', HouseSchema);
