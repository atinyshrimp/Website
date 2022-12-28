import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      // aria-labelledby={`vertical-tab-${index}`}
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
  SNCF: {
    title: "Research Engineer Intern @",
    duration: "jun 2022 - aug. 2022",
    desc: [
      "a",
      "b",
      "c"
    ]
  },

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
    title: "Master's degree @",
    duration: "since Sept. 2020",
    desc: [
      "Soft Skills formation",
      "Yearly projects in accordance with the modules seen throughout the year",
      "Double degree with the Management school, EMLV (e.g. tab under 'ESILV')"
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
    title: "High School Diploma @",
    duration: "sept. 2017 - jun 2020",
    desc: [
      "Obtained with distinctions",
      "Class president in 11th & 12th year",
      "Série SVT",
      "Spécialité ISN (Informatique & Sciences du Numérique)"
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
      sx={{ flexGrow: 1, bgcolor: 'none', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
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
      sx={{ flexGrow: 1, bgcolor: 'none', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
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