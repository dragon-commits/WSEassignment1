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


export default function listAllCourses({data, courses}) {

  const router = useRouter()

  // Handle the submit for the form
  async function handleSubmit(event) {
       
    alert("The form was submitted");
    event.preventDefault();

    // grab the variables from the form.
    const title = document.querySelector('#title').value
    const desc = document.querySelector('#desc').value
    const nfq = document.querySelector('#nfq').value
    const courseyear = document.querySelector('#courseyear').value

    console.log("title is " + title);
    console.log("desc is " + desc);
    console.log("nfq is " + nfq);
    console.log("courseyear is " + courseyear);

     // Get data from the form.
     const data = {
       title: title,
       desc: desc,
       nfq: nfq,
       courseyear: courseyear,
     }
 
     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
 
     // API endpoint where we send form data.
     const endpoint = '/api/newCourse'

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
     router.push("/listAllCourses");
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


{/* ########## BEGIN TABLE #######*/}
<Table
    aria-label="Example table with static content"
    css={{height: "auto", minWidth: "100%",}}
>
  <Table.Header> 
    <Table.Column>ID</Table.Column>
    <Table.Column>Title</Table.Column>
    <Table.Column>Description</Table.Column>
    <Table.Column>NFQ</Table.Column>
    <Table.Column>Year</Table.Column>
    <Table.Column>Option</Table.Column>
    <Table.Column></Table.Column>
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
        </Table.Row>

          {
            courses &&
            courses.map((item, i) => (
            // print out the table from the JSON we got
            // from the API

            <Table.Row key="1">
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.desc}</Table.Cell>
              <Table.Cell>{item.nfq}</Table.Cell>
              <Table.Cell>{item.courseyear}</Table.Cell>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell><Link href={`/viewAll?id=`+item.id}>View</Link></Table.Cell>
            </Table.Row>
))   
          }


            <Table.Row key="1">
          <Table.Cell>*</Table.Cell>
          <Table.Cell><Input id="title" clearable bordered initialValue="Title" /></Table.Cell>
          <Table.Cell><Input id="desc" clearable bordered initialValue="description" /></Table.Cell>
          <Table.Cell><Input id="nfq" clearable bordered initialValue="NFQ" /></Table.Cell>
          <Table.Cell><Input id="courseyear" clearable bordered initialValue="Course Year" /></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell> <form onSubmit={handleSubmit}>
            <Link href="/confirm">
              <Button type="submit"  color="error" ghost>
              ADD COURSE
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

  const res = await  fetch('http://localhost:3000/api/listCourses') 
  const coursesdata = await res.json()
  console.log("order output");
  var courses = coursesdata;
  console.log(courses);


  console.log("getting data from session..");
  console.log(req.session.username.username);

    return {
      props: {
        data: req.session.username.username,
        courses: courses,
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