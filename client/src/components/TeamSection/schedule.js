import React from 'react';
import {Button} from '../Button/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function ScheduleSection() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div className='category-container hotel-container'>
        <div className="faq-title category-title ">
            2021 Game Schedule
        </div>
        <div className="hotel-text">
            <p>Select one of the following searches to find your team's games. Game times, location and opponents subject to change. Scores are posted as soon as available, but subject to change in the event of a review.
            </p>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Division:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Day:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Venue:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Team:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Club:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
        </div> 
        <div className="hotel-button"><Button buttonStyle='btn--outline-new'>See Games</Button></div>
        {/* <div className="hotel-text">
            <p style={{fontWeight:"bold"}}>When you click on the Hotel Booking button above, you will be redirected to a third-party hotel booking service and will no longer be on the official adidas Warrior Fall Classic web site. Any transactions conducted on that site are between you and the hotel booking service.</p>
        </div> */}
    </div>
  );
}

export default ScheduleSection;