const Schema = mongoose.Schema;

const order =new Schema({

    items:{
        type:Object,
    },
    
    total:{
        type:Number,
    },

    orderdate:{
        type:Date,
    },
    status:{
        type:String,
    }
});

module.exports= mongoose.model('order', order)