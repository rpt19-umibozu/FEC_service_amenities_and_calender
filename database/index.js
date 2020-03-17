const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getListingInfo = (listingId, callback) => {
  var quaryStr = `Select * from listingItems Where listingId=${listingId};`

  connection.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}


module.exports = {
  connection, getListingInfo
}