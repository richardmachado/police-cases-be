const router = require("express").Router();
const Users = require("./auth-model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../secrets/secrets");

 /** 
* @api {post} api/auth/register   Create a new user
* @apiName registerUser
* @apiGroup Login/Register
* 
* @apiParam {String} username User's desired login- can be an email address or a username
* @apiParam {String} password User's desired password
*
* @apiParamExample Example Body:
* {
*	"username": "mahoney",
*	"password": "pass"   
* }

* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*{
*  "message": "Thanks for registering, $username!",
*  "user": {
*    "id": $id,
*    "username": "$username",
*    "password": "HashedPassword"
*  },
*  "token": "$token"
* }
*/

router.post("/register", (req, res) => {
  // implement registration
  let userData = req.body;
  const hash = bcrypt.hashSync(userData.password, 12);
  userData.password = hash;

  Users.insert(userData)
    .then(user => {
      const token = genToken(user);
      res.status(200).json({
        message: `Thanks for registering, ${userData.username}!`,
        user,
        token: token
      });
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve database", err });
    });
});


/** 
* @api {post} api/auth/login   Login a user
* @apiName LoginUser
* @apiGroup Login/Register
* 
* @apiParam {String} username User's registered login
* @apiParam {String} password User's registered password
*
* @apiParamExample Example Body:
* {
*	"username": "hightower",
*	"password": "pass"   
* }

* @apiSuccessExample Successful Response
* HTTP/1.1 200 OK
*{
*  "message": "Welcome back, $username!",
*  "user": {
*    "id": $id,
*    "username": "$username",
*    "password": "HashedPassword"
*  },
*  "token": "$token"
* }
 * @apiError UserNotFound The id/password of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error":  "message": "invalid username/password"
 *     }
 */



router.post("/login", (req, res) => {
  // implement login
  const { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user);
        res
          .status(200)
          .json({ message: `Welcome back, ${username}`, user, token: token });
      } else {
        res.status(401).json({ message: "invalid username/password" });
      }
    })
    .catch(err => {
      res.status(500).json({ Error: "failed to retrieve database", err });
    });
});

router.get("/", (req, res) => {
  Users.find().then(user => {
    res.status(200).json(user);
  });
});

function genToken(user) {
  const payload = {
    userId: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1h"
  };
  const token = jwt.sign(payload, secret.jwtSecret, options);
  return token;
}



module.exports = router;

