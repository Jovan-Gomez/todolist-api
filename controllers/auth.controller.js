const {createUser} = require('../services/auth.service');

const register = async(req, res, next)=>{
    const {firstname, lastname, email, password} = req.body;
    try {
        const newUser = await createUser({firstname, lastname, email, password});
        res.json(newUser);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    register
}
