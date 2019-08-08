const mysqlConn = require('../database/database');

module.exports = class Order {

    constructor(id, isRoundTrip, dateCreated, dateScheduled, userId, merchantId, parcelSize, numParcels, status) {
        this.id = id;
        this.is_round_trip = isRoundTrip;
        this.date_created = dateCreated;
        this.date_scheduled = dateScheduled;
        this.user_id = userId;
        this.merchant_id = merchantId;
        this.parcel_size = parcelSize;
        this.num_parcels = numParcels;
        this.status = status;
    }

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM `order`", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    create(newOrder) {
        //console.log(newUser);
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO `order` set ?", newOrder, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    getById(orderId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from `order` where id = ? ", orderId, function(
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

    getByUserId(userId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from `order` where user_id = ? ", userId, function(
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

    removeById(orderId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM `order` WHERE id = ?", orderId, function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };


}