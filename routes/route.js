const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");

const ContactSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Contact= mongoose.model('Contact',ContactSchema);


router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
})

router.post('/contact',(req,res,next)=>{
    let newContact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    console.log(newContact);
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"Failed in adding contact"});
        }
        else{
            res.json({msh:"Contact added succesfully"});
        }
    });
});
router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})
module.exports=router;