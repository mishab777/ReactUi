import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Toolbar, Typography,TextField,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const data = [
  { value: 25,color:"#90c64a"},
  { value: 10,color:"#1976D2"},
  { value: 8,color:"#EE8EAE"},
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: "#fff",
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function Dashboard() {
  return (
    <Box
     sx={{
      width:'100%',
     backgroundImage:'linear-gradient(to right, #354E17, #000)',
     height:'auto',
     }}>
    <Box sx={{
      width: '100%',
      height: 'auto',
      display:{
        xs:'none',
        md:'flex',
      },
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Box sx={{
              padding:'20px',
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              gap:'10px'
      }}>
        <Typography sx={{
          fontSize:'25px',
          fontWeight:600,
          color:"white"
        }}>
          Dashboard
        </Typography>
        <Box sx={{
          backgroundColor: '#000',
          borderRadius:'30px',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          padding:'8px',
        }}>
          <SearchIcon sx={{
            color:'white'
          }}/>
          <TextField id="outlined-search" variant='standard' type="search"  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', 
      },
      '&:hover fieldset': {
        border: 'none', 
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-root': {
      outline: 'none', 
    },
    input: {
      border: 'none', 
      outline: 'none', 
      color:'white',
      fontSize:'14px'
    },
  }} placeholder='Type to search for...'/>
        </Box>
      </Box>
      <Box sx={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          padding:'20px',
          gap:'10px'
      }}>
         <Typography sx={{
          fontSize:'16px',
          color:"white",
          cursor:'pointer',
         }}>
          Download Report
        </Typography>
        <Button sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#90c64a',
            textTransform:'none',
            color:"#000",
            borderRadius:'30px',
            paddingRight:'10px',
            fontSize:'12px'
        }}>
          <InfoIcon sx={{
            marginRight:'5px'
          }}/>
          Ai Assistant
        </Button>
        </Box>
      </Box>  
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size={{xs:12,md:6}}>
          <Grid container spacing={1}>
      <Grid size={{xs:12,md:6}}>
        <Item sx={{
          background:'none',
          boxShadow:'none',
          gap:'10px'
        }}>     
           <Box sx={{
            borderRadius:'10px',
            width:{
              xs:'90%',
              md:'100%'
            },
        backgroundImage:'linear-gradient(to right bottom, #d7e9c1, #d7e9c1, #d7e9c1, #d7e9c1, #d7e9c1);',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingTop:'10px',
        paddingBottom:'10px',
        gap:'5px',
        paddingLeft:'20px',
        marginBottom:'10px',
        position:'relative'
      }}>
          <MiscellaneousServicesIcon sx={{
          position:'absolute',
          top:'20px',
          right:'20px',
          color:'#000'
        }}/>
        <Typography sx={{
          color:'black',
          fontWeight:600,
        }} variant='h5'>
          300
        </Typography>
        <Typography sx={{
          color:'black',
          textAlign:'start'
        }} variant='body1'>
          Total volume of services <br /> provided
        </Typography>
        <Typography sx={{
          color:'black',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          gap:'5px'
        }} variant='body1'>
          More Detail
          <ArrowOutwardIcon/>
        </Typography>
      </Box>
      <Box sx={{
            borderRadius:'10px',
            width:{
              xs:'90%',
              md:'100%'
            },
        backgroundColor:'#000',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingTop:'10px',
        paddingBottom:'10px',
        gap:'5px',
        paddingLeft:'20px',
        position:'relative'
      }}>
        <PeopleAltIcon sx={{
          position:'absolute',
          top:'20px',
          right:'20px',
          color:'#fff'
        }}/>
        <Typography sx={{
          color:'white',
          fontWeight:600,
        }} variant='h5'>
          75
        </Typography>
        <Typography sx={{
          color:'white',
          textAlign:'start'
        }} variant='body1'>
          No of new clients
        </Typography>
        <Typography sx={{
          color:'white',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          gap:'5px'
        }} variant='body1'>
          More Detail
          <ArrowOutwardIcon/>
        </Typography>
      </Box>
      </Item>
      </Grid>
      <Grid size={{xs:12,md:6}}>
        <Item sx={{
          background:'none',
          boxShadow:'none',
        }}>
        <Box sx={{
            borderRadius:'10px',
        width:{
          xs:'80%',
          md:'100%'
        },
        backgroundColor:'#000',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        padding:'20px',
        gap:'5px',
      }}>
        <Typography sx={{
          color:'white',
          fontWeight:400
        }} variant='h6'>
          Customer Satisfaction
        </Typography>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size.width,
          height: size.height,
        }}
      >
        <PieChart series={[{ data, innerRadius: 85 }]}>
          <PieCenterLabel>$19 530</PieCenterLabel>
        </PieChart>
      </Box>
      <Box sx={{
        width:'100%',
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
      }}>
      <Typography sx={{
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }} variant='body1'>
        <FiberManualRecordIcon sx={{
        color:'#90c64a'
      }}/>Promoters</Typography>
      <Typography sx={{
        color:'#fff',
      }} variant='body1'>
        75%
      </Typography>
      </Box>
      <Box sx={{
        width:'100%',
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
      }}>
      <Typography sx={{
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }} variant='body1'>
        <FiberManualRecordIcon sx={{
        color:'#1976D2'
      }}/>Detractors</Typography>
      <Typography sx={{
        color:'#fff',
      }} variant='body1'>
        15%
      </Typography>
      </Box>
      <Box sx={{
        width:'100%',
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
      }}>
      <Typography sx={{
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }} variant='body1'>
        <FiberManualRecordIcon sx={{
        color:'#EE8EAE'
      }}/>Passives</Typography>
      <Typography sx={{
        color:'#fff',
      }} variant='body1'>
        10%
      </Typography>
      </Box>
      <Button sx={{
        width:'100%',
        borderRadius:'10px',
        backgroundColor:'#424242',
        textTransform:'none',
        color:'white',
        marginTop:'5px'

      }}>More Detail<ArrowOutwardIcon/></Button>
      </Box>
        </Item>
      </Grid>
    </Grid>
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Item
          sx={{
            background:'none',
            boxShadow:'none'
          }}>
            <Box sx={{
              width:{
                xs:'90%',
                md:'100%'
              },
              backgroundColor:"#000",
              height:'100px',
              borderRadius:'10px'
            }}>

            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
      
    </Box>
  );
}
