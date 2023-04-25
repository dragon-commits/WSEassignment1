import { Table } from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { Card, Row, Text, Spacer } from "@nextui-org/react";
import { createTheme, NextUIProvider} from "@nextui-org/react"
import { Input } from '@nextui-org/react';
import { Button, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { withIronSessionSsr } from "iron-session/next";

export default function chat({data, getChats}) {

  const router = useRouter()

  async function handleSubmt(event) {

    event.preventDefault(); // block default behaviour

    //Get data from the form.
    const data = {
      username: event.target.username.value,
      comment: event.target.comment.value,
    }

    //Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/saveChat'

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
   
        // redirect based on the result
        router.push("/chat");
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
                COLLEGE MANAGEMENT CHAT SYSTEM
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
<Grid.Container gap={2} justify="center">
<Grid md={6}>
<Card>
  <Card.Body>
    <Text gap={1} h2 color="$colors$secondary" css={{ m: 0 }}>
      <Row justify="center" align="center" >              
        Chat Log
      </Row>
    </Text>
    <Table
      aria-label="Example table with static content"
      css={{height: "auto", minWidth: "100%",}}>

      <Table.Header>
        <Table.Column>Username:</Table.Column>
        <Table.Column>Message:</Table.Column>
      </Table.Header>

      <Table.Body>
        <Table.Row key="1">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>

        {
          getChats &&
          getChats.map((item, i) => (
          // print out the table from the JSON we got
          // from the API
        
          <Table.Row key="1">
            <Table.Cell>{item.username}</Table.Cell>
            <Table.Cell>{item.content}</Table.Cell>
          </Table.Row>
          ))     
        }
      </Table.Body>
    </Table>
  </Card.Body>
</Card>
</Grid>

<Grid xs={4}>
<Card css={{ h: "450px", $$cardColor: '#FFFFFF'}}>
  <Card.Body>
    <Text gap={1} h2 color="$colors$secondary" css={{ m: 0 }} align = 'center'>             
      Add Message
    </Text>
    <Spacer y={0.5}/>

    <Text css={{ m: 0 }} align='center'>
    <form onSubmit={handleSubmt}>
      Username: 
      <Spacer y={0.5}/>
      <Input readOnly id="username" bordered labelPlaceholder="" width="300px" initialValue={(data)}/>
      <Spacer y={1.6}/>

      Your Message: 
      <Spacer y={0.5}/>
      <Input id="comment" clearable bordered labelPlaceholder="" lenght="300px" width="300px" initialValue='' />
      <Spacer y={1.6}/>

        <Row justify="center" align="center">
      <Button type="submit" size="xl" width="300px" color="primary" >Send</Button>
      </Row>
    </form>
</Text>
  </Card.Body>
</Card>
</Grid>
</Grid.Container>
{/* ########## Bottom card #######*/}
  <Card css={{ width: '100%', h: "$26", $$cardColor: '$colors$secondary' }}>
    <Card.Body>
    <br></br>
      <Text h6 size={14} color="white" css={{ mt: 0 }} align="center">
        Designed by ___________________ © 2023
      </Text>
    </Card.Body>
  </Card>

</NextUIProvider>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req}) {

    const res = await  fetch('http://localhost:3000/api/getChats') 
    const getChats = await res.json()
    console.log("chatlog details");
    var chatlog = getChats;
    console.log(chatlog);

  console.log("getting data from session..");
  console.log(req.session.username.username);

    return {
      props: {
        data: req.session.username.username,
        getChats: getChats
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