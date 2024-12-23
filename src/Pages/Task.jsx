import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { Box,Button,TextField,Typography,Alert,Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Navbar from "../components/Navbar";


const Task = () => {
  const [tasks, setTasks] = useState([
    { id: "1", name: "Build Login Authentication", description: "Implement a secure login and registration system" },
    { id: "2", name: "API Integration", description: " Integrate the application with a third-party API" },
    { id: "3", name: "Frontend Optimization", description: "Optimize the loading speed of the web app" },
    { id: "4", name: "Database Migration", description: "Migrate the existing database schema"},
    { id: "5", name: "Implement Dark Mode", description: "Add a toggle for users to switch between light and dark mode" },
  ]);

  const [rankedTasks, setRankedTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", description: "" });

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const addNewTask = () => {
    if (newTask.name && newTask.description) {
      setTasks((prev) => [
        ...prev,
        { id: (prev.length + 1).toString(), ...newTask },
      ]);
      setNewTask({ name: "", description: "" });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (over && over.id === "card-2") {
      const draggedTask = tasks.find((task) => task.id === active.id);
      if (draggedTask) {
        setTasks((prev) => prev.filter((task) => task.id !== active.id));
        setRankedTasks((prev) => [
          ...prev,
          { ...draggedTask, rank: prev.length + 1 },
        ]);
      }
    }
  };

  const TaskItem = ({ task }) => {
    const { attributes, listeners, setNodeRef } = useDraggable({
      id: task.id,
    });

    return (
        // <Tooltip title="Drag for ranking" placement="right">
      <Box
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        sx={{
          marginBottom: "5px",
          background: "#fff",
          cursor:'pointer',
          height:'auto',
          padding:'8px',
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          borderRadius:'10px'
        }}
      >
        <Box sx={{
            width:'50px',
            height:'50px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'10px',
            backgroundColor:'#00A9F2'
        }}>
            <AssignmentIcon sx={{
                color:'white'
            }}/>
        </Box>
        <Box sx={{
            padding:'10px',
             display:'flex',
             flexDirection:'column',
             justifyContent:'center',
             alignItems:'flex-start'
        }}>
        <Typography variant="body1" sx={{
            color:'black'
            ,fontWeight:500
        }}>{task.name}</Typography>
        <Typography variant="body2" sx={{
            color:'gray',
        }}>{task.description}</Typography>
        </Box>
      </Box>
    //   </Tooltip>
    );
  };

  const DroppableArea = ({ id, children }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
      <Box
        ref={setNodeRef}
        style={{
          minHeight: "100px",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <>
    <Navbar/>
    <Box sx={{ padding: "20px",width:'100%',backgroundImage:'linear-gradient(to right, #fff,#00A9F2)', }}>
      <Box sx={{
            width:'100%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:'10px'
        }}>
        <Typography variant='h4' sx={{
            color:'#00A9F2',
            fontWeight:500
        }}>
            Tasks
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
              paddingRight:'15px',
              paddingLeft:'15px',
              fontSize:'15px'
        }}>
             Export
            <SimCardDownloadIcon sx={{
                marginLeft:'5px'
            }}/>
        </Button>
        </Box>
      <DndContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
        <Grid size={{
            md:6,
            xs:12
        }}>
            <Box sx={{ padding: "10px", width: "100%" ,marginBottom:'10px', backgroundImage:'linear-gradient(to bottom, #00A9F2,#00E2E0)',borderRadius:'10px' }}>
                  <Typography variant="h5" sx={{
                    color:'#fff',
                    textAlign:'center',
                    margin:'10px',
                    fontWeight:500,
                  }}>Un-ranked Tasks</Typography>
          <DroppableArea id="card-1">
            {tasks.map((task) => (
              <TaskItem   key={task.id} task={task} />
            ))}

          </DroppableArea>
          </Box>
          <Box sx={{ padding: "10px", width: "100%" , backgroundColor:'#fff',borderRadius:'10px' }}>
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'center',
            marginTop:'10px',
            gap:'10px'
          }}> 
            <TextField
            id="standard-basic" label="Title" variant="standard"
             sx={{
                width:'100%',
                border:'hidden',
                color:'#fff',
                padding:'5px'
            }}
              type="text"
              name="name"
              value={newTask.name}
              placeholder="Task Name"
              onChange={handleNewTaskChange}
            />
            <TextField
            id="standard-basic" label="Description" variant="standard"
            sx={{
                width:'100%',
                border:'hidden',
                color:'#fff',
                padding:'5px'
            }}
              type="text"
              name="description"
              value={newTask.description}
              placeholder="Task Description"
              onChange={handleNewTaskChange}
            />
            <Button sx={{
                backgroundColor:'#00A9F2',
                color:'#fff',
                width:'100%',
                '&:hover': {
                    backgroundColor: '#48BED9',
                    color: 'white',
                  },
            }} onClick={addNewTask}>Add Task</Button>
          </Box>
          </Box>
        </Grid>
        <Grid size={{
            md:6,
            xs:12
        }}>
            <Box sx={{ borderRadius:'10px', padding: "10px", width: "100%",backgroundColor:'#fff' }}>
          <Typography variant="h5" sx={{
            color:'#00A9F2',
            textAlign:'center',
            fontWeight:500,
            margin:'10px'
          }}>Ranked Tasks</Typography>
          <DroppableArea id="card-2">
          {rankedTasks.length === 0 ? (
          <Alert sx={{
            backgroundColor:'#00A9F2',
            color:'#fff'
          }} icon={<FeedbackIcon sx={{
            color:'#fff'
          }} fontSize="inherit" />} severity="success">
          No ranked tasks. Drag tasks here to organize them.
        </Alert>
           ):(
            rankedTasks.map((task) => (
              <Box
                key={task.id}
                sx={{
                  padding: "8px",
                  marginBottom: "5px",
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'flex-start',
                  justifyContent:'flex-start',
                  backgroundColor:'#00A9F2',
                  borderRadius:'8px',
                  position:'relative'
                }}
              >
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'5px',
                    position:'absolute',
                    top:'10px',
                    right:'10px',
                    padding:'5px',
                    borderRadius:'5px',
                    backgroundColor:'#fff'
                }}>
                <Typography sx={{
                  color:'#00A9F2',
                }}>
                    Rank : {task.rank} 
                </Typography>
                </Box>
                <Typography variant="body1" sx={{
                    color:'#fff',
                    width:'auto',
                    fontWeight:500
                }}>
                {task.name}
                </Typography>
                <Typography sx={{
                    color:'#fff'
                }}>{task.description}</Typography>
              </Box>
            ))
        )}
          </DroppableArea>
          </Box>
        </Grid>
        </Grid>
      </DndContext>
    </Box>
    </>
  );
};

export default Task;
