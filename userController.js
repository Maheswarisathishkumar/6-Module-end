const user=require("../Model/userModel");

const createUser=async(req, res)=>{
    try {

        console.log(req.body);
        const user =new user(req.body);
        const userList = await user.save();
        res.status(201).jason(userList);
        
    } catch (error) {

        res.status(400).jason({error});
        
    }
};



const getAllUser =async(req, res)=>{
const userList = await product.findById({});
res.status(200).jason(userList);
};   
    
const getUserById =async(req, res)=>{
const userList = await user.findByIdAndUpdate(req.params.id);
res.status(200).jason(userList);
};

const updateUser =async(req, res)=>{
const userList = await product.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.status(200).jason(userList);
};

const deleteUser =async(req, res)=>{
    const userList = await user.findByIdAnddelete(req.params.id);
    res.status(200).jason(userList);

};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateProducts,
    deleteUser
}

















