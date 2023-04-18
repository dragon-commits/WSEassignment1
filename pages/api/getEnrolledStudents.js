export default function getEnrolledStudents(req, res) {
  
// get the ID for the query
console.log("get enrolled page ID for query " + req.query.id);
let currentID = req.query.id;

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
"SELECT * FROM students where enrolledin = '"+currentID+"';",
function(err, results, fields) {


    console.log("send back the results");
    console.log(results);

    //return back the records
    res.status(200).json(results);
 
}
);
}