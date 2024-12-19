import { Typography,Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const Forecast = ({data}) =>{
    const dayinaweek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayinaweek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinaweek));

console.log(forecastDays);
    return(
        <>
        <Typography variant="h5" sx={{
            color:'#3C3633',
            marginBottom:'10px'
        }}>Daily</Typography>
        <Box allowZeroExpanded sx={{
            width:'100%',
        }}>
                <Grid container spacing={2} >
                {data.list.splice(0, 7).map((item, idx) =>(
                <Grid size={{
                    md:12/7,
                    xs:12/2
                }} key={idx}>
                    <Box sx={{
                        width:'100%',
                        padding:'10px',
                        borderRadius:'10px',
                        backgroundColor:'#E0CCBE'
                    }}>
                        <Box className="daily-item">
                        <Typography variant="h6" sx={{
                            color:'#3C3633',
                        }}>{forecastDays[idx]}</Typography>
                        <Box className="desc2">
                        <Box component='img' sx={{
                            width:'60px',
                            height:'60px'
                        }} src={`icons/${item.weather[0].icon}.png`}></Box>
                        </Box>
                        <Box className="desc1">
                        <Typography variant="body1" sx={{
                            color:'#3C3633'
                        }}>{item.weather[0].description}</Typography>
                        <Typography variant="body1" sx={{
                            color:'#3C3633',
                            fontWeight:500
                        }}>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</Typography>
                        </Box>
                        </Box>
                    </Box>
                </Grid>
                ))}
                </Grid>
            

        </Box>
        
        
        
        </>


    )

}

export default Forecast;