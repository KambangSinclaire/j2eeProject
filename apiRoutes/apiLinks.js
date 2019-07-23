const express = require('express');
const databaseApi = require('../config/config');
const Queries = require('../Models/dbModels');
const api = express.Router();

/**
 * USER ROUTES
 */

//Get all users
api.get("/api/users", (req, res) => {
    databaseApi.query(Queries.getAllUsers, (error, users) => {
        if (error) {
            res.json(error);
        } else {
            res.json(users);
        }
    });
});


//get user by id
api.get("/api/userId/:id", (req, res) => {
    const userId = req.params.id;
    databaseApi.query(Queries.getUserById, userId, (error, user) => {
        if (error) {
            res.json(error);
        } else {
            res.json(user);
        }
    });
});

//get user by id
api.get("/api/userByName/:id", (req, res) => {
    const username = req.params.username;
    databaseApi.query(Queries.getUser, username, (error, user) => {
        if (error) {
            res.json(error);
        } else {
            res.json(user);
        }
    });
});




//get user by username
api.get("/api/user/:name", (req, res) => {
    const username = req.params.name;
    databaseApi.query(Queries.deleteUserByUserName, username, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});


//delete user by id
api.delete("/api/user/delete/:id", (req, res) => {
    const userId = req.params.id;
    databaseApi.query(Queries.deleteUserById, userId, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});


//get user details by id for update
api.post("/api/user/update/:id", (req, res) => {
    const userId = req.params.id;
    databaseApi.query(Queries.updateUserInfo, userId, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});


//user login. For mobile users of the system since our target platform is mobile
api.post("/api/user/login", (req, res) => {
    const isUserLogged = [
        username = req.body.username,
        password = req.body.password
    ];
    databaseApi.query(Queries.authenticateUser, isUserLogged, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});


//User account creation. Mobile as well
api.post("/api/user/register", (req, res) => {

    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let username = req.body.username
    let password = req.body.password
    let phone = req.body.phone

    const registerUser = [
        firstname, lastname, username, password, phone
    ];

    databaseApi.query(Queries.newUser, registerUser, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});


//User account creation. Mobile as well
api.put("/api/user/register", (req, res) => {

    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let username = req.body.username
    let password = req.body.password
    let phone = req.body.phone

    const registerUser = [
        firstname, lastname, username, password, phone
    ];

    databaseApi.query(Queries.newUser, registerUser, (error, user) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(user);
        }
    });
});
/**
 * END OF USER ROUTES
 */



/**
 * ADMIN ROUTES
 */

// Authenticating an admin for login 
api.post("/api/admin/login", (req, res) => {
    //BASIC BACKEND VALIDATION
    if (req.body.email == "" || req.body.password == "") {
        res.json("Error authenticating User. Invalid field(s) detected");
    } else {

        const isAdminLogged = [
            userMail = req.body.email,
            password = req.body.password
        ]
        databaseApi.query(Queries.authenticateAdmin, isAdminLogged, (error, admin) => {
            if (error) {
                res.json(error);
                return;
            } else {
                res.send(admin);
            }
        });
    } // Successful request made
});



// Deleting an admin
api.delete("/api/admin/delete/:id", (req, res) => {

    databaseApi.query(Queries.deleteAdmin, req.params.id, (error, deletedAdmin) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(deletedAdmin);
        }
    });
});

//updating admin account 
api.put("/api/admin/update", (req, res) => {

    let newEmail = req.body.emmail;
    let newPassword = req.body.password;
    let newLastName = req.body.lastname;
    let newFirstName = req.body.firstname;
    let newAdminName = req.body.username;

    const UpdateAdmin = [
        newEmail, newPassword, newLastName, newFirstName, newAdminName
    ]
    databaseApi.query(Queries.updateAdminInfo, UpdateAdmin, (error, newAdmin) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(newAdmin);
        }
    });
});
/**
* END OF ADMIN ROUTES
*/

/**
DRIVER ROUTES
 */
//Get all drivers
api.get("/api/drivers", (req, res) => {
    databaseApi.query(Queries.getAllDrivers, (error, drivers) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(drivers);
        }
    });
});

//authenticate driver login
api.post("/api/driver/login", (req, res) => {
    const isDriverLogged = {
        username: req.body.username,
        password: req.body.password
    }
    databaseApi.query(Queries.authenticateDriver, isDriverLogged, (error, driver) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(driver);
        }
    });
});


/**
 * CAR ROUTE OPERATIONS
 */

api.get("/api/cars", (req, res) => {
    databaseApi.query(Queries.getAllCars, (error, cars) => {
        if (error) {
            res.json(error);
        } else {
            res.json(cars);
        }
    });
});


api.get("/api/car/:id", (req, res) => {
    const carNumber = req.params.id;
    databaseApi.query(Queries.getCar, carNumber, (error, car) => {
        if (error) {
            res.json(error);
        } else {
            res.json(car);
        }
    });
});


api.delete("/api/user/delete/:id", (req, res) => {
    const carNumber = req.params.id;
    databaseApi.query(Queries.deleteCar, carNumber, (error, car) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(car);
        }
    });
});





//Untracked route. Route is still to be handled
api.put("/api/user/update/:id", (req, res) => {
    const userId = req.params.id;
    databaseApi.query(Queries.updateUserInfo, userId, (error, car) => {
        if (error) {
            res.json(error);
            return;
        } else {
            res.json(car);
        }
    });
});


api.post("/api/car/register", (req, res) => {

    let model = req.body.model;
    let plate_number = req.body.plate_number;
    let car_status = req.body.car_status;
    let no_of_seats = req.body.no_of_seats;

    if (req.body.model == "" || req.body.plate_number == "" || req.body.no_of_seats == "" || req.body.car_status == "") {
        res.json("Error authenticating User. Invalid field(s) detected");
    } else {

        const registerUser = [
            model, plate_number, no_of_seats, car_status
        ];
        databaseApi.query(Queries.addCar, registerUser, (error, car) => {
            if (error) {
                res.json(error);
                return;
            } else {
                res.json(car);
            }
        });
    }

});





// databaseApi.end();

module.exports = api;