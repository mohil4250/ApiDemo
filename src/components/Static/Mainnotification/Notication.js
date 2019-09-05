import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Appnotification1 from './AppNotification';
import './Notifacation.css';
import mob5 from '../../../assets/images/Banner-images/notification.png';

export function ControlledExpansionPanels() {
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
    height: 'auto',
    width: 'auto'
  },

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="container1 pb-3 mt-3">
      <div className={classes.root}>
        <div className="row" style={{ backgroundColor: '#f1f3f6' }}>
          <div className="col-md-4 col-lg-4 col-sm-4 col-4  mb-3 w-75">
            <div className="col-lg-12 bg-white shadow">
              <label className="mt-3 ml-3"> <i className="fa fa-bell text-primary "></i>NOTIFICATION PREFERENCES</label>
              <Tabs
                orientation="vertical"
                variant=""
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab label="Desktop Notificaton" />
                <Tab label="App-Nottification" />
                <Tab label=" Sms" />
                <Tab label="Email" />
              </Tabs>
            </div>
          </div>

          <div className=" col-lg-8 col-md-8 col-sm-8 col-8 p-0">
            <div className="col-lg-12 p-0 bg-white shadow">
              <TabPanel value={value} index={0}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4> Desktop Notification </h4>
                      <span > <small>Get notifications from Goldenzon on your Desktop</small></span><br /><br />

                      <input type="checkbox" checked disabled className="pl-2" />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />

                      <input type="checkbox" checked disabled />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />

                      <input type="checkbox" checked disabled />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />

                      <input type="checkbox" checked disabled />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />

                      <input type="checkbox" checked disabled />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />

                      <input type="checkbox" checked disabled />my order<br />
                      <span disabled>Latest updates on your order</span>   <i className="fa fa-angle-down fa-set float-right"></i>
                      <div className="border-b"></div><br /><br />
                    </div>
                    <div className="col-lg-6">
                      <img src={mob5} alt="" className="img-fluid imgsetting1 mt-4" />
                      <span className="text-danger pt-3 notesize"> Oops! You are missing out on a lot of important notifications. Please switch it on from Browser Settings. How to Unblock</span>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className="container p-0">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 p-0">
                      <h4>In-App Notification </h4>
                      <small> Receive alerts ONLY on your Goldenzon App</small> <br /><br />
                      <Appnotification1 />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img src={mob5} alt="" className="img-fluid imgsetting1 mt-4" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h4>SMS </h4>
                      <span><small>Get instant messages on your Goldenzon registered phone number </small></span>
                      <Appnotification1 />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <img src={mob5} alt="" className="img-fluid imgsetting1 mt-4" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h4> Email </h4>
                      <span> <small>There is no email id Linked to this account </small></span>
                    </div>
                    <div className="col-lg-6 hide ">
                      <img src={mob5} alt="" className="img-fluid imgsetting1 mt-4" />
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
