const db = require('../data/db-config');

module.exports = {
    getVictim,
    findVictimById,
    updateVictim,
    removeVictim,
    addVictim

}

function getVictim() {
    return db.select("*").from('victim')
}

function findVictimById(id) {
    return db('victim')
    .where({id})
    .first()
}

// function updateVictim(changes, id){
//     return db('victim')
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

// function updateVictim(changes, id){
//     return db('victim')
//     .where('id', id)
//     .update(changes)
//     .then(updated => {
//         updated > 0 ? findVictimById(id) : null
//     })
// }

function updateVictim(changes, id){
    return db('victim')
    .where({id})
    .update(changes)
    .then(response => findVictimById(id))
}

function removeVictim (id) {
    return db('victim')
    .where('id', id)
    .del()
    
}

function addVictim(newVictim){
    return db('victim')
    .insert(newVictim)
    .then(ids => {
        const [id] = ids
        return findVictimById(id)
    })
}
