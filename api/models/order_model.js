const mysqlConn = require('../database/database');

var Order = function(order) {}

Order.get = function () {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from order", (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

Order.create = function(newOrder) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("INSERT INTO order set ?", newOrder, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.insertId);
            }
        });
    });
}

Order.getById = function (orderId) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from order where id = ?", orderId, function(
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
}

Order.getByUserId = function (userId) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from order where user_id = ?", userId, function(
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
}

Order.removeById = function (orderId) {
    return new Promise((resolve, reject) => {
        mysqlConn.query("DELETE FROM order WHERE id = ?", orderId, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

module.exports = Order;