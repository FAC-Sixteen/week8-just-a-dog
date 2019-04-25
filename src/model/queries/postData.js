const dbConnection = require('../database/db_connection');

const postData = (name, date, description, keyword) => {
    dbConnection.query(
        'INSERT INTO dreams (name, date, description, keyword) VALUES ($1, $2, $3, $4)', 
        [name, date, description, keyword], 
        (err, res) => {
            if (err) return err;
            console.log('Data has been posted: ', res);
        }
    )
}


module.exports = postData;