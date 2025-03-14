const Schema = mongoose.Schema;

const product =new Schema({


    name:{
        type:String,
    },

    description:{
        type:String,
    },

    price:{
        type:Number,
    },
    
    category:{
        type:String,
    },

    rating:{
        type:Number,
    },
    stock:{
        type:Number,
    }
});

module.exports= mongoose.model('product', product)