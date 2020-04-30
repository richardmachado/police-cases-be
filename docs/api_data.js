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
          "content": "{\n\t\"username\": \"bruce@banner.com\",\n\t\"password\": \"pass\"   \n}",
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
          "content": "{\n\t\"username\": \"bruce@banner.com\",\n\t\"password\": \"pass\"   \n}",
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
  }
] });
