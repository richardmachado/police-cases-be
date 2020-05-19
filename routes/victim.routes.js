const express = require('express');

const Victim = require('../models/victim.model');

const router = express.Router();

/** 
* @api {get} api/victims GET a list of all victims
* @apiName getVictim
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
*   "username": "Mahoney",
*   "password": "pass"
*}
*/

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Victim.findUserById(id)
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({message: 'There is no user with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get user. Contact your backend'})
    })
});

 /** 
* @api {put} api/victims/:id EDIT a User by Id
* @apiName editUser
* @apiGroup Victim
* @apiParam {Number} id User id
* @apiParam {String} username User email is used for username
* @apiParam {String} password user password
*
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*/

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Victim.findUserById(id)
    .then(user => {
        if (user) {
            Victim.updateUser(changes, id)
            .then(updatedUser => {
                res.json(updatedUser);
            })
        } else {
            res.status(404).json({message: "No user with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update user. Contact your backend"})
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

    Victim.removeUser(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No user with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete user. Contact your backend"})
    })
});


// need to refactor to cases by id 

 /** 
* @api {get} api/victims/:id/cases GET cases belonging to that userid
* @apiName getStudentList
* @apiGroup Victim
*
* @apiParam {Number} id User id
*
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*[
*    {
*        "studentId": 1,
*        "name": "Calvin Riley",
*        "email": "calvin@gmail.com",
*        "image_url": "https://ibb.co/D517kWp"
*    },
*    {
*        "studentId": 2,
*        "name": "Cindy Lou",
*        "email": "cindy@gmail.com",
*        "image_url": "https://ibb.co/gjnrsxT"
*    },
*    {
*        "studentId": 3,
*        "name": "John Smith",
*        "email": "john@gmail.com",
*        "image_url": "https://ibb.co/Pr9g04c"
*    },
*   {
*        "studentId": 4,
*        "name": "Julian Mills",
*        "email": "julian@gmail.com",
*        "image_url": "https://ibb.co/R6kSgDG"
*    },
* ]
*/

router.get('/:id/victims', (req, res) => {
    const {id} = req.params

    Victim.getStudentList(id)
    .then(students => {
        res.json(students)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get victims. Contact your backend"})
    })
 });

module.exports = router;