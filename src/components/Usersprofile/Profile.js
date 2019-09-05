import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import mob from '../../assets/images/Banner-images/Banner_Mob.jpg';
import '../Usersprofile/Profile.css';
import Personal from './Personalinfo';
import Manage from './Manageinfo';
import Pan from './Pandetails'
import Rate from './Rating'
import Allnote from './AllNote'

      

export  function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  
  

  return (
    <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box p={5}>{children}</Box>
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height:'auto'  ,
    width:'auto'
  },
 
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  


  return (




    <div className="container1 pb-3">
        <div className={classes.root}>
            <div className="row" style={{ backgroundColor:'#f1f3f6' }}>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4   mb-3 w-75">
                  <div className="col-lg-12 bg-white shadow">
                    <p className="text-center"> <i className="fa fa-user-circle-o fa-2x  text-warning"></i>HELLO</p> 
           
                      <Tabs
                          orientation="vertical"
                          variant=""
                          value={value}
                          onChange={handleChange}
                          aria-label="Vertical tabs example"
                          className={classes.tabs} 
                          >
                          <span className="fa fa-cart text-muted ml-4"> <a hrfe="#"> MY ORDER <i class="fas fa-angle-right float-right"> </i></a></span>
                            <div className="bor"></div>
                          <span className="text-muted text-center"> <i class="fas fa-user  float-left text-primary pl-3"> </i> ACCOUNT SETTING </span>
                            <Tab label= "Profile information"  className="text-center tabfont" />
                            <Tab label="Manage Addresss"  className="text-center tabfont" />
                             <Tab label=" Pan information"  className="text-center tabfont" />
                          <div className="bor"></div>
                          <span className="text-muted text-center"> <i class="fas fa-folder  float-left text-primary pl-3"> </i> MY STUFF</span>
                            <Tab label="My Reviews and rating"  className="text-center tabfont" />
                            <Tab label="All Notification"  className="text-center tabfont" />
                          <div className="bor"></div>
                                       <a href="#" className="text-center"><span className="text-muted "> <i class="fas fa-power-off float-left text-primary pl-3"> </i> LOGOUT</span></a>
                            <div className="bor"></div>
                      </Tabs>
                  </div>
              </div>




                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <div className="col-lg-12 bg-white shadow">
                  <TabPanel value={value} index={0}>
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <Personal />
                                  </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  
                                </div>
                          </div>
                        </div>
                      </TabPanel>

                      <TabPanel value={value} index={3}>
                      <div className="container w-100">
                              <div className="row ">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                     <Personal />
                                  </div>
                              </div>
                          </div>
                      </TabPanel>
                      <TabPanel value={value} index={4}>
                        <div className="container w-100">
                              <div className="row ">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                     <Manage />
                                  </div>
                                  <div className="col-lg-6 hide ">
                                      <img src={mob} alt=""  className="img-fluid imgsetting1 mt-4"/>
                                  </div>
                              </div>
                          </div>
                      </TabPanel>
                      <TabPanel value={value} index={5}>
                        <div className="container">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                     <Pan  />
                                  </div>
                                  <div className="col-lg-6 hide ">
                                      <img src={mob} alt=""  className="img-fluid imgsetting1 mt-4"/>
                                  </div>
                             </div>
                        </div>
                      </TabPanel>
                      <TabPanel value={value} index={8}>
                          <div className="container">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                     <Rate />
                                  </div>
                                  <div className="col-lg-6 hide ">
                                      <img src={mob} alt=""  className="img-fluid imgsetting1 mt-4"/>
                                  </div>
                             </div>
                        </div>
                      </TabPanel>
                      <TabPanel value={value} index={9}>
                      <div className="container">
                              <div className="row">
                                 <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                     <Allnote />
                                  </div>
                                  <div className="col-lg-6 hide ">
                                      <img src={mob} alt=""  className="img-fluid imgsetting1 mt-4"/>
                                  </div>
                             </div>
                        </div>
                      </TabPanel>
                  </div>
                </div>
            </div>
        </div>  
    </div>
  );
}
