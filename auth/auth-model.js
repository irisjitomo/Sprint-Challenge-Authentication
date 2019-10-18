const db = require('../database/dbConfig')

module.exports = {
    add,
    // find,
    findById,
    findBy
}

// function find() { 
//     db('')
// }

async function add(user){
    const [id] = await db('users')
    .insert(user, 'id')
    
    return db('users').where({id}).first()
}

function findById(id){
    return db('users')
    .where({id})
    .first();
}

function findBy(user) {
    return db('users').where(user)
}