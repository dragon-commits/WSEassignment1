// this function is just here to be 
// a palce to call the api/test page we are
// testing
async function calllistStudents(callback) {

  // Making a call to the URL we want to test
  // this page should return back JSON with the code 509 in it.
  await fetch('http://localhost:3000/api/listStudents')
    .then((response) => response.json())
    .then((responseJson) => {

      //let content = responseJson.json();
      console.log("content...");
      console.log(responseJson);

      console.log("content returned from api/test.js");

      // See does the string "John" exist in the response we got back.
      // from calling the api/listStudents page.
      if (Object.values(responseJson).indexOf('John') > -1) {
        console.log("found it");

        callback("John"); // send the number back to the unit test
      } else {
        console.log("didnt find it");

        callback("0"); // if we didn't find it, send back 0 to say we didn't find what we wanted.
      }
    });
}

QUnit.test('Checking if firstname John comes backfrom database', assert => {
  const done = assert.async();

  calllistStudents(res => {
    assert.strictEqual(res, "John", 'Result');
    done();
  });
});

const timeout = QUnit.config.testTimeout;
QUnit.config.testTimeout = 40000;
setTimeout(() => {
  QUnit.config.testTimeout = timeout;
}, 10);