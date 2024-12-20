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
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from '../Charts/Sales.js';
import { expenset, valueFormatterexpense } from '../Charts/Expenses.js';
import { AnimatePresence,motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';

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
  { value: 25,color:"#fff"},
  { value: 10,color:"#00DFE1"},
  { value: 8,color:"#777EFD"},
];

const size = {
  width: 300,
  height: 200,
};

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 600,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    [`.${axisClasses.left} .${axisClasses.axisLine}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.left} .${axisClasses.tick}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
      fill: '#fff', 
    },
    [`.${axisClasses.bottom} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    [`.${axisClasses.bottom} .${axisClasses.axisLine}`]: {
      stroke: '#fff', 
      strokeWidth: 2, 
    },
    [`.${axisClasses.bottom} .${axisClasses.tick}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.bottom} .${axisClasses.tickLabel}`]: {
      fill: '#fff', 
    },
  },
};

const chartSettingBar = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 600,
  height: 200,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    [`.${axisClasses.left} .${axisClasses.axisLine}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.left} .${axisClasses.tick}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
      fill: '#fff', 
    },
    [`.${axisClasses.bottom} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    [`.${axisClasses.bottom} .${axisClasses.axisLine}`]: {
      stroke: '#fff', 
      strokeWidth: 2, 
    },
    [`.${axisClasses.bottom} .${axisClasses.tick}`]: {
      stroke: '#fff', 
    },
    [`.${axisClasses.bottom} .${axisClasses.tickLabel}`]: {
      fill: '#fff', 
    },
  },
};

const StyledText = styled('text')(({ theme }) => ({
  fill: "#fff",
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 25,
  fontFamily:'"Outfit", serif;'
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const Totaldata ={
  Advertising:35,
  Development:25,
  Management:17,
  Sales:23
}

export default function Dashboard() {
  return (
    <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.5 }}
      >
    <Navbar/>
    <Box
     sx={{
      width:'100%',
     backgroundImage:'linear-gradient(to right, #fff,#00A9F2)',
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
          color:"#00A9F2"
        }}>
          Dashboard
        </Typography>
        <Box sx={{
          backgroundColor: '#fff',
          borderRadius:'30px',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          padding:'8px',
        }}>
          <SearchIcon sx={{
            color:'#00A9F2'
          }}/>
          <TextField variant='standard' type="search"  sx={{
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
      border: 'hidden', 
      outline: 'none', 
      color:'#00A9F2',
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
          color:"#fff",
          cursor:'pointer',
         }}>
          Download Report
        </Typography>
        <Button sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fff',
            textTransform:'none',
            color:"#00A9F2",
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
      <Grid container spacing={1} padding={2}>
        <Grid size={{xs:12,md:6}}>
          <Grid container spacing={1}>
      <Grid size={{xs:12,md:6}}>
    
           <Box sx={{
            borderRadius:'10px',
            width:{
              xs:'100%',
              md:'100%'
            },
        backgroundImage:'linear-gradient(to right, #00A9F2,#00E2E0)',
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
          color:'#EEEDEB'
        }}/>
        <Typography sx={{
          color:'#EEEDEB',
          fontWeight:600,
        }} variant='h5'>
          300
        </Typography>
        <Typography sx={{
          color:'#EEEDEB',
          textAlign:'start'
        }} variant='body1'>
          Total volume of services <br /> provided
        </Typography>
        <Typography sx={{
          color:'#EEEDEB',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          gap:'5px'
        }} variant='body1'>
          More Detail
          <ArrowOutwardIcon sx={{
            color:'#EEEDEB'
          }}/>
        </Typography>
      </Box>
      <Box sx={{
            borderRadius:'10px',
            width:{
              xs:'100%',
              md:'100%'
            },
        backgroundImage:'linear-gradient(to right, #787CFE,#48BED9)',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingTop:'10px',
        paddingBottom:'10px',
        gap:'5px',
        paddingLeft:'20px',
        position:'relative',
        marginBottom:'10px'
      }}>
        <PeopleAltIcon sx={{
          position:'absolute',
          top:'20px',
          right:'20px',
          color:'#fff'
        }}/>
        <Typography sx={{
          color:'#fff',
          fontWeight:600,
        }} variant='h5'>
          75
        </Typography>
        <Typography sx={{
          color:'#fff',
          textAlign:'start'
        }} variant='body1'>
          No of new clients
        </Typography>
        <Typography sx={{
          color:'#fff',
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
      <Grid container spacing={1} >
        <Grid size={{xs:6,md:6}}>
          <Box sx={{
            width:'100%',
            height:'auto',
            padding:'15px',
            backgroundImage:'linear-gradient(to right, #172D9D,#787CFE)',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'center',
            position:'relative'
          }}>
            <Typography color='white' variant='h6'>
            {Totaldata.Advertising}%
            </Typography>
            <Typography sx={{
              color:'#fff'
            }} variant='body2'>
              Advertising
            </Typography>
            <ArrowOutwardIcon sx={{
              color:'#fff',
              position:'absolute',
              top:'10px',
              right:'10px'
            }}/>
          </Box>
        </Grid>
        <Grid size={{xs:6,md:6}}>
        <Box sx={{
            width:'100%',
            height:'auto',
            padding:'15px',
            backgroundImage:'linear-gradient(to right, #172D9D,#787CFE)',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'center',
            position:'relative'
          }}>
            <Typography color='white' variant='h6'>
            {Totaldata.Development}%
            </Typography>
            <Typography sx={{
              color:'#fff'
            }} variant='body2'>
              Development
            </Typography>
            <ArrowOutwardIcon sx={{
              color:'#fff',
              position:'absolute',
              top:'10px',
              right:'10px'
            }}/>
          </Box>
        </Grid>
        <Grid size={{xs:6,md:6}}>
        <Box sx={{
            width:'100%',
            height:'auto',
            padding:'15px',
            backgroundImage:'linear-gradient(to right, #172D9D,#787CFE)',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'center',
            position:'relative'
          }}>
            <Typography color='white' variant='h6'>
            {Totaldata.Sales}%
            </Typography>
            <Typography sx={{
              color:'#fff'
            }} variant='body2'>
              Sales
            </Typography>
            <ArrowOutwardIcon sx={{
              color:'#fff',
              position:'absolute',
              top:'10px',
              right:'10px'
            }}/>
          </Box>
        </Grid>
        <Grid size={{xs:6,md:6}}>
        <Box sx={{
            width:'100%',
            height:'auto',
            padding:'15px',
            backgroundImage:'linear-gradient(to right, #172D9D,#787CFE)',
            borderRadius:'10px',
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'center',
            position:'relative'
          }}>
            <Typography color='white' variant='h6'>
              {Totaldata.Management}%
            </Typography>
            <Typography sx={{
              color:'#fff'
            }} variant='body2'>
              Management
            </Typography>
            <ArrowOutwardIcon sx={{
              color:'#fff',
              position:'absolute',
              top:'10px',
              right:'10px'
            }}/>
          </Box>
        </Grid>
      </Grid>
      </Grid>
      <Grid size={{xs:12,md:6}}>
        <Box sx={{
            borderRadius:'10px',
        width:{
          xs:'100%',
          md:'100%'
        },
        backgroundImage:'linear-gradient(to bottom, #00A9F2,#172D9D)',
        display:'flex',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        padding:'15px',
        gap:'5px',
      }}>
        <Typography sx={{
          color:'#fff',
          fontWeight:500
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
        <PieChart series={[{ data, innerRadius: 85,color:'#3C3633' }]}>
          <PieCenterLabel >$19 530</PieCenterLabel>
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
        color:'#fff',
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
        color:'#00DFE1'
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
        color:'#777EFD'
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
        backgroundColor:'#fff',
        textTransform:'none',
        color:'#00A9F2',
        marginTop:'5px'

      }}>More Detail<ArrowOutwardIcon/></Button>
      </Box>
      </Grid>
      <Grid size={{xs:12,md:12}}>
        <Box sx={{
          display:{
            xs:'none',
            md:'flex'
          },
          flexDirection:'column',
            width:'100%',
            backgroundImage:'linear-gradient(to right, #00A9F2,#00E2E0)',
            height:'auto',
            borderRadius:'10px',
            padding:'15px',
        }}>
          <Typography sx={{
          color:'white',
          fontWeight:400,
          textAlign:'start',
          marginBottom:'10px'
        }} variant='h6'>
          Operating Expenses
        </Typography>
        <Box sx={{
              width:'100%',
              backgroundImage:'linear-gradient(to right, #00A9F2,#00E2E0)',
              height:'auto',
              overflow:'hidden'
            }}>
              <BarChart
      dataset={expenset}
      xAxis={[{ scaleType: 'band', dataKey: 'source', }]}
      series={[
        { dataKey: 'data', valueFormatter,color:'#fff' },
      ]}
      {...chartSettingBar}
    />

              </Box>
        </Box>
      </Grid>
    </Grid>
        </Grid>
        <Grid size={{xs:12,md:6}}>
            <Box sx={{
              width:'100%',
              backgroundColor:"#fff",
              height:'auto',
              borderRadius:'10px',
              paddingLeft:'15px',
              paddingTop:'10px',
              paddingBottom:'10px',
              position:'relative',
              marginBottom:'10px'
            }}>
                 <Typography sx={{
          color:'#48BED9',
          fontWeight:500,
          textAlign:'start',
          marginBottom:'10px'
        }} variant='h6'>
          Coorperate Year Plan
        </Typography>
        <Grid container spacing={1}>
          <Grid size={{xs:12,md:7}}>
            <Box sx={{
              width:'100%',
              height:'auto',
              display:'flex',
              flexDirection:'column',
              alignItems:'flex-start',
              justifyContent:'center',
              paddingLeft:'10px',
              borderLeft:'1px solid #00A9F2'
            }}>
              <Typography sx={{
                color:'#00A9F2'
              }} variant='body2'>
                Current Result
              </Typography>
              <Typography sx={{
                color:'#00A9F2'
              }} variant='h6'>
                $52,654,450
              </Typography>
              <Box sx={{
                marginTop:'10px',
                backgroundImage:'linear-gradient(to right, #fff,#00A9F2)',
                width:'90%',
                height:'30px',
                borderRadius:'5px'
              }}>

              </Box>
            </Box>
          </Grid>
          <Grid size={{xs:12,md:5}}>
          <Box sx={{
              width:'100%',
              height:'auto',
              display:'flex',
              flexDirection:'column',
              alignItems:'flex-start',
              justifyContent:'center',
              paddingLeft:'10px',
              borderLeft:'1px solid #00A9F2',
            }}>
              <Typography sx={{
                color:'#00A9F2'
              }} variant='body2'>
                Left Pain
              </Typography>
              <Typography sx={{
                color:'#00A9F2'
              }} variant='h6'>
                $7,566,116
              </Typography>
              <Box sx={{
                marginTop:'10px',
                backgroundImage:'linear-gradient(to right, #fff,#00A9F2)',
                width:'90%',
                height:'30px',
                borderRadius:'5px'
              }}>

              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='body2' sx={{
                color:'#48BED9',
                position:'absolute',
                top:'10px',
                right:'10px',
              }}>
                More Detail <ArrowOutwardIcon sx={{
                  marginLeft:'5px',
                  fontSize:'15px'
                }}/>
              </Typography>
            </Box>
            <Box sx={{
                 display:{
                  xs:'none',
                  md:'flex'
                },
                flexDirection:'column',
              width:'100%',
              backgroundImage:'linear-gradient(to right, #48BED9,#00E2E0)',
              height:'auto',
              borderRadius:'10px',
              paddingLeft:'15px',
              paddingTop:'10px',
              paddingBottom:'10px',
              position:'relative'
            }}>
              <Typography sx={{
          color:'#fff',
          fontWeight:500,
          textAlign:'start',
          marginBottom:'10px'
        }} variant='h6'>
          Company Sales Target
              </Typography>
              <Box sx={{
              width:'100%',
              backgroundImage:'linear-gradient(to right, #48BED9,#00E2E0)',
              height:'auto',
            }}>
              <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month', }]}
      series={[
        { dataKey: 'sales', valueFormatter,color:'#fff' },
        
      ]}
      {...chartSetting}
    />

              </Box>
              </Box>
        </Grid>
      </Grid>
    </Box>
      
    </Box>
    </motion.div>
    </AnimatePresence>
    </>
  );
}
