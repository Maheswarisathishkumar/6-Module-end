const Schema = mongoose.Schema;

const user =new Schema({

    name:{
        type:String,
    },


    email:{
        type:String,
    },
    
    address:{
        type:Object,
    },

    password:{
        type:String,
    },

});
    

module.exports= mongoose.model('order', order)