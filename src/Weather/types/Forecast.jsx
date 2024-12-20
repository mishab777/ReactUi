import { Typography, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
  const dayinaweek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayinaweek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinaweek));

  const [rows, setRows] = useState(
    data.list.slice(0, 7).map((item, idx) => ({
      id: idx, 
      day: forecastDays[idx],
      description: item.weather[0].description,
      temperature: `${Math.round(item.main.temp_min)}°C / ${Math.round(item.main.temp_max)}°C`,
    }))
  );

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "day", headerName: "Day", flex: 1 ,headerClassName: "custom-header"},
    { field: "description", headerName: "Description", flex: 1,headerClassName: "custom-header" },
    { field: "temperature", headerName: "Temperature", flex: 1,headerClassName: "custom-header" },
    {
      field: "actions",
      headerName: "Action",
      headerClassName: "custom-header",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => handleDelete(params.row.id)}
          size="small"
          sx={{
            backgroundColor:'#fff',
            color:'#E57373',
            fontWeight:400,
            textTransform:'none'
          }}
        >
          <DeleteIcon/>  
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 'auto', width: "100%" }}>
      <Typography
        variant="h5"
        sx={{
          color: "#06ABF2",
          marginBottom: "10px",
          fontWeight: 500,
        }}
      >
        Daily Forecast
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pagination={false}
        sx={{
            backgroundImage:'linear-gradient(to bottom, #00A9F2,#172D9D)',
          borderRadius: "10px",
          color:'#fff',
          "& .custom-header": {
            backgroundColor: "#48BED9", 
            color: "#fff", 
            fontWeight: "bold",
            fontSize: "1rem",
            border:'hidden'
          },
        }}
      />
    </Box>
  );
};

export default Forecast;
