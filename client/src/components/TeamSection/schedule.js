import React from 'react';
import {Button} from '../Button/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

var boysDivisions = {
    1: "Boys U08 DOB2014 7 v7",
    2: "Boys U09 DOB2013 7 v7",
    3: "Boys U10 DOB2012 7 v7",
    4: "Boys U10 DOB2012 9 v9",
    5: "Boys U11 DOB2011 9 v9",
    6: "Boys U12 DOB2010 9 v9",
    7: "Boys U12 DOB2010 11 v11",
    8: "Boys U13 DOB2009 11 v11",
    9: "Boys U14 DOB2008 11 v11",
    10: "Boys U15 DOB2007 11 v11",
    11: "Boys U16 DOB2006 11 v11",
    12: "Boys U17 DOB2005 11 v11",
    13: "Boys U18 DOB2004 11 v11",
    14: "Boys U19 DOB2003 11 v11",
}

var girlsDivisions = {
    15: "Girls U08 DOB2014 7 v7",
    16: "Girls U09 DOB2013 7 v7",
    17: "Girls U10 DOB2012 7 v7",
    18: "Girls U10 DOB2012 9 v9",
    19: "Girls U11 DOB2011 9 v9",
    20: "Girls U12 DOB2010 9 v9",
    21: "Girls U12 DOB2010 11 v11",
    22: "Girls U13 DOB2009 11 v11",
    23: "Girls U14 DOB2008 11 v11",
    24: "Girls U15 DOB2007 11 v11",
    25: "Girls U16 DOB2006 11 v11",
    26: "Girls U17 DOB2005 11 v11",
    27: "Girls U18 DOB2004 11 v11",
    28: "Girls U19 DOB2003 11 v11"
}
var allFieldsDummyInput = [{
    _id: "44242342341241",
    name: "Tempe Soccer FC (Field #1)"
},
{
    _id: "4424234234123",
    name: "Tempe Soccer FC (Field #3)"
},
{
    _id: "44242342341241213",
    name: "Phoenix Rising MLS FC (Field #9)"
},
{
    _id: "44242342341223",
    name: "Phoenix Rising MLS FC (Field #10)"
}
]
var allRefereesDummyInput = [{
    _id: "44242342341241",
    name: "Gonzalez"
},
{
    _id: "4424234234123",
    name: "Mark"
},
{
    _id: "44242342341241213",
    name: "Phillip"
},
{
    _id: "44242342341223",
    name: "Kevin"
}
]
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
        <div className="hotel-text" style={{textAlign:"center"}}>
            {/* <p>Select one of the following searches to find your team's games.
            </p> */}
                <Box sx={{ minWidth: 620, margin:2, display:'flex' }}>
                    <FormControl fullWidth style={{marginRight:2}}>
                        <InputLabel id="demo-simple-select-label">Search by Boys Division:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                            {Object.values(boysDivisions).map(item=>(
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        
                       
                        </Select>
                    </FormControl>
                    <FormControl fullWidth style={{marginLeft:2}}>
                        <InputLabel id="demo-simple-select-label">Search by Girls Division:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        {Object.values(girlsDivisions).map(item=>(
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Fields:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                        {allFieldsDummyInput.map(item=>(
                        <MenuItem value={item._id}>{item.name}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, margin:2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Search by Referees:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        >
                       
                        {allRefereesDummyInput.map(item=>( <MenuItem value={item._id}>{item.name}</MenuItem>))}
                        </Select>
                    </FormControl>
                </Box>
                
        </div> 
        {/* <div className="hotel-button"><Button buttonStyle='btn--outline-new'>See Games</Button></div> */}
        {/* <div className="hotel-text">
            <p style={{fontWeight:"bold"}}>When you click on the Hotel Booking button above, you will be redirected to a third-party hotel booking service and will no longer be on the official adidas Warrior Fall Classic web site. Any transactions conducted on that site are between you and the hotel booking service.</p>
        </div> */}
    </div>
  );
}

export default ScheduleSection;