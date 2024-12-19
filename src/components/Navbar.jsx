import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const pages = ['Dashboard', 'Task', 'Weather'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const handleweather = ()=>{
    navigate('/weather')
  }
  const handletask = ()=>{
    navigate('/task')
  }

  return (
    <AppBar position="static" sx={{
        backgroundImage:'linear-gradient(to right, #fff,#d1d1d1)',
        boxShadow:'none',
        height: '80px'
    }}>
      <Container maxWidth="xl" sx={{
            boxShadow:'none'
        }}>
        <Toolbar sx={{
            boxShadow:'none'
        }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex',alignItems: 'center',justifyContent: 'center' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#3C3633',
              textDecoration: 'none',
            }}
          >
            <LineAxisIcon sx={{
                marginRight: '5px'
            }}/>
            Taskify
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#524433"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LineAxisIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,color:'#524433'}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#524433',
              textDecoration: 'none',
            }}
          >
            Taskify
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems:'center',justifyContent:'center'} }}>
            <Box sx={{
                height: '50px',
                paddingRight:'10px',
                paddingLeft:'10px',
                 display:'flex',
                 alignItems:'center',
                 justifyContent:'center',
                 backgroundColor:'#524433',
                 borderRadius:'30px',
                 marginTop:'10px',
                 gap:'8px'
            }}>
              <Button
                sx={{ textTransform: 'none', my: 2, color: 'black', display: 'block',backgroundColor: '#E0CCBE',fontSize: '14px',paddingRight: '12px',paddingLeft: '12px',borderRadius: '30px' }}
              >
                Dashboard     
              </Button>
              <Button onClick={handletask}
                sx={{ textTransform: 'none',my: 2, color: '#EEEDEB', display: 'block',backgroundColor: '#black',fontSize: '14px',paddingRight: '12px',paddingLeft: '12px',borderRadius: '20px' }}
              >
                Task     
              </Button>
              <Button onClick={handleweather}
                sx={{ textTransform: 'none',my: 2, color: '#EEEDEB', display: 'block',backgroundColor: '#black',fontSize: '14px',paddingRight: '12px',paddingLeft: '12px',borderRadius: '20px' }}
              >
                Weather     
              </Button>
              <Button
                sx={{ textTransform: 'none',my: 2, color: '#EEEDEB', display: 'block',backgroundColor: '#black',fontSize: '14px',paddingRight: '12px',paddingLeft: '12px',borderRadius: '20px' }}
              >
                Employee     
              </Button>
              <Button
                sx={{ textTransform: 'none',my: 2, color: '#EEEDEB', display: 'block',backgroundColor: '#black',fontSize: '14px',paddingRight: '12px',paddingLeft: '12px',borderRadius: '20px' }}
              >
                Report     
              </Button>
              </Box>
          </Box>
          <Box sx={{ flexGrow: 0 ,flexDirection:'row',display: 'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#524433',padding:'5px',borderRadius:'30px'}}>
            <Box
            component='img'
            src='https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg'
            sx={{
                height: '30px',
                width: '30px',
                objectFit: 'cover',
                borderRadius: '50%'
            }}
            />
            <Typography sx={{
                fontSize: '12px',
                marginLeft: '5px',
                color:'#EEEDEB',
                display:{
                    xs:'none',
                    md:'flex'
                }
            }}>
                Manuel Thomas
            </Typography>
            <Tooltip title="Open settings">
                <KeyboardArrowDownIcon sx={{
                  color:'#EEEDEB'
                }} onClick={handleOpenUserMenu}/>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
