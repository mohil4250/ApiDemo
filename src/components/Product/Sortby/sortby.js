import React from 'react';
import './sortby.css';
import Tabs, {Tab} from 'react-bootstrap/Tabs'
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Productlist from '../Productlist/Productlist';

class Sortby extends React.Component{
  
    render(){
        return( 
            <div>
                <div> <Breadcrumb/> </div>

                <div> <span className="p-5">Wrist Watches (Showing 1- 10 products from 10 products)</span> </div>
                
                <div>
                    <Tabs defaultActiveKey="Popularity" id="uncontrolled-tab-example" >
                        <Tab eventKey="Sort By" title="Sort By" disabled>  </Tab>    

                        <Tab eventKey="Popularity" title="Popularity">
                            <Productlist/> 
                        </Tab>

                        <Tab eventKey="Price-Low-To-High" title="Price-Low-To-High">
                            <Productlist />
                        </Tab>

                        <Tab eventKey="Price-High-To-Low" title="Price-High-To-Low">
                            <Productlist/>
                        </Tab>

                        <Tab eventKey="Newest First" title="Newest First">
                            <Productlist/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Sortby;