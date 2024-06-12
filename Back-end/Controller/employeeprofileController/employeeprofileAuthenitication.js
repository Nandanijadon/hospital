const joi = require('joi');

const employeeprofile = joi.object({

    profile_id:
    joi.string().min(2).max(10).required(),
    profile_name:
    joi.string().min(3).max(30).required(),
    age:
    joi.number().min(1).max(150).required(),
    gender:
    joi.string().min(4).max(20).required(),
    contact_no:
    joi.string().min(10).max(10).required(),
    address:
    joi.string().min(5).max(40).required(),
    salary:
    joi.string().min(1).max(10),
    date_of_joining:
    joi.date().required(),
    date_of_birth:
    joi.date().required(),
    department_id:
    joi.string().min(2).max(10)


})


employeeprofileValidatde = (req,res,next)=>{

    const{error,value} = employeeprofile.validate(req.body)

    if (error){
        console.log(error);
        return res.send('invalid register')
    }

    else{

    }

    next();
}

module.exports= {employeeprofileValidatde};