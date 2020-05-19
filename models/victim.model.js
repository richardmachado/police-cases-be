const db = require('../data/db-config');

module.exports = {
    getVictim,
    findVictimById,
    updateVictim,
    removeVictim

}

function getVictim() {
    return db.select("*").from('victim')
}

function findVictimById(id) {
    return db('victim')
    .where({id})
    .first()
}

function updateVictim(changes, id){
    return db('victim')
    .where({id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findVictimById(id)
        } else {
            return null;
        }
    })
}

function removeVictim (id) {
    return db('victim')
    .where('id', id)
    .del()
    
}

// function getStudentList(id) {
    
//     return db('cases as c')
//     .join('victim as u', 'c.professor_id', 'u.id')
//     .select('s.id as studentId', 's.name', 'c.email', 'c.image_url')
//     .where({'professor_id' : id})
//     .then(students => {
//         if (students) {
//             return students
            
//         } else {
//             return null
//         }
//     })   
// }