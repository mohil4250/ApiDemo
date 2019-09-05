import React from 'react';
import EmtyNotification from '../../assets/images/7.png'

class AllNote extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 mx-auto  col-offset-6 ">
                        <img src={EmtyNotification} alt=""  className="img-fluid  mt-4"/>
                        <h4 className="mt-4" > All caught up!</h4>
                        <small>There are no new notifications for you.</small>
                    </div>
                  
                </div>
          </div>
        )
    }
}
    
export default AllNote;