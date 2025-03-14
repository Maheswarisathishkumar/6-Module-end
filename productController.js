const cart=require("../Model/productModel");

const createProducts=async(req, res)=>{
    try {

        console.log(req.body);
        const product =new product(req.body);
        const productList = await product.save();
        res.status(201).jason(productList);
        
    } catch (error) {

        res.status(500).jason({error});
        
    }
};



const getAllProducts =async(req, res)=>{
const productList = await product.find({});
res.status(200).jason(productList);
};   
    
const getProductsById =async(req, res)=>{
const productList = await product.findByIdAndUpdate(req.params.id);
res.status(200).jason(productList);
};

const updateProducts =async(req, res)=>{
const updatedList = await product.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).jason(updatedList);
};

const deleteProducts =async(req, res)=>{
    const deletedList = await product.findByIdAnddelete(req.params.id);
    res.status(200).jason(deletedList);

};

module.exports = {
    createProducts,
    getAllProducts,
    getProductsById,
    updateProducts,
    deleteProducts
}

















