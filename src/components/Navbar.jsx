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
import { useState } from 'react';
import { useNavigate,useLocation,Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo-t.png"


const settings = ['Profile', 'Account', 'Logout'];

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



  const location = useLocation(); 
  const currentPage = location.pathname;



  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };
  const handleCloseNavMenutask = () => {
    setAnchorElNav(null);
    navigate('/task')
  };
  const handleCloseNavMenuweather = () => {
    setAnchorElNav(null);
    navigate('/weather')
  };
  const handleCloseNavMenudashboard = () => {
    setAnchorElNav(null);
    navigate('/dashboard')
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate('/')
  };



  return (
    <AppBar position="static" sx={{
      backgroundImage:'linear-gradient(to right, #fff,#00A9F2)',
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
          onClick={handleCloseNavMenudashboard}
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex',alignItems: 'center',justifyContent: 'center' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#48BED9',
              textDecoration: 'none',
            }}
          >
            <Box src={logo} component="img" sx={{
                marginRight: '5px',
                width:'30px',
                height:'30px'
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
                <MenuItem onClick={handleCloseNavMenudashboard}>
                  <Typography sx={{ textAlign: 'center' }}>Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenutask}>
                  <Typography sx={{ textAlign: 'center' }}>Task</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenuweather}>
                  <Typography sx={{ textAlign: 'center' }}>Weather</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box src={logo} component="img" sx={{
            display: { xs: 'flex', md: 'none' },
            mr: 1,
                marginRight: '5px',
                width:'30px',
                height:'30px'
            }}/>
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
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Taskify
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems:'center',justifyContent:'center'} }}>
          <Box
      sx={{
        height: '50px',
        paddingRight: '10px',
        paddingLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '30px',
        marginTop: '10px',
        gap: '8px',
      }}
    >
      <Button
        component={Link}
        to="/dashboard"
        sx={{
          textTransform: 'none',
          my: 2,
          color: currentPage === '/dashboard' ? '#fff' : '#48BED9',
          display: 'block',
          backgroundColor: currentPage === '/dashboard' ? '#48BED9' : '#black',
          fontSize: '14px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '30px',
        }}
      >
        Dashboard
      </Button>
      <Button
        component={Link}
        to="/task"
        sx={{
          textTransform: 'none',
          my: 2,
          color: currentPage === '/task' ? '#fff' : '#48BED9',
          display: 'block',
          backgroundColor: currentPage === '/task' ? '#48BED9' : '#black',
          fontSize: '14px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '20px',
        }}
      >
        Task
      </Button>
      <Button
        component={Link}
        to="/weather"
        sx={{
          textTransform: 'none',
          my: 2,
          color: currentPage === '/weather' ? '#fff' : '#48BED9',
          display: 'block',
          backgroundColor: currentPage === '/weather' ? '#48BED9' : '#black',
          fontSize: '14px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '20px',
        }}
      >
        Weather
      </Button>
      <Button
        component={Link}
        to=""
        sx={{
          textTransform: 'none',
          my: 2,
          color: currentPage === '/employee' ? '#fff' : '#48BED9',
          display: 'block',
          backgroundColor: currentPage === '/employee' ? '#48BED9' : '#black',
          fontSize: '14px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '20px',
        }}
      >
        Employee
      </Button>
      <Button
        component={Link}
        to=""
        sx={{
          textTransform: 'none',
          my: 2,
          color: currentPage === '/report' ? '#fff' : '#48BED9',
          display: 'block',
          backgroundColor: currentPage === '/report' ? '#48BED9' : '#black',
          fontSize: '14px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '20px',
        }}
      >
        Report
      </Button>
    </Box>
          </Box>
          <Box sx={{ flexGrow: 0 ,flexDirection:'row',display: 'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',cursor:'pointer',padding:'5px',borderRadius:'30px'}}>
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
                color:'#00A9F2',
                fontWeight:500,
                display:{
                    xs:'none',
                    md:'flex'
                }
            }}>
                Manuel Thomas
            </Typography>
            <Tooltip title="Open settings">
                <KeyboardArrowDownIcon sx={{
                  color:'#00A9F2',
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
