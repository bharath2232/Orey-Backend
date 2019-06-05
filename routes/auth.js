const router = require('express').Router();
const User = require('../models/User');
const Employee = require('../models/Employe');
const Services = require('../models/Services');
const jwt = require('jsonwebtoken');

//

router.post('/register',async (req, res) => {
       const user = new User({
           name: req.body.name,
           email: req.body.email,
           password: req.body.password
       })
       try{
             const saveUser = await user.save();
             res.send(saveUser);
         }catch(err){
              res.status(400).send(err);
         }
});

router.get('/services',async (req, res) => {
    const services = await Services.find({})
    try {
        res.send(services)
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.post('/addData',async (req, res) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Deniend')
    const authData = jwt.verify(token,'loginTokeb551515515115151')
    console.log('authDta',authData);
    const employee = new Employee({
        userId : authData._id,
        name: authData.name,
        bio: req.body.bio,
        photo: req.body.photo,
        area : req.body.area,
        service: req.body.service,
        available: req.body.available
    })
    try{
          const saveEmployee = await employee.save();
          res.send(saveEmployee);
      }catch(err){
           res.status(400).send(err);
      }
});



router.post('/login',async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const login = await User.findOne({email: email})
    .then(response => {
        if(response){
            if(response.password === password){
                const token = jwt.sign({_id: response._id,name: response.name},'loginTokeb551515515115151' )
                res.header('auth-token',token)
                res.send('Login Succesfull Your  token is '+ token);
            }
            else{
                res.send('Invalid Password')
            }
        }
        else{
            res.send('No Email Found')
        }
    })
    .catch(err => {
        console.log('error',err);
    })
    
})

module.exports = router;
