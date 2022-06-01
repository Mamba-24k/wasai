const mongoose  = require("mongoose")
const schema = new mongoose.Schema({
    nickName:{type: String},
    email: {type: String},
    url: {type: String},
    avatarImg: {type: String},
    isSB: {type: Boolean, default: false}
},{
    timestamps: true
})
module.exports = mongoose.model('Users', schema)