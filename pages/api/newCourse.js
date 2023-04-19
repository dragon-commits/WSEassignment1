export default function newCourse(req, res) {
  
    console.log("newCourse api page called...");
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
    const title = req.body.title;
    const desc = req.body.desc;
    const nfq = req.body.nfq;
    const courseyear = req.body.courseyear;

    console.log("title is: "+ title);
    console.log("desc is: "+ desc);
    console.log("nfq is: "+ nfq);
    console.log("courseyear is: "+ courseyear);

    // simple query
    connection.query(
    "INSERT INTO `courses` (`title`, `desc`, `nfq`, `courseyear`) VALUES ('"+title+"', '"+desc+"', '"+nfq+"', '"+courseyear+"');",
    function(err, results, fields) {
    
        //return back the records
        res.status(200).json(results);
     
    }
    );
    }