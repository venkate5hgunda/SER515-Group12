import React from 'react';
import './refereesection.css'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const states = [{label: "AK",
value: "anything2"}, {label: "AL",
value: "anything2"}, {label: "AR",
value: "anything2"}, {label: "AZ",
value: "anything2"}];

const nwProvider = [{label: "AT&T",
value: "anything2"}, {label: "Sprint",
value: "anything2"}, {label: "Verizon",
value: "anything2"}, {label: "Google Fi",
value: "anything2"}];

const refereeGrade = [{label: "1",
value: "anything2"}, {label: "2",
value: "anything2"}, {label: "3",
value: "anything2"}, {label: "4",
value: "anything2"}, {label: "4",
value: "anything2"}, {label: "5",
value: "anything2"}, {label: "6",
value: "anything2"}, {label: "7",
value: "anything2"}, {label: "8",
value: "anything2"}, {label: "9",
value: "anything2"}, {label: "10",
value: "anything2"}, {label: "11",
value: "anything2"}, {label: "12",
value: "anything2"}, {label: "13",
value: "anything2"}, {label: "14",
value: "anything2"}, {label: "15",
value: "anything2"}, {label: "16",
value: "anything2"}, {label: "None",
value: "anything2"}];

const preferredLocation = [{label: "CLD - CLD - Thomas Cloud Park",
value: "anything2"}, {label: "WSC - WSC - Warrior Soccer Complex",
value: "anything2"}];

const comfortLevel = [{label: "High",
value: "anything2"}, {label: "Low",
value: "anything2"}];

const gender = [{label: "Boy",
value: "anything2"}, {label: "Girl",
value: "anything2"}, {label: "Men",
value: "anything2"}, {label: "Woman",
value: "anything2"}];

const age = [{label: "AT&T",
value: "anything2"}, {label: "U08",
value: "anything2"}, {label: "U09",
value: "anything2"}, {label: "U10",
value: "anything2"}, {label: "U11",
value: "anything2"}, {label: "U12",
value: "anything2"}, {label: "U13",
value: "anything2"}, {label: "U14",
value: "anything2"}, {label: "U15",
value: "anything2"}, {label: "U16",
value: "anything2"}, {label: "U17",
value: "anything2"}, {label: "U18",
value: "anything2"}, {label: "U19",
value: "anything2"}, {label: "Amateur",
value: "anything2"}];

function RefereeSection() {
   
  return (
    <div className='referee-container'>
      <h2 className='form'>
          2022 Referee Application
      </h2>
      <p className='form'>
          If there are questions please email using the Warrior Classic website.</p>
        <p className='form'>Thanks,<br></br>Ken and Mike<br></br>Fields marked with a (*) are required. The form will NOT be accepted on-line with these blank. Thank you.</p>
        <h3>
            Personal Information
        </h3>
        <div className = "form">
        <TextField text-align = "center" disabled id="filled-basic" label="USSF Number" variant="filled" />
        <span>&nbsp;</span>
        <TextField size = "small" text-align = "center" id="outlined-basic" label="" variant="outlined" />
        <span>
          __
        </span>
        <TextField size = "small" text-align = "center" id="outlined-basic" label="" variant="outlined" />
        <span>
          __
        </span>
        <TextField size = "small" text-align = "center" id="outlined-basic" label="" variant="outlined" />
        <span>
          __
        </span>
        <TextField size = "small" text-align = "Center" id="outlined-basic" label="" variant="outlined" />
        <Checkbox style = {{marginLeft: 210}}/>
        <span>
            USSF number not issued
        </span>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*Name" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField required id="outlined-required" label="First Name" defaultValue=""/>
        <TextField required id="outlined-required" label="Last Name" defaultValue=""/>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*Address" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*City/State/Zip" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your state"
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField required id="outlined-required" label="Required" 
        defaultValue=""/>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*Primary Email Address" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField required id="outlined-required" label="Required" 
        defaultValue="Please verify if your email address is correct at this time. This is the address you will receive formal communications on."/>
        </div>
        <div className = "form"> 
        <TextField disabled id="filled-basic" label="*Wireless Phone" variant="filled" />
        <span style = {{fontSize: '200%'}}>&nbsp;&nbsp;(</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        <span style = {{fontSize: '200%'}}>)&nbsp;</span>
        <TextField required style = {{width: 150}}id="outlined-required" label="Required" defaultValue=""/>
        <span style = {{fontSize: '200%'}}>-</span>
        <TextField style = {{width: 180}}required id="outlined-required" label="Required" defaultValue=""/>
        <span>&nbsp;</span>
        <TextField style = {{width: 270}}
          id="outlined-select-wireless-phone"
          select
          label="Select"
          value="Random"
          helperText="Please select your wireless phone"
        >
          {nwProvider.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*Phone" variant="filled" />
        <span style = {{fontSize: '200%'}}>&nbsp;&nbsp;(</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        <span style = {{fontSize: '200%'}}>)&nbsp;</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        <span style = {{fontSize: '200%'}}>-</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        </div>
        <h3>
            Experience and availability
        </h3>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Referee Grade" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          id="outlined-select-referee-grade"
          select
          label="Select"
          value="Random"
          helperText="Please select your referee grade"
        >
          {refereeGrade.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Years At:" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Checkbox/>
        <span>
            2021
        </span>
        <Checkbox/>
        <span>
            2020
        </span>
        <Checkbox/>
        <span>
            2019
        </span>
        <Checkbox/>
        <span>
            2018
        </span>
        <Checkbox/>
        <span>
            2017
        </span>
        </div>
        <div className = "form">
        <TextField disabled style = {{width: 224}} id="filled-basic" label="No of Yrs as USSF Referee" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField id="outlined-basic" label="" variant="outlined" />
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="*Age" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField required id="outlined-required" label="Required" defaultValue=""/>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Preferred Location" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
        style = {{width: 350}}
          id="outlined-preferred-location"
          select
          label="Select"
          value="Random"
          helperText="Choose your preferred location"
        >
        {preferredLocation.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Days Available(check all that apply)" variant="filled" />
        </div>
        <div className = "form">
        <TextField disabled style = {{height:30}} id="filled-basic" label="" variant="filled" />
        <span>&nbsp;&nbsp;</span>
        <Checkbox/>
        <span>
        Only available if a hotel room is available <br/>
        </span>
        <span style = {{marginLeft: 240}}>
          By checking, you are informing the adidas Warrior Memorial Day Classic that your availability is dependent on being issued a <br/>
        </span>
        <span style = {{marginLeft: 240}}>
        hotel room. Regardless, checking this box does not obligate the adidas Warrior Memorial Day Classic to issue you a hotel room.
        </span>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Comfort Levels" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          style = {{width: 100}}
          id="outlined-select-for-boys"
          select
          label="Select"
          value="Random"
          helperText="Boys:"
        >
          {comfortLevel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          style = {{width: 100}}
          id="outlined-select-currency"
          select
          label="Select"
          value="Random"
          helperText="Girls:"
        >
          {comfortLevel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          style = {{width: 100}}
          id="outlined-select-currency"
          select
          label="Select"
          value="Random"
          helperText="Amateurs:"
        >
          {comfortLevel.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Profile" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          style = {{width: 600}}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
        />
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Crew" variant="filled" />
        <span>&nbsp;&nbsp;</span>
        <Checkbox />
        <span>
        I am interested in being assigned to a crew<br/>
        </span>
        <TextField style = {{marginLeft: 240, width: 500}}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={3}
        />
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Shirt Size" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          id="outlined-select-currency"
          select
          style = {{width: 300}}
          label="Select"
          value="Random"
          helperText="Select Shirt Size"
        ></TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="" variant="filled" />
        <span>&nbsp;&nbsp;</span>
        <Checkbox />
        <span>
        I am NOT traveling with a team.<br/>
        </span>
        <span style = {{marginLeft: 240}}>
        (If you check this box, skip this section and submit the form.)
        </span>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Team Name" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField id="outlined-basic" label="" variant="outlined" />
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Gender/Age" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField
          id="outlined-select-gender"
          select
          style = {{width: 150}}
          label="Select"
          value="Random"
          helperText="Select Gender"
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <TextField
          id="outlined-select-age"
          select
          style = {{width: 150}}
          label="Select"
          value="Random"
          helperText="Select Age"
        >
          {age.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className = "form">
        <TextField disabled id="filled-basic" label="Team No" variant="filled" />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <TextField id="outlined-basic" label="" variant="outlined" />
        <br/>
        <span style = {{marginLeft: 240}}>
        (Fill in this field ONLY if you have registered a team using the on-line form and you know the team number.)
        </span>
        </div>
        <div className = "form-container">
        <Stack spacing={2} direction="row">
        <Button variant="contained">Submit Application</Button>
        </Stack>
        </div>
    </div>
  );
}

export default RefereeSection