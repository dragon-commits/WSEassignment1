import { Table } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { Button, Grid } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react"
import { createTheme} from "@nextui-org/react"
import { Image } from '@nextui-org/react';
import { Card, Row, Text } from "@nextui-org/react";

export default function studentsGrades({data}) {

    // if we want to redirect the user
    const router = useRouter()

    // if we want to get a parameter from the URL such as
    // the ID.
    const {id} = router.query

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
                STUDENT {id} GRADES
            </Text>
        </Row>

{ /* ######################## BEGIN TABLE ######################*/}

<Table
  aria-label="Example table with static content"
  css={{
    height: "auto",
    minWidth: "100%",
  }}
>

  <Table.Header>
    <Table.Column>Grade ID</Table.Column>  
    <Table.Column>Student ID</Table.Column>
    <Table.Column>Course ID</Table.Column>
    <Table.Column>Grade</Table.Column>
    <Table.Column>Delete Grade</Table.Column>
  </Table.Header>

  <Table.Body >
    <Table.Row key="1">
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
          <Table.Cell>{item.sid} </Table.Cell>         
          <Table.Cell>{item.courseid} </Table.Cell>
          <Table.Cell>{item.grade} </Table.Cell>
          <Table.Cell>
          <Button color='error' type='button' onClick={(save) => deleteGrade(item.id)}>
                Delete Grade
                </Button>
          </Table.Cell>
         
        </Table.Row>
      ))
    }

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

  // Handle the submit for the form
  async function deleteGrade(gradeid) {
       
    alert("Are you sure you want to delete grade " +gradeid+ "?");
    
     // Get data from the form.
     const data = {
       gradeid: gradeid,
     }
 
     // Send the data to the server in JSON format.
     const JSONdata = JSON.stringify(data)
 
     // API endpoint where we send form data.
     const endpoint = '/api/deleteGrade'

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
     router.push("/studentsGrades?id="+id);
     alert("Grade Deleted!");
      // }
}
}

export async function getServerSideProps(context) {

  let id = context.query.id;
 // let courseid = context.query.id;
//console.log("current id " + id);

  const res = await fetch(`http://localhost:3000/api/getGrade?id=`+id);
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}