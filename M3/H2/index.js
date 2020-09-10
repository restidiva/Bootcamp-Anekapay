const mongoose = require ('mongoose')

mongoose.Promise = global.Promise

const db = mongoose.connect('mongodb://localhost:27017/cobadb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = mongoose.Schema({
    nama : String,
    usia: Number,
    status: String
})
const User = mongoose.model('user',userSchema)

const addUser = (user)=>{
    User.create(user).then(user =>{
        console.info('Add User');
    })
}

const findUser = (nama)=>{
    const search = new RegExp(nama, 'i');
    User.findOne({nama: search}).then(nama=>{
        console.info(nama)
    })
}

const updateUser =(_id, user) => {
    User.updateOne({_id}, user)
      .then(user => {
        console.info('Update User')
    })
}

const deleteUser = (_id) => {
    User.deleteOne({ _id })
      .then(user => {
        console.info('DeleteUser');
    });
}

const listUser = () => {
    User.find()
      .then(user => {
        console.log(user);
        console.log(`${user.length} User`);
      });
  }

module.exports = {
    addUser,
    findUser,
    updateUser,
    deleteUser,
    listUser
}