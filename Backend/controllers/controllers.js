
import user from "../model/userModel.js";

export const getUsers= async (req,res)=>{
    try {
        const users= await user.find()
        res.json(users)
    } catch (error) {
        response.json({message: error})
    }
}

export const getUserById= async (req,res)=>{
    
    const id = req.params.id
   
    try {
        const _user= await user.findById(id)
        res.json(_user)
    } catch (error) {
        response.json({message: error})
    }
}

export const addUser= async (req, res)=>{
   const _user = req.body;

   const newUser = new user(_user)
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        res.json({message: error})
    }

    
}

export const editUser= async (req,res)=>{
    const _user=req.body
    const _editUser= new user(_user)
    try {
        await user.updateOne({_id: req.params.id}, _editUser)
        res.json(_editUser)
        
    } catch (error) {
        res.json({message: error})
    }

}

export const delUser= async (req, res)=>{
    const id = req.params.id
    try {
         await user.deleteOne({_id: id})
        res.json('user deleted') 
    } catch (error) {
        res.json({message: error})
    }
}