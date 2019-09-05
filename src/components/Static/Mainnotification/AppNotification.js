import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Checkbox } from 'antd';

  class  AppNotification extends React.Component{   
 render(){
    return (
    <div>
    
           <ExpansionPanel>
             <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                disabled={true}
                expanded={false} 
                >
                <Typography > <Checkbox value=""> My orders</Checkbox>
                <span className="text-muted"><small>Latest updates on your order</small></span> 
                </Typography>
          </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography > <Checkbox value="" checked>    <span className="text-muted"><small>Latest updates on your order</small></span></Checkbox> </Typography>
                </ExpansionPanelDetails>
        </ExpansionPanel>
      <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                expanded={true}
                >
                <Typography > <Checkbox value="" checked> Remainder</Checkbox>
                    <small> Price drops  to stock product</small>
                </Typography>
         </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Typography> 
                        <li className="ls"> <Checkbox value=""> Reminders for Items in Cart </Checkbox></li> 
                        <li className="ls"> <Checkbox value=""> Notify Me for subscriptions and answered questions </Checkbox></li> 
                        <li className="ls"> <Checkbox value=""> Reminders to Restock </Checkbox></li> 
                        <li className="ls"> <Checkbox value="">Reminders for discounts just for you </Checkbox></li> 
                        <li className="ls"> <Checkbox value="">Reminder for Games </Checkbox></li>   
                 </Typography>   
            </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                expanded={true}
                >
                <Typography > <Checkbox value="" checked>Recomendation By Goldenzon</Checkbox>
                    <small className="text-muted"> Products Based on interest</small>
                </Typography>
         </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Typography>   
                    <li className="ls"> <Checkbox value=""> Offers based on your interests </Checkbox></li> 
                    <li className="ls"> <Checkbox value=""> Offers to complement your purchases </Checkbox></li> 
                    <li className="ls"> <Checkbox value=""> Offers on products similar to past purchases </Checkbox></li> 
                 </Typography>   
            </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                expanded={true}
                >
                <Typography > <Checkbox value="" > New Offers</Checkbox>
                    <small> Price drops backs to stock product</small>
                </Typography>
         </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Typography> 
                    <li className="ls"> <Checkbox value="">Welcome Offers </Checkbox></li> 
                    <li className="ls"> <Checkbox value=""> Deals, Discounts and Sale </Checkbox></li> 
                    <li className="ls"> <Checkbox value="">Offer zone </Checkbox></li>    
                 </Typography>   
            </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                expanded={true}
                >
                <Typography > <Checkbox value=""> Feedback and review</Checkbox>
                    <small> Price drops backs to stock product</small>
                </Typography>
         </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Typography> 
                    <li className="ls"> <Checkbox value="">Feedback on products </Checkbox></li> 
                    <li className="ls"> <Checkbox value=""> Answer questions by your fellow buyers </Checkbox></li>   
                 </Typography>   
            </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
  );
}
}
export default AppNotification ;