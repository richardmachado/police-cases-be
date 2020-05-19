const db = require('../data/db-config');

module.exports = {
    getCases,
    findCaseById,
    updateCase,
    removeCase,
    addCase

}

function getCases() {
    return db.select("*").from('case')
}

function findCaseById(id) {
    return db('case')
    .where({id})
    .first()
}

// function updateVictim(changes, id){
//     return db('case')
//     .where("id", id)
//     .update(changes)
//     .then(count=> {
//         if (count > 0) {
//             return findVictimById(id)
//         } else {
//             return null;
//         }
//     })
// }

function updateCase(changes, id){
    return db('case')
    .where('id', id)
    .update(changes)
    .then(updated => {
        updated > 0 ? findCaseById(id) : null
    })
}

function removeCase(id) {
    return db('case')
    .where('id', id)
    .del()
    
}

function addCase(newCase){
    return db('case')
    .insert(newCase)
    .then(ids => {
        const [id] = ids
        return findCaseById(id)
    })
}
