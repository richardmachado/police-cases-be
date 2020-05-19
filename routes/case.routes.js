const express = require('express');

const Case = require('../models/cases.model');

const router = express.Router();

/** 
* @api {get} api/cazes GET a list of all cazes
* @apiName getVictims
* @apiGroup Victim
*/

router.get('/', (req, res) => {
    Case.getCases()
    .then(allcases => {
        res.json(allcases)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get cases. Contact your backend"})
    })
});
 
router.post('/', (req, res) => {
    const caseData = req.body;

    Case.addCase(caseData)
    .then(caze => {
        res.status(201).json(caze)
        
    })
    .catch(err => {
      
        res.status(500).json({errorMessage: 'Failed to create case. Please contact your backend'})
    })
    
});


 /** 
* @api {get} api/cases/:id GET a User by Id
* @apiName getUserById
* @apiGroup Case
* @apiParam {Number} id User id
* @apiSuccess {Number} id User id
* @apiSuccess {String} case case name
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*{
*   "id": 2,
*   "cazename": "Mahoney",
*   "password": "pass"
*}
*/

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Case.findCaseById(id)
    .then(caze => {
        if (caze) {
            res.json(caze)
        } else {
            res.status(404).json({message: 'There is no case with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get case. Contact your backend'})
    })
});

 /** 
* @api {put} api/cases/:id EDIT a User by Id
* @apiName editUser
* @apiGroup Case
* @apiParam {Number} id User id
* @apiParam {String} cazename User email is used for cazename
* @apiParam {String} password caze password
*
* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*/

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Case.findCaseById(id)
    .then(caze => {
        if (caze) {
            Case.updateCase(changes, id)
            .then(updatedCase => {
                res.json(updatedCase);
            })
        } else {
            res.status(404).json({message: "No case with that id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update case. Contact your backend"})
    })
});

 /** 
* @api {delete} api/cases/:id DELETE a Victim
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

    Case.removeCase(id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No case with that id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete case. Contact your backend"})
    })
});


// need to refactor to cases by id 

//  /** 
// * @api {get} api/cazes/:id/cases GET cases belonging to that cazeid
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

// router.get('/:id/cases', (req, res) => {
//     const {id} = req.params

//     Victim.getStudentList(id)
//     .then(students => {
//         res.json(students)
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json({errorMessage: "Database failed to get cazes. Contact your backend"})
//     })
//  });

module.exports = router;