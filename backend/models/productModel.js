const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please Enter your Product"],
        trim:true,
    },
    description:{
        type:String,
        required: [true,"Please Enter your Description"],
    },
    price:{
        type:String,
        required: [true,"Please Enter your Price"],
        maxLength:[8,"Price cannot exceed than 8 characters"],
    },
    rating:{
        type:Number,
        default:0,
    },
    images:[
        {  
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        },
    ],
    category:{
        type:String,
        required:[true,"Please Enter your Category"],
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter your Stock"],
        maxLength:[4,"Stock cannot exceed than 4 characters"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            },
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("Product",productSchema);