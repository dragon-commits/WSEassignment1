export default function deleteCourse(req, res) {

    console.log("deleteCourse api page called...");
 
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);

    const courseid = req.body.courseid;

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
        "DELETE FROM wse.courses WHERE id = '"+courseid+"';",
        function(err, results, fields) {

            // return back the records
            res.status(200).json(results);

        }
    );

}