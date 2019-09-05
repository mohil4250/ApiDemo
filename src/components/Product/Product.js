import React from 'react';
import './Sortby/sortby.css';
import Sortby from './Sortby/sortby'
import Sidebar from './Sidebar/Sidebar';

class Product extends React.Component{

    render(){
        return( 
                <div className="">
                    <div className="row m-0">
                        <div className="col-lg-2 col-md-2 p-1 set">
                            <div className="col-lg-12 col-md-12 p-0 setbackground">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 p-1 set">
                            <div className="col-lg-12 col-md-12 p-1 setbackground sildebarBorder">
                                <Sortby />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Product;