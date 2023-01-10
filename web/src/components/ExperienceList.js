import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@mui/material';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (!isHorizontal)
  {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        display='flex'
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-with-tab-${index}`}
      display='flex'
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  if (!isHorizontal)
  {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  } else {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  }
}

const professionalExp = {
  /* most recent to oldest */
  SNCF: {
    title: "Research Engineer Intern @",
    duration: "JUN 2022 - AUG 2022",
    desc: [
      "Made an inventory of the standards used by type of conductor",
      "Identified canceled standards and researched alternative standards",
      "Specified test types and sanctions for technical validation by type of conductor",
      "Synthesized (e.g.: Excel table) the standards and the technical validation tests by type of conductor",
      "Mapped out the gathered information in a Word document shared and used by the whole research section"
    ]
  },

  "Avenir APEI": {
    title: "Volunteer @",
    duration: "APR 2021",
    desc: [
      "70-hour volunteer work",
      "Acted as a holiday camp activity leader to mentally handicapped children during Easter holidays",
      "Welcomed the children and their parents in the morning & sent them away in the evening",
      "Supervised the different activities carried out during the day"
    ]
  },

  "Visages du Monde": {
    title: "Intern @",
    duration: "NOV 2016 - DEC 2016",
    desc: [
      "Greeted visitors of the media library",
      "Informed visitors about the operation of the media library",
      "Put away the medias in their respective storage",
      "Redacted an article for the media library's website"
    ]
  }
  
};

const educationExp = {
  /* most to recent to oldest */
  ESILV: {
    title: "Master's degree in Engineering @",
    duration: "SEPT 2020 - NOW",
    desc: [
      "Following a continuous Soft Skills formation",
      "Yearly projects in accordance with the modules seen throughout the year",
      "Completing a double degree with the Management school, EMLV (e.g. tab under 'ESILV')"
    ]
  },
  
  EMLV: {
    /* International Business, Digital HR, Corporate Finance or Finance & Investment */
    title: "Master's degree @",
    duration: "SEPT 2020 - NOW",
    desc: [
      "Followed courses in Accounting, Fundamental Marketing, Corporate Strategy and Supply Chain Management",
      "Following courses in Entrepreneurship and International & European Law"
    ]
  },

  "Lycée Jules Verne": {
    title: "High School Diploma @",
    duration: "SEPT 2017 - JUN 2020",
    desc: [
      "Obtained with distinctions",
      "Class representative in 11th & 12th year",
      "Baccaulauréat S-SVT (Science stream, biology focus)",
      "Chose Computer Science & Digital Sciences (ISN) specialty in 12th grade"
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
    <Box id="expBox">
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', float: 'left', '& .MuiTabs-indicator': {backgroundColor: '#A499BE'} }}
      >
          {Object.keys(list).map((key, i) => (
              <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
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
    <div id="expBox">
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider', float: 'left', '& .MuiTabs-indicator': {backgroundColor: '#A499BE'} }}
      >
          {Object.keys(list).map((key, i) => (
              <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
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
    </div>
  );
  
}