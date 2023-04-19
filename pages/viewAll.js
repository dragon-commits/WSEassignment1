import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react"

export default function ViewAll({data, courseid}) {


    // if we want to redirect the user
    const router = useRouter()

      // Handle the submit for the form
  async function handleSubmit(event) {
       
    alert("The form was submitted");
    event.preventDefault();

    // grab the variables from the form.
    const firstname = document.querySelector('#firstname').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const address = document.querySelector('#address').value
    const telephone = document.querySelector('#telephone').value

    console.log("firstname is " + firstname);
    console.log("lastname is " + lastname);
    console.log("email is " + email);
    console.log("address is " + address);
    console.log("telephone is " + telephone);

     // Get data from the form.
     const data = {
       firstname: firstname,
       lastname: lastname,
       email: email,
       address: address,
       telephone: telephone,
       enrolledin: courseid,
     }
 
     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
 
     // API endpoint where we send form data.
     const endpoint = '/api/newStudent'

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
     const response = await fetch(endpoint, options)

     // Get the response data from server as JSON.
     // If server returns the name submitted, that means the form works.
     const result = await response.json()
     alert(result);
     
     //redirect based on result
      // if(result.includes("ok")){

     // redirect based on the result
     router.push(`/viewAll?id=${courseid}`);
      // }
}

    // if we want to get a parameter from the URL such as
    // the ID.
    const {cid} = router.query

 // Sending back the main user interface.
  return (
    <NextUIProvider>
        View all page
        Current ID is: {courseid}

   

        { /* ######################## BEGIN TABLE ######################*/}

<Table

  aria-label="Example table with static content"
  css={{
    height: "auto",
    minWidth: "100%",

  }}

>
  <Table.Header>
    <Table.Column>ID</Table.Column>
    <Table.Column>Grade</Table.Column>
    <Table.Column>Firstname</Table.Column>
    <Table.Column>Lastname </Table.Column>
    <Table.Column>Email </Table.Column>
    <Table.Column>Address </Table.Column>
    <Table.Column>Tel </Table.Column>
    <Table.Column>Enrolled in </Table.Column>
  </Table.Header>

  <Table.Body >
    <Table.Row key="1">
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>


    {
 

      data &&
      data.map((item, i) => (
        // print out the table from the JSON we got
        // from the API

        <Table.Row key="1">

          <Table.Cell>{item.id} </Table.Cell>
          <Table.Cell>
            <Input id={`grade_`+item.id}   labelPlaceholder={`Enter Grade `+item.id}/>
            <Button type="button" onClick={(save) => saveData(item.id, courseid)}  size="xs">Save</Button>
          </Table.Cell>
          <Table.Cell>{item.firstname} </Table.Cell>
          <Table.Cell>{item.lastname} </Table.Cell>
          <Table.Cell>{item.email} </Table.Cell>
          <Table.Cell>{item.address} </Table.Cell>
          <Table.Cell>{item.telephone} </Table.Cell>
          <Table.Cell>{item.enrolledin} </Table.Cell>
         
        </Table.Row>
      ))
    }

          <Table.Row key="1">

          <Table.Cell>*</Table.Cell>
          <Table.Cell>*</Table.Cell>
          <Table.Cell><Input id="firstname" clearable bordered initialValue="firstname" /></Table.Cell>
          <Table.Cell><Input id="lastname" clearable bordered initialValue="lastname" /></Table.Cell>
          <Table.Cell><Input id="email" clearable bordered initialValue="email" /></Table.Cell>
          <Table.Cell><Input id="address" clearable bordered initialValue="address" /></Table.Cell>
          <Table.Cell><Input id="telephone" clearable bordered initialValue="telephone" /></Table.Cell>
          <Table.Cell> <form onSubmit={handleSubmit}>
            <Link href="/confirm">
              <Button type="submit"  color="error" ghost>
              ADD STUDENT
              </Button>
              </Link></form></Table.Cell>
            </Table.Row>


  </Table.Body>
</Table>


{/** ########################## END TABLE ##############*/}


    </NextUIProvider>
  )





   /* ************************** SUBMIT HANDLER *************************/
   async function saveData(id, courseid) {

    let gradeValue = document.getElementById('grade_'+id).value;
   
   
    alert(id + " " + gradeValue+" "+courseid);
   

   

    // if we want to get a parameter from the URL such as
    // the ID.





  // Get data from the form.
  const data = {
    sid: id,
    grade: gradeValue,
    cid: courseid

  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/saveGrade'



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
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  //const result = await response.json()


















   
    alert('Saved!');
  }


}

export async function getServerSideProps(context) {
  let id = context.query.id;
  let courseid = context.query.id;
  console.log("current id " + id);

  const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+id);
  const data = await res.json()


  return {
    props: { data,courseid }, // will be passed to the page component as props
  }
}
