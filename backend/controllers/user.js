/*const createUser = (req,res)=>{
    res.send('<h1>I will create later.</h1>');
    
}*/
const User = require('../models/user')

exports.create = async (req, res) => {
  const { name, email, password } = req.body

  const newUser = new User({ name, email, password })
  await newUser.save()

  res.json({ user: newUser })
};

// to export createUser form this file
//module.exports = createUser;

