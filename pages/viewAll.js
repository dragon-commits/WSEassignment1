import { Link } from "@nextui-org/react";
import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react"
import { createTheme} from "@nextui-org/react"
import { Image } from '@nextui-org/react';
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";

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
 // Sending back the main user interface.
  return (

    <NextUIProvider theme={myCustomTheme}>
        
        Current ID is: {courseid}
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
                    Hello !
                </Row>
            </Text>
    </Card.Body>
</Card>

{/* ########## End Top card #######*/}

{/* ########## Middle card #######*/}

<Card css={{ h: "500px", $$cardColor: '#FFFFFF' }}>
            <Card.Body>


   

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
    <Table.Column>Telephone </Table.Column>
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
          <Table.Cell><Input id="firstname" clearable bordered initialValue="" labelPlaceholder="Firstname" /></Table.Cell>
          <Table.Cell><Input id="lastname" clearable bordered initialValue="" labelPlaceholder="Lastname" /></Table.Cell>
          <Table.Cell><Input id="email" clearable bordered initialValue="" labelPlaceholder="Email" /></Table.Cell>
          <Table.Cell><Input id="address" clearable bordered initialValue="" labelPlaceholder="Address" /></Table.Cell>
          <Table.Cell><Input id="telephone" clearable bordered initialValue="" labelPlaceholder="Telephone" /></Table.Cell>
          <Table.Cell> <form onSubmit={handleSubmit}>
            <Link href="/confirm">
              <Button type="submit"  color="secondary" >
              ADD STUDENT
              </Button>
              </Link></form></Table.Cell>

          </Table.Row>

  </Table.Body>
</Table>

{/** ########################## END TABLE ##############*/}

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
