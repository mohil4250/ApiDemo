import React from 'react';
import {TextField, Button } from '@material-ui/core/';

class Pandetails extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                         <TextField
                        id="outlined-bare"
                        className="form-control"
                        defaultValue="Enter Pan Number"
                        margin="normal"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'bare' }}
                           />     
                    </div>
                    <div className="col-lg-6 mt-4">   </div>
                </div>
                <div className="row">
                    <div className="col-lg-6  mt-4">
                        <TextField
                            id="outlined-bare"
                            className="form-control"
                            defaultValue="FullName"
                            margin="normal"
                            variant="outlined"
                            type="text"
                        />
                    </div>
                    <div className="col-lg-6  mt-4"></div>  
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-4"> 
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            label="upload pancard"
                        />    
                    </div>
                    <div className="col-lg-6  mt-4"> </div>   
                  </div>
                <div className="row mt-4">
                    <div className="col-lg-12 mt-4">
                        <span> <input type="checkbox"/> <small>I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.goldenzo.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration. </small></span> 
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span"   >
                            Upload pancard
                            </Button>
                        </label>
                    </div>
                </div>
            </div>   
        );
    }
}
export default Pandetails;