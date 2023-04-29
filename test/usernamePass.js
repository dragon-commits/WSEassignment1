async function callUsernamePass(username, password){

    // Get data from the form.
    const data = {
        username: username,
        password: password,
    }
      
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data.
    const endpoint = 'http://localhost:3000/api/login'
    
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }        
    
    // Send the form data to our forms API on Vercel and get a response.
    const res = await fetch(endpoint, options)
    
    const result = await res.json()
    //console.log(result)
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.

    if(result.includes("ok")){
      return 1;
      }
    if (result.includes("fail")){
        return 0;
      }
    else {
      return 2;
    }
}           
      
      QUnit.module('testing_login_page');
      
      QUnit.test('Checking if username admin password admin comes backfrom database', assert => {
          assert.equal(callUsernamePass('admin', 'admin'), 1);
        });