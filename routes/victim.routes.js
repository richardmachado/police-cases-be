const express = require('express');

const Victim = require('../models/victim.model');

const router = express.Router();

/** 
* @api {get} api/victims GET a list of all victims
* @apiName getVictims
* @apiGroup Victim
*/

router.get('/', (req, res) => {
    Victim.getVictim()
    .then(allvictims => {
        res.json(allvictims)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get victims. Contact your backend"})
    })
});
 
router.post('/', (req, res) => {
    const studentData = req.body;

    Victim.addVictim(studentData)
    .then(student => {
        res.status(201).json(student)
        
    })
    .catch(err => {
      
        res.status(500).json({errorMessage: 'Failed to create student. Please contact your backend'})
    })
    
});


 /** 
* @api {get} api/victims/:id GET a User by Id
* @apiName getUserById
* @apiGroup Victim
* @apiParam {Number} id User id
* @apiSuccess {Number} id User id
* @apiSuccess {String} victim victime name
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*{
*   "id": 2,
*   "victimname": "Mahoney",
*   "password": "pass"
*}
*/

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Victim.findVictimById(id)
    .then(victim => {
        if (victim) {
            res.json(victim)
        } else {
            res.status(404).json({message: 'There is no victim with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get victim. Contact your backend'})
    })
});

 /** 
* @api {put} api/victims/:id EDIT a User by Id
* @apiName editUser
* @apiGroup Victim
* @apiParam {Number} id User id
* @apiParam {String} victimname User email is used for victimname
* @apiParam {String} password victim password
*
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*/

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Victim.findVictimById(id)
    .then(victim => {
        if (victim) {
            Victim.updateUser(changes, id)
            .then(updatedUser => {
                res.json(updatedUser);
            })
        } else {
            res.status(404).json({message: "No victim with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update victim. Contact your backend"})
    })
});

 /** 
* @api {delete} api/victims/:id DELETE a Victim
* @apiName deleteVictim
* @apiGroup Victim
* @apiParam {Number} id Victim id
*
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
* {
*    "removed": 1
* }
*/

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Victim.removeVictim(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No victim with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete victim. Contact your backend"})
    })
});


// need to refactor to cases by id 

//  /** 
// * @api {get} api/victims/:id/cases GET cases belonging to that victimid
// * @apiName getStudentList
// * @apiGroup Victim
// *
// * @apiParam {Number} id User id
// *
// * @apiSuccessExample Successful Response
// * HTTP/1.1 200 OK
// *[
// * Enter a sample JSON response
// * ]
// */

// router.get('/:id/victims', (req, res) => {
//     const {id} = req.params

//     Victim.getStudentList(id)
//     .then(students => {
//         res.json(students)
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({errorMessage: "Database failed to get victims. Contact your backend"})
//     })
//  });

module.exports = router;