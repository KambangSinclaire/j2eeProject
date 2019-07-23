


const Queries = {
    getAllUsers: `select * from user;`,
    getUser: `select * from user where username = ?;`,
    getUserById: `select * from user where id = ?;`,
    deleteUserByUserName: `delete from user where username = ?;`,
    deleteUserById: `delete from user where id = ?;`,
    updateUserInfo: `update user set ? = ?;`,
    authenticateUser: `select * from user where username = ? and password = ?;`,
    authenticateDriver: `select * from driver where username = ? and password = ?;`,
    newUser: `INSERT INTO user (firstname,lastname,username,password,phone) VALUES(?, ?, ?, ?, ?);`,
    getAllCars: `select * from car;`,
    getCar: `select * from car where plate_number = ?;`,
    addCar: `INSERT INTO car (model, plate_number, no_of_seats,car_status) VALUES(?,?,?,?)`,
    deleteCar: `delete * from car where plate_number = ?;`,
    updateCarInfo: `update car set ? = ?;`,
    getAllDrivers: `select * from driver;`,
    registerDriver: `insert into driver(firstname, lastname, phone) values(?, ?, ?);`,
    getDriverByFirstName: `select * from driver where firstname = ?;`,
    deleteDriver: `delete from driver where firstname = ?;`,
    updateDriverInfo: `update driver set ? = ?;`,
    getAdmin: `select * from admin where username =?;`,
    deleteAdmin: `delete from admin where username = ?`,
    updateAdminInfo: `update admin set ? = ?`,
    authenticateAdmin: `select * from admin where email = ? and password = ?;`,
}


module.exports = Queries;