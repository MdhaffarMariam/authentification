const jwt = require("jsonwebtoken");
const User = require("../model/User");


const verifyAuth = async (req,res,next)=>{
    let token = req.headers.authorization

    try {
    const decoded = await jwt.verify(token,process.env.secret);
    if (!decoded) return res .status(409).json({msg:'invalid token '})
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res .status(409).json({msg:'unathorized '})
    else{
        req.user=user
        next()
    }} 
    catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports = verifyAuth ;