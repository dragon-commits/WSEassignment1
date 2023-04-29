export default function listAllStudentsQuery(req, res) {
  
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'example',
port: 2222,
database: 'wse'
});

// simple query
connection.query(
"SELECT * FROM students;",
function(err, results, fields) {

    //loop over all the records

    //return back the records#
    res.status(200).json(results);
 
}
);
}