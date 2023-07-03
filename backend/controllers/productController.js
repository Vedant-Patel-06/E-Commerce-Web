// const Product = require('');

// const createProduct = async (req, res, next) => {
//     const product = await productSchema
// };

const getAllProducts = (req,res)=>{

    res.status(200).json({
        message:"Routes are working properly",
    });

};

module.exports = {getAllProducts};