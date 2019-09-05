import React from 'react';
import { Collapse } from "antd";
import './Dropdown.css';
import Checkbox from '../Checkbox/Checkbox'

const { Panel } = Collapse;

function callback(key) {
}

class Dropdown extends React.Component{
    render(){
        return(
            <div className="container-fluid p-0">
                <Collapse
                    expandIconPosition="right"
                    onChange={callback}
                    >
                    <Panel header="Brand" key="1">
                    <p> <Checkbox /> </p>
                    </Panel>
                    <Panel header="Brand" key="2">
                    <p> <Checkbox /> </p>
                    </Panel>
                    <Panel header="Brand" key="3">
                    <p> <Checkbox /> </p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default Dropdown;