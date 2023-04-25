import { NextUIProvider } from '@nextui-org/react';
import {useRouter} from 'next/router'
import { Card, Row, Text, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { createTheme} from "@nextui-org/react"
import { Image } from '@nextui-org/react';
import { withIronSessionSsr } from "iron-session/next";

export default function adminNav({data}) {

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

  const router = useRouter()

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
            <Text gap={1} h3 color="primary" css={{ m: 0 }}>
                <Row justify="center" align="center" >              
                    Hello {(data)}! 
                </Row>
            </Text>
    </Card.Body>
</Card>

{/* ########## End Top card #######*/}


{/* ########## Left card #######*/}
<Grid.Container gap={2} justify="center">
    <Grid xs={4}>
    <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
            <br></br>
            <Text h2 color="white" css={{ mt: 0 }} align="center">
            Manage Courses and Grades
            </Text>
            <Row justify="center" align="center">
              <Link href="/listAllCourses">
                <Button color="secondary" size="xl">VIEW COURSES</Button>
              </Link>
              </Row>
            </Card.Body>
          </Card>
    </Grid>
      
{/* ########## Middle card #######*/}
    <Grid xs={4}>
    <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
            <br></br>
            <Text h2 color="white" css={{ mt: 0 }} align="center">
            Manage Students
            </Text>
            <Row justify="center" align="center">
              <Link href="/listAllStudents">
                <Button color="secondary" size="xl">VIEW STUDENTS</Button>
              </Link>
              </Row>
            </Card.Body>
          </Card>
    </Grid>

{/* ########## Right card #######*/}
<Grid xs={4}>
    <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
            <br></br>
            <Text h2 color="white" css={{ mt: 0 }} align="center">
            Enter System Chat
            </Text>
            <Row justify="center" align="center">
              <Link href="/chat">
                <Button color="secondary" size="xl">CHAT</Button>
              </Link>
              </Row>
            </Card.Body>
          </Card>
          </Grid>

</Grid.Container>
    <Spacer y={0.5}/>

{/* ########## Bottom card 2 #######*/}
<Card css={{ width: '100%', h: "$24", $$cardColor: '$colors$secondary' }}>
    <Card.Body>
        <br></br>
            <Text h6 size={14} color="white" css={{ mt: 0 }} align="center">
            Designed by ___________________ © 2023
            </Text>
    </Card.Body>
</Card>
{/* ########## End Bottom card 2 #######*/}

    </NextUIProvider>
  )
}

export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req}) {

    console.log("getting data from session..");
    console.log(req.session.username.username);
  
      return {
        props: {
          data: req.session.username.username,
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