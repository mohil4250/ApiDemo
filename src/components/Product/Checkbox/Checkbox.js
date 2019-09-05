import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {
}

class Checkboxes extends React.Component{
    render(){
        return(
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <Row>
            <Col span={24}>
                <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={24}>
                <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={24}>
                <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={24}>
                <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={24}>
                <Checkbox value="E">E</Checkbox>
            </Col>
            </Row>
        </Checkbox.Group>
        );
    }
}

export default Checkboxes;