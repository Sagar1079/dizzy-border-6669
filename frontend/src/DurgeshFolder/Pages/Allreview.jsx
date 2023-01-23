import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { Box  , Heading, Image , Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'

const Allreview = () => {
  return (
    <Box>
        <Navbar />
        {/*  Whole code after navbar ------------------------------ */}
        <Box className="SingleProductMainDiv"  background="#f1f3f6"  style={{border:"1px   green" , height:"100vh" , }}>

        <Box className='SingleProductMain' height="100vh" width="90%" ml="auto" mr="auto" mt="10px"  shadow="lg"  background='#ffffff' display="flex"  >
         
         {/*  Image box ------------------- */}
           <Box border="2px solid red" width="35%" height="80vh" p="20px">

            <Image src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/u/g/g/9-2008-black-green-9-sfr-black-original-imagh9kvzs47gur2.jpeg?q=70" alt="productImage" boxSize="400px"   />
              
             {/*  about category ------- */}
             <Heading fontSize="17px" fontWeight="600" mt="5px" color="#303030" textAlign="left">Carbonn Cloth</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis, laborum quaerat facilis illum praesentium aut obcaecati. Ad, recusandae autem.</Text> 
            {/* category end------------------- */}

           {/*  Price is here ----------- */}
            <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">$200</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">$300</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({100}% off)</Text>
          </Box>
          {/* Price end ----------------- */}
            
            {/* approved---------- */}
            <Box display="flex" justifyContent="space-between" border="1px  red" width={{base:"100%", sm: "90%", md: "70%", lg: "60%",xl: "50%",'2xl': "50%"}}>
              <Text mb="15px" textAlign="left" fontSize="16px"><CheckCircleIcon color="#878787" mr="5px" fontSize="14px" />Certified Seller</Text>
    
             
              </Box>
           
            
             </Box>

           {/* Rating Box----------------- */}
           <Box border="2px solid black" width="60%" height="60vh">
             <Heading fontWeight={500} fontSize="22px" p="20px" textAlign="left" borderBottom="1px solid #f0f0f0">Lorem ipsum dolor sit amet consectetur.</Heading>
             <Box p="20px"  >
               {/*  Rating image */}
               <Box border="1px solid #26a541">   
             <Text color="#ffffff" display="flex" alignItems="center" justifyContent="center" fontSize="22px"  borderRadius="20px" width="70px"   background="#26a541">2.4 <StarIcon fontSize="15px" ml="4px" color="#ffffff" /></Text> 
            

            <Box color="#8f8a8f" ><Text lineHeight="20px" fontWeight="600" fontSize="17px" ml="6px">4 ratings and 4 reviews</Text></Box>
           </Box>



             </Box>
           </Box>
          

       </Box>
         </Box>
    </Box>
  )
}

export  {Allreview}
