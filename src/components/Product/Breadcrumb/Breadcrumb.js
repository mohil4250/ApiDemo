import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import './Breadcrumb.css';

class Sortby extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <Breadcrumb style={{backgroundColor:'white !important'}}>
                    <Breadcrumb.Item href="#" >Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                       Watches
                    </Breadcrumb.Item>
        </Breadcrumb>
        </div>
        </div>
        );
    }
}

export default Sortby;