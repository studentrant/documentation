define({ "api": [
  {
    "type": " post ",
    "url": "/login",
    "title": "login user",
    "name": "login",
    "group": "Login",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..",
            "optional": true,
            "field": "username",
            "description": "<p>The username of the user who wants to login, if username is absent, email address should be used</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The email address of the user who wants to login, if email address is absent, username should be used</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   username: \"foobar\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n   email: \"foobar@example.com\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of user</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dateOfReg",
            "description": "<p>Timestamp of when user registered</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Email verification status of user</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "completeReg",
            "description": "<p>Flag to determine if user has complete the registration process</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : true,\n       verified    : true,\n       avatar      : \"https://lbalbal/balbal\"\n    }\n}",
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
            "field": "INVALID_LOGIN_USERNAME_EMAIL_NO_FIELD",
            "description": "<p>username/email field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_LENGTH",
            "description": "<p>username length is less than 5</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_FIELD",
            "description": "<p>password field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_LENGTH",
            "description": "<p>password field is less than 8</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_DIGIT",
            "description": "<p>password does not contain any number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_CHARS",
            "description": "<p>password does not contain any characters</p>"
          }
        ]
      }
    },
    "filename": "doc/login.doc.js",
    "groupTitle": "Login"
  },
  {
    "type": " post ",
    "url": "/rant/post/create",
    "title": "Create Rant",
    "name": "createRant",
    "group": "Post_Rant",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "20..",
            "optional": false,
            "field": "rant",
            "description": "<p>This is the content the user is posting (the actual rant)</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of tags this rant should be associated with</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "when",
            "description": "<p>Timestamp that represents the creation time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   rant: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\"\n   tags: [ \"foo\", \"bar\"],\n   when: 1596948381262\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>success message response</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "message.tags",
            "description": "<p>Array of tags the rant is associated with</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "message.when",
            "description": "<p>Timestamp that represents the creation time</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.rantId",
            "description": "<p>Unique Identifier for the rant</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.rantPoster",
            "description": "<p>Username of rant poster</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "size": "20..",
            "optional": false,
            "field": "message.rant",
            "description": "<p>This is the content the user is posting (the actual rant)</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "message.rantComments",
            "description": "<p>All comments associated with this rant (but this will be an empty array since this rant has just been created)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.deleted",
            "description": "<p>This property will be false, but it's used to mark if a rant is deleted or not, since this rant has just been created, this property will default to false</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "allowedValues": [
              "{}"
            ],
            "optional": false,
            "field": "message.edit",
            "description": "<p>This will be an empty object, but the properties of this object keeps track of edition history of the posted rant</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0"
            ],
            "optional": false,
            "field": "message.rantUpVote",
            "description": "<p>Upvote count of the rant</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "allowedValues": [
              "0"
            ],
            "optional": false,
            "field": "message.rantDownVote",
            "description": "<p>Downvote count of the rant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    status: 201,\n    message  : {\n       tags        : [ \"foo\", \"bar\" ]\n       when        : 1596948381262\n       rantId      : \"eee-ffff-00000-1111-22222\",\n       rantPoster  : \"username\",\n       rant        : \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\n       rantComments : [{}],\n       deleted      : false,\n       edit         : {},\n       rantUpVote   : 0,\n       rantDownVote : 0\n    }\n}",
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
            "field": "RANT_BODY_UNDEFINED",
            "description": "<p>Rant body data is not defined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_LENGTH_NOT_MORE_THAN_TWENTY",
            "description": "<p>Rant cannot be created because it is less than 20</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_TAGS_UNDEFINED",
            "description": "<p>Tag body data is not defined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_TAGS_NOT_AN_ARRAY",
            "description": "<p>Expect an array as rant tags but got</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_WHEN_NO_EXISTS",
            "description": "<p>A when field is required, it carries the timestamp of when the edit request was made</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_NOT_NUMBER",
            "description": "<p>when property must be a number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_NOT_VALID_TIMESTAMP",
            "description": "<p>Invalid timestamp information passed as value to the when property</p>"
          }
        ]
      }
    },
    "filename": "doc/create-rant.doc.js",
    "groupTitle": "Post_Rant"
  },
  {
    "type": " delete ",
    "url": "/rant/post/delete/:rantId",
    "title": "",
    "name": "deleteRant",
    "group": "Post_Rant",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "rantId",
            "description": "<p>The rant unique identifier to delete</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/rant/post/delete/eeee-0000-ffff-9999",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n\n{\n   status  : 200,\n   message : Rant has been deleted succefully\n}",
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
            "field": "RANT_ID_IS_UNDEFINED",
            "description": "<p>There is no id specified for the rant to modify</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_DOES_NOT_EXISTS",
            "description": "<p>The requested rant to modify does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_HAS_ALREADY_BEEN_DELETED",
            "description": "<p>Rant has already been deleted</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RANT_NOT_USER",
            "description": "<p>You are not allowed to modify this rant at this time</p>"
          }
        ]
      }
    },
    "filename": "doc/delete-rant.doc.js",
    "groupTitle": "Post_Rant"
  },
  {
    "type": " post ",
    "url": "/register/reg-first-step",
    "title": "First registration step of user",
    "name": "firstRegStep",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email address of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..",
            "optional": false,
            "field": "username",
            "description": "<p>username of user</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   email   : \"foobar@example.com\",\n   username: \"foobar\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to false because the user has not completed the second registration step, if user decides to logout and login back, this property should be check first to know if the user should be taken to the dashboard or the second registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    status: 201,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n    }\n}",
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
            "field": "INVALID_LOGIN_USERNAME_EMAIL_NO_FIELD",
            "description": "<p>username/email field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_LENGTH",
            "description": "<p>username length is less than 5</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_FIELD",
            "description": "<p>password field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_LENGTH",
            "description": "<p>password field is less than 8</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_DIGIT",
            "description": "<p>password does not contain any number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_CHARS",
            "description": "<p>password does not contain any characters</p>"
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  },
  {
    "type": " patch ",
    "url": "/register/reg-last-step",
    "title": "Last registration step of user",
    "name": "lastRegStep",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>country of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "interests",
            "description": "<p>what the user is interested in (we would use their interest to show them rants)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n   country: \"Nigeria\",\n   interests: [ \"teaching\", \"rant\", \"gossip\" ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to true because the user has completed the registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    status: 201,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n\n    }\n}",
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
            "field": "COUNTRY_PROPERTY_UNDEFINED",
            "description": "<p>country is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_COUNTRY_LENGTH",
            "description": "<p>country length is less than 1</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_INTEREST_FIELD",
            "description": "<p>interests is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_ARRAY_INTEREST",
            "description": "<p>interests is not an array field</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_INTEREST_LENGTH",
            "description": "<p>interest array length is 0</p>"
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  },
  {
    "type": " patch ",
    "url": "/register/verification/:token",
    "title": "Verify user token",
    "name": "tokenVerification",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>verification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to true because the user has completed the registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n    }\n}",
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
            "field": "INVALID_VERIFICATION_TOKEN",
            "description": ""
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  }
] });
