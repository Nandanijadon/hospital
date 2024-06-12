
const connection = require('../../Model/dbConnection');

const getemployeeprofile = async( req,res)=>{

    let query = 'SELECT * FROM employee_profile ORDER BY profile_id';

    await connection.query(query,(err,result)=>{

        if(err){
            console.error('Error executing query:', err.message);
        }  

        else {

            res.send(result);
        }
    })
}


const postemployeeprofile = async(req,res)=>{
    
    let { profile_id, profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, department_id} = req.body;
     
    const query = 'INSERT INTO employee_profile (profile_id, profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, department_id) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ';

    await connection.query(query,[profile_id, profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, department_id], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}

const deleteemployeeprofile = async (req,res)=>{
    let profile_id = req.params.profile_id;

    let query = 'DELETE FROM employee_profile WHERE profile_id = $1';

    await connection.query(query,[profile_id], (err,result)=>{

        if(err){
            console.err('err', err.message);
        }

        else {
            res.send(result);
        }
    })
}

const putemployeeprofile = async (req,res)=>{
    let profile_id = req.params.profile_id;

    let{profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, department_id} = req.body

    let query = 'UPDATE employee_profile SET profile_name=$1, age=$2 ,gender=$3, contact_no =$4,address=$5,salary=$6, date_of_joining=$7,  date_of_birth=$8, department_id=$9 WHERE profile_id = $10';

    await connection.query(query, [profile_name,age,gender, contact_no,address,salary, date_of_joining,  date_of_birth, department_id,profile_id], (err,result)=>{

        if(err){

            console.error('err', err.message);
        }

        else{
            res.send(result)
        }
    })
}

module.exports = {getemployeeprofile, postemployeeprofile,deleteemployeeprofile,putemployeeprofile};