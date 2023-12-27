const bcrypt = require('bcryptjs')



function generateHash(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}

function matchPassword(password,hashedPassword){
    return bcrypt.compareSync(password,hashedPassword);
}

module.exports={
    generateHash,matchPassword
}