const db = require('../data/db-config');

module.exports = {
    getUsers,
    findUserById,
    updateUser,
    removeUser,
    getStudentList

}

function getUsers() {
    return db.select("*").from('user')
}

function findUserById(id) {
    return db('user')
    .where({id})
    .first()
}

function updateUser(changes, id){
    return db('user')
    .where({id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findUserById(id)
        } else {
            return null;
        }
    })
}

function removeUser (id) {
    return db('user')
    .where('id', id)
    .del()
    
}

function getStudentList(id) {
    
    return db('cases as c')
    .join('user as u', 'c.professor_id', 'u.id')
    .select('s.id as studentId', 's.name', 'c.email', 'c.image_url')
    .where({'professor_id' : id})
    .then(students => {
        if (students) {
            return students
            
        } else {
            return null
        }
    })   
}