export default function getGrade(req, res) {

// get the ID for the query
console.log("get enrolled page ID for query " + req.query.id);
let studentid = req.query.id;

    const mysql = require('mysql2');

      // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 2222,
        database: 'wse'
    });

    connection.query(
        "SELECT * FROM wse.grades WHERE sid = '"+studentid+"';",
        function(err, results, fields) {

            // return back the records
            res.status(200).json(results);

        }
    );

}