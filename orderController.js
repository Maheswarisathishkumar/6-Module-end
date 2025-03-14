const order=require("../Model/orderModel");

const getAllOrder =async(req, res)=>{
    try {

        const orderList= await cart.find({});
        res.status(200).jason(orderList);
        
    } catch (error) {

        res.status(500).jason({error:"Orders Not Found"});
        
    }
};

module.exports = {
    getAllOrder,
}