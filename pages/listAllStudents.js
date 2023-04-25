import { NextUIProvider } from '@nextui-org/react';
import {useRouter} from 'next/router'
import { Input, useInput } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { createTheme} from "@nextui-org/react"
import { Image } from '@nextui-org/react';
import { withIronSessionSsr } from "iron-session/next";
import { Table } from '@nextui-org/react';


export default function listAllCourses({data, students}) {

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
    const enrolledin = document.querySelector('#enrolledin').value

    console.log("firstname is " + firstname);
    console.log("lastname is " + lastname);
    console.log("email is " + email);
    console.log("address is " + address);
    console.log("telephone is " + telephone);
    console.log("enrolledin is " + enrolledin);

     // Get data from the form.
     const data = {
       firstname: firstname,
       lastname: lastname,
       email: email,
       address: address,
       telephone: telephone,
       enrolledin: enrolledin,
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
     router.push("/listAllStudents");
      // }
}

  // Handle the submit for the form
  async function deleteStudent(id) {
       
    alert("Are you sure you want to delete student " +id+ "?");
    
     // Get data from the form.
     const data = {
       id: id,
     }
 
     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
 
     // API endpoint where we send form data.
     const endpoint = '/api/deleteStudent'

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

     // redirect based on the result
     router.push("/listAllStudents");
     alert("Student Deleted!");
      // }
}

/**************** CUSTOM THEME ********************/
const myCustomTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$33ACFF',
      primaryLightHover: '$33ACFF',
      primaryLightActive: '$33ACFF',
      primaryLightContrast: '$33ACFF',
      primary: '#33ACFF',
      primaryBorder: '$33ACFF',
      primaryBorderHover: '$33ACFF',
      primarySolidHover: '$33ACFF',
      primarySolidContrast: '$white',
      primaryShadow: '$33ACFF',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

/**************** END CUSTOM THEME ********************/

      return (
        <NextUIProvider theme={myCustomTheme}>

{/*Logo to appear at the top in the center */}
<Image
        width={320}
        height={180}
        src="https://dynamic.brandcrowd.com/asset/logo/cb52f9e5-32ed-4f83-b20a-3aa171749462/logo-search-grid-1x?logoTemplateVersion=1&v=638095294425300000"
        alt="Default Image"
        objectFit="cover"
        />

{/* ########## Top card #######*/}

<Card css={{ width: '100%', h: "$30", $$cardColor: '$colors$secondary' }}>
    <Card.Body>
        <Row justify="center" align="center" >    
            <Text h1 size={30} color="white" css={{ mt: 0 }}>
                COLLEGE MANAGEMENT SYSTEM
            </Text>
        </Row>
            <Text gap={1} h3 color="$colors$primary" css={{ m: 0 }}>
                <Row justify="center" align="center" >              
                    Hello {(data)}!
                </Row>
            </Text>
    </Card.Body>
</Card>

{/* ########## End Top card #######*/}

{/* ########## Middle card #######*/}

<Card css={{ h: "500px", $$cardColor: '#FFFFFF' }}>
            <Card.Body>
            <Row justify="center" align="center" >    
            <Text h2 size={30} color="$colors$secondary" css={{ mt: 0 }}>
                STUDENT MANAGEMENT
            </Text>
        </Row>

{/* ########## BEGIN TABLE #######*/}
<Table
    aria-label="Example table with static content"
    css={{height: "auto", minWidth: "100%",}}
>
  <Table.Header> 
    <Table.Column>Student ID</Table.Column>
    <Table.Column>Firstname</Table.Column>
    <Table.Column>Lastname</Table.Column>
    <Table.Column>Email</Table.Column>
    <Table.Column>Address</Table.Column>
    <Table.Column>Telephone</Table.Column>
    <Table.Column>Course ID</Table.Column>
    <Table.Column>Delete Student</Table.Column>
  </Table.Header>

      <Table.Body>
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
            students &&
            students.map((item, i) => (
            // print out the table from the JSON we got
            // from the API

            <Table.Row key="1">
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstname}</Table.Cell>
              <Table.Cell>{item.lastname}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              <Table.Cell>{item.telephone}</Table.Cell>
              <Table.Cell>{item.enrolledin}</Table.Cell>
              <Table.Cell>
                <Button color='error' type='button' onClick={(save) => deleteStudent(item.id)}>
                Delete Student
                </Button>
              </Table.Cell>
            </Table.Row>
))   
          }


            <Table.Row key="1">
          <Table.Cell>*</Table.Cell>
          <Table.Cell><Input id="firstname" clearable bordered initialValue="" labelPlaceholder="Enter Firstname" /></Table.Cell>
          <Table.Cell><Input id="lastname" clearable bordered initialValue="" labelPlaceholder="Enter Lastname" /></Table.Cell>
          <Table.Cell><Input id="email" clearable bordered initialValue="" labelPlaceholder="Enter Email" /></Table.Cell>
          <Table.Cell><Input id="address" clearable bordered initialValue="" labelPlaceholder="Enter Address" /></Table.Cell>
          <Table.Cell><Input id="telephone" clearable bordered initialValue="" labelPlaceholder="Enter Telephone Number" /></Table.Cell>
          <Table.Cell><Input id="enrolledin" clearable bordered initialValue="" labelPlaceholder="Enter Course ID" /></Table.Cell>
          <Table.Cell> <form onSubmit={handleSubmit}>
            <Link href="/confirm">
              <Button type="submit"  color="primary">
              ADD STUDENT
              </Button>
              </Link></form></Table.Cell>
            </Table.Row>

      </Table.Body>
</Table>
{/* ########## END TABLE #######*/}

  </Card.Body>
</Card>

{/* ########## Bottom card #######*/}
<Card css={{ width: '100%', h: "$24", $$cardColor: '$colors$secondary' }}>
    <Card.Body>
        <br></br>
            <Text h6 size={14} color="white" css={{ mt: 0 }} align="center">
            Designed by ___________________ © 2023
            </Text>
    </Card.Body>
</Card>
{/* ########## End Bottom card #######*/}


   
    </NextUIProvider>

)
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req}) {

  const res = await  fetch('http://localhost:3000/api/listStudents') 
  const studentdata = await res.json()
  console.log("listStudents output");
  var students = studentdata;
  console.log(students);


  console.log("getting data from session..");
  console.log(req.session.username.username);

    return {
      props: {
        data: req.session.username.username,
        students: students,
      },
    };
  }, // -------------------- All boilerplate code for sessions ------------------------------------
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);