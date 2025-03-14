const Schema = mongoose.Schema;

const cart =new Schema({

    userid:{
        type:Object,
    },
    
    items:{
        type:Object,
    },

    updatedate:{
        type:Date,
    }
});

module.exports= mongoose.model('cart', cart)