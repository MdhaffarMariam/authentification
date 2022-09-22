
const User = require("../model/User")
const bcryptjs=require('bcryptjs')
const jwt  = require('jsonwebtoken');
const user = require("../model/User");

exports.register = async(req,res)=>{
const{fullName,email,password} = req.body;
const existantUser = await User.findOne({email})
if (existantUser) return res.status(409).json({msg:'user already exists'})
try {
    const newUser = new User({
        fullName,
        email,
        password
    });
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);
    newUser.password = hash
    await newUser.save();
    
    const payload = {
        id:newUser._id
    }
    let token = jwt.sign(payload, process.env.secret);
    res.send({
        token,
        user : {
            id:newUser._id,
            fullName : newUser.fullName,
            email:newUser.email
        }
    })
    // res.send(newUser);
    
    // console.log(newUser)
} catch (error) {
    res.status(500).json({msg:error.message});
}
}

exports.login =async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({msg:'unvalid entrey'});
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch) return res.status(404).json({msg:'unvalid entrey'});
        const payload = {
            id:user._id,
        };
        let token = jwt.sign(payload, process.env.secret);
        res.send({
            token,
            user : {
                id:user._id,
                fullName : user.fullName,
                email:user.email
            }
    })
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    }
    exports.auth = (req,res)=>{
        res.send(req.user)
    }
    