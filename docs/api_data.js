define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "/Users/richardmachado/Desktop/Lambda/Personal_Projects/Police/police-cases-be/docs/main.js",
    "groupTitle": "/Users/richardmachado/Desktop/Lambda/Personal_Projects/Police/police-cases-be/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "api/auth/login",
    "title": "Login a user",
    "name": "LoginUser",
    "group": "Login/Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's registered login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's registered password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"hightower\",\n\t\"password\": \"pass\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Welcome back, $username!\",\n \"user\": {\n   \"id\": $id,\n   \"username\": \"$username\",\n   \"password\": \"HashedPassword\"\n },\n \"token\": \"$token\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id/password of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\":  \"message\": \"invalid username/password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/auth/auth.router.js",
    "groupTitle": "Login/Register"
  },
  {
    "type": "post",
    "url": "api/auth/register",
    "title": "Create a new user",
    "name": "registerUser",
    "group": "Login/Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's desired login- can be an email address or a username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's desired password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"mahoney\",\n\t\"password\": \"pass\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Thanks for registering, $username!\",\n \"user\": {\n   \"id\": $id,\n   \"username\": \"$username\",\n   \"password\": \"HashedPassword\"\n },\n \"token\": \"$token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/auth/auth.router.js",
    "groupTitle": "Login/Register"
  },
  {
    "type": "delete",
    "url": "api/users/:id",
    "title": "DELETE a User",
    "name": "deleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n   \"removed\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/users/:id",
    "title": "EDIT a User by Id",
    "name": "editUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User email is used for username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id/cases",
    "title": "GET cases belonging to that userid",
    "name": "getStudentList",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"studentId\": 1,\n       \"name\": \"Calvin Riley\",\n       \"email\": \"calvin@gmail.com\",\n       \"image_url\": \"https://ibb.co/D517kWp\"\n   },\n   {\n       \"studentId\": 2,\n       \"name\": \"Cindy Lou\",\n       \"email\": \"cindy@gmail.com\",\n       \"image_url\": \"https://ibb.co/gjnrsxT\"\n   },\n   {\n       \"studentId\": 3,\n       \"name\": \"John Smith\",\n       \"email\": \"john@gmail.com\",\n       \"image_url\": \"https://ibb.co/Pr9g04c\"\n   },\n  {\n       \"studentId\": 4,\n       \"name\": \"Julian Mills\",\n       \"email\": \"julian@gmail.com\",\n       \"image_url\": \"https://ibb.co/R6kSgDG\"\n   },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "GET a User by Id",
    "name": "getUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 2,\n  \"username\": \"Mahoney\",\n  \"password\": \"pass\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "GET a list of all users",
    "name": "getUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "./routes/users.routes.js",
    "groupTitle": "Users"
  }
] });
