import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
var data = ['About the Tournament',
'Join the Mailing List',
'Frequently Asked Questions',
'Apply to the Tournament',
'Find a Hotel',
'Email Us',
"Field Maps/Area Maps",
"Tournament Rules",
"Sponsors"]

export default function TemporaryDrawer({open, close}) {

 

  const list = (anchor) => (
    <Box
      role="presentation"
    >
      <List>
            <ListItem key={1}>
                <ListItemText primary={"2021 SCHEDULES AND TEAMS"} />
            </ListItem>
            <Divider />
                <Box sx={{ minWidth: 120, margin:2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">2021 Games</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                </Box>
            <ListItem style={{display:"flex",justifyContent:"center"}}>
                <Button variant="outlined">See Games</Button>
            </ListItem>
            <Divider />
                <Box sx={{ minWidth: 120, margin:2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">2021 Teams</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                </Box>
            <ListItem style={{display:"flex",justifyContent:"center"}}>
                <Button variant="outlined">See Teams</Button>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText primary={"FAST FIND"} />
            </ListItem>
            <Divider />
            <List>
            {data.map(item=>(
                <ListItem button style={{paddingLeft:50}}>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
            </List>

      </List>
    </Box>
  );

  return (
    <div>
      
          <Drawer
            open={open}
            onClose={()=>close(false)}
          >
            {list()}
          </Drawer>
      
    </div>
  );
}

