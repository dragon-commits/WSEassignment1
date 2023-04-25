export default function deleteStudent(req, res) {

    console.log("deleteStudent api page called...");
 
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);

    const studentid = req.body.id;

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
        "DELETE FROM wse.students WHERE id = '"+studentid+"';",
        function(err, results, fields) {

            // return back the records
            res.status(200).json(results);

        }
    );

}