import React from 'react';
import { Button } from '@material-ui/core/';
class Manageinfo extends React.Component{
    render(){
        return(
            <div className="container">
            <div class="card">
                <div class="card-header bg-white"><a href="#"> <i className="fa fa-plus"></i>Add New Address </a></div>
                
            </div>
             <div class="card mt-3">
                    <div class="card-body">
                        <address>
                            <Button variant="contained" color="light" > Home</Button><br />
                            <p>8446208920</p>
                            <small> Pune Mahanagar Cooperative Housing Society, Hanuman Nagar, pune, Pune, Maharashtra - 411016</small>
                         </address>
                    </div> 
                
                </div>
            </div>

         

        );
    }
}
export default Manageinfo;