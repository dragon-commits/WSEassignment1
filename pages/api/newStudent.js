export default function newStudent(req, res) {
  
    console.log("newStudent api page called...");
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
    
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
    
    //Get the variables.
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const enrolledin = req.body.enrolledin;

    console.log("firstname is " + firstname);
    console.log("lastname is " + lastname);
    console.log("email is " + email);
    console.log("address is " + address);
    console.log("telephone is " + telephone);
    console.log("enrolledin is " + enrolledin);

    // simple query
    connection.query(
    "INSERT INTO `students` (`firstname`, `lastname`, `email`, `address`, `telephone`, `enrolledin`) VALUES ('"+firstname+"', '"+lastname+"', '"+email+"', '"+address+"', '"+telephone+"', '"+enrolledin+"');",
    function(err, results, fields) {
    
        //return back the records
        res.status(200).json("ok");
     
    }
    );
    }