const mysqlConn = require('../database/database');

fs = require('fs');

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user",
};

module.exports = class User {

  constructor(newId, newFirstName, newLastName, newEmail, newPassword, newCellPhone, newInstruction) {
    this.id = newId;
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.email = newEmail;
    this.password = newPassword;
    this.role = roles.USER;
    this.cell_phone = newCellPhone;
    this.instruction = newInstruction;
  }

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM user", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    create(newUser) {
        //console.log(newUser);
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.insertId);
                }
            });
        });
    };

    getById(userId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from user where id = ? ", userId, function(
                err,
                res
            ) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    // not working
    updateById(user, userId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE user SET user = ? WHERE id = ?", [user, userId],
                function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    };

    removeById(userId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

}