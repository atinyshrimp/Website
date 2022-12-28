import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FadeInSection from './FadeInSection';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const professionalExp = {
  /* most recent to oldest */
  "Avenir APEI": {
    title: "Volunteer @",
    duration: "",
    desc: [
      "a",
      "b"
    ]
  },

  "Visages du Monde": {
    title: "Intern @",
    duration: "",
    desc: []
  }
  
};

const educationExp = {
  /* most to recent to oldest */
  ESILV: {
    title: "",
    duration: "",
    desc: [
      "a",
      "b"
    ]
  },
  
  EMLV: {
    title: "Master's degree @",
    duration: "since Sept. 2020",
    desc: [
      "a",
      "b"
    ]
  },

  "Lycée Jules Verne": {
    title: "",
    duration: "",
    desc: [
      "a",
      "b"
    ]
  }
};


export const ProfessionalList = () => {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var list = professionalExp;

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
          {Object.keys(list).map((key, i) => (
              <Tab label={key} {...a11yProps(i)} />
          ))}
      </Tabs>
      {Object.keys(list).map((key, i) => (
          <TabPanel value={value} index={i}>
              <span className='list-title'>
                  {list[key]["title"] + " "}
              </span>
              <span className='list-location'>{key}</span>
              <div className='list-duration'>
                  {list[key]["duration"]}
              </div>
              <ul className='description'>
                  {list[key]["desc"].map(function (descItem, i) {
                      return (
                        <li key={i}>{descItem}</li>
                      );
                  })}
              </ul>
          </TabPanel>
      ))}
    </Box>
  );
  
}

export const EducationList = () => {  
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  var list = educationExp;

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
          {Object.keys(list).map((key, i) => (
              <Tab label={key} {...a11yProps(i)} />
          ))}
      </Tabs>
      {Object.keys(list).map((key, i) => (
          <TabPanel value={value} index={i}>
              <span className='list-title'>
                  {list[key]["title"] + " "}
              </span>
              <span className='list-location'>{key}</span>
              <div className='list-duration'>
                  {list[key]["duration"]}
              </div>
              <ul className='description'>
                  {list[key]["desc"].map(function (descItem, i) {
                      return (
                        <li key={i}>{descItem}</li>
                      );
                  })}
              </ul>
          </TabPanel>
      ))}
    </Box>
  );
  
}