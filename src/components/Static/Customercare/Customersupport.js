import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Maincustomer.css';
import Recent from './Recentorder'
import Non from './Nonorder'
import Shopping from './Shopping'
import Cancelation from './Cancelation'
import Payment from './Paymentoption'
import Order from './Order'
import Golden from './Goldenplus'




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
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 'auto',
    width: 'auto !important',
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
        <div className="row w-100" >
          <div className="col-lg-4 col-md-4 col-sm-4 col-4  ">
            <div className="col-lg-12 bg-white shadow">
              <label className="issue"> TYPES OF ISSUES</label>
              <Tabs
                orientation="vertical"
                variant=""
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >

                <Tab label="Recent Orders" />
                <Tab label="Non order Related" />
                <Tab label=" Current Issues" />
                <div className="line1"></div>
                <label className="issue">HELP TOPICS</label>
                <Tab label="Goldenzon plus" />
                <Tab label="order" />
                <Tab label="Payment" />
                <Tab label="Cancellation & Return" />
                <Tab label="Shopping" />
                <Tab label="Other" />
              </Tabs>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-8 ">
            <div className="col-lg-12 bg-white shadow p-0 m-0">
              <TabPanel value={value} index={0}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Recent />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Non />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* <Non /> */}
                      <h4>There is no current isssue</h4>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Non />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      < Golden />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Order />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={7}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Payment />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={8}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Cancelation />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={9}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <Shopping />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={10}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* <Non /> */}
                      <h4>There is no other issues</h4>
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
