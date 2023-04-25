import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Card, Row, Text, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react"

export default function Home({data}) {
  const router = useRouter()
  
  // Handle the submit for the form
  async function handleSubmt(event) {
  
       alert("The form was submitted");
       event.preventDefault();

       // grab the variables from the form.
       const username = document.querySelector('#username').value
       const pass = document.querySelector('#password').value

       console.log("username is " + username);
       console.log("password is " + pass);

        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/login'

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

        // redirect based on the result
        router.push("/adminNav");
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

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  
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
    </Card.Body>
</Card>

{/* ########## End Top card #######*/}

{/* ########## Left card #######*/}
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
      </Grid>

{/* ########## Middle card #######*/}
<Grid xs={4}>
      <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h1 size={30} color="white" css={{ mt: 0 }} align="center">
            LOGIN TO SYSTEM
            <br></br>
            <Spacer y={2}/>

            <form onSubmit={handleSubmt}>
            <Input id="username"
             shadow={false} 
             status="secondary" 
             clearable 
             bordered 
             labelPlaceholder="Username" 
             initialValue=""
             />
            <Spacer y={2}/>

            <Input.Password id="password"
             shadow={false} 
             status="secondary"
             type="password" 
             clearable 
             bordered 
             labelPlaceholder="Password" 
             initialValue=""
            />
            <Spacer y={2}/>

            <Row justify="center" align="center">
            <Button type="submit" color="secondary" >LOGIN</Button>
            </Row>
            <Spacer y={2}/>
            </form>

          </Text>
        </Card.Body>
      </Card>
      </Grid>

{/* ########## Right card #######*/}
<Grid xs={4}>
      </Grid>
    </Grid.Container>
    <Spacer y={0.5}/>

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