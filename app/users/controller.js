const User = require('./model');
const User = require('./model')

const index = async (req, res, next) => {
    // res.render('index', { title: 'Express' });
    try {
        const users = await User.find()
        res.send({status:"success", message: "list users", data: users})
    } catch (error) {
        res.send({status: "error", message: error.message})
    }
  };

   const getUserById = async (req, res, next) => {
       try {
           const users = await User.findById(req.params.id)
           if(users) {
               res.send({status: "success", message: "single users", data: users})
           } else {
               res.send({status: "warning", message: "user tidak ditemukan"})
           }
       } catch (error) {
           res.send({status: "error", message: error.message})
       }
   }

   const addUser = async (req, res, next) => {
       try {
           const {name, age, status} = req.body
           const newUser = await User.create({
               name: name,
               age: age,
               status: status,
           })
           res.send({status: "success", message: "adding users", data: newUser})
       } catch (error) {
           res.send({status: "error", message: error.message})
       }
   }

   const updateUser = async (req, res, next) => {
       try {
           const user = await User.findById(req.params.id)
           Object.assign(user, req.body)
           user.save()
           res.send({ data: user })
       } catch (error) {
           res.send({status: "error", message: error.message})
       }
   }

   const deleteUser = async (req, res, next) => {
       try {
           const user = await User.findById(req.params.id)
           await user.remove()
           res.send({ data: true })
       } catch (error) {
           res.send({status: "error", message: error.message})
       }
   }

  module.exports = {
      index,
      getUserById,
      addUser,
      updateUser,
      deleteUser,
  };