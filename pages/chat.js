import { Grid, Card } from "@nextui-org/react";
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import { createTheme, NextUIProvider, Text} from "@nextui-org/react"
import { Spacer } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { useRouter } from 'next/router'



export default function chat() {

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
   
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        //const result = await response.json()
        //alert("respone from server " + result);

        
  
  }


/**************** CUSTOM THEME ********************/
const myCustomTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

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

async function callChatpage(){

  // Form the request for sending data to the server.
const options = {
  // The method is POST because we are sending data.
  method: 'GET',
  // Tell the server we're sending JSON.
  headers: {
    'Content-Type': 'application/json',
  },
  // Body of the request is the JSON data we created above.
  body: '',
}        

// Send the form data to our forms API on Vercel and get a response.
const response = await fetch('api/getChats', options)

// Get the response data from server as JSON.
// If server returns the name submitted, that means the form works.
const result = await response.json()

// stick the response in the chat window
console.log("chat page result: " + result);

document.getElementById('chatlog').value = result;

}

// run the inerval hook

setInterval(() => {
  console.log('Internal triggered');

  callChatpage();

// end interval hook
}, 1000);

      return (
        <NextUIProvider theme={myCustomTheme}>

{/*Logo to appear at the top in the center */}
      <image
        width={320}
        height={180}
        src="logo.jpg"
        alt="Default Image"
        />

{/* ########## Top card #######*/}

<Card css={{ width: '100%', h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Top
                </Text>
            </Card.Body>
          </Card>

{/* ########## End Top card #######*/}

{/* ########## Middle card #######*/}

<Card css={{ h: "500px", $$cardColor: '#FFFFFF' }}>
            <Card.Body>
<Textarea
label="Chat Log"
placeholder=""
id="chatlog"
/>

<Spacer y={1.6} />


<form onSubmit={handleSubmt}>
            Username: 
            <Input id="username" clearable bordered labelPlaceholder="" width="300px" initialValue=''/>
            <Spacer y={1.6}/>
            Your Message: 
            <Input id="comment" clearable bordered labelPlaceholder="" width="300px" initialValue='' />
            <Spacer y={1.6}/>

            <Button type="submit" size="xs" width="300px" color="secondary" >Send</Button>
            <Spacer y={0.5}/>
            </form>



  </Card.Body>
</Card>

{/* ########## Bottom card #######*/}
      <Card css={{ width: '100%', h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Bottom
              </Text>
            </Card.Body>
          </Card>


   
    </NextUIProvider>

  )
}


/*export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const data = await res.json()
    
    console.log(data);
 
  
    return {
      props: {data}, // will be passed to the page component as props
    };
  }*/