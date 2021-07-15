const {Users} = require('../models');

const createUser = async(userObj)=>{
    const {firstname, lastname, email, password} = userObj;
    try {
        const result = await Users.create({firstname, lastname, email, password});
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createUser
}
