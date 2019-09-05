import React from 'react';
import { Progress } from 'antd';

class Ratting extends React.Component{
    render(){
        return(
            <div>
                <div className="h1"> Ratings & Reviews </div>
                <div className="">
                    <div className="row p-0">
                        <div className="col-lg-6">
                            <div style={{ width: 170 }}>
                                <Progress percent={30} />
                                <Progress percent={50} status="active" />
                                <Progress percent={70} status="exception" />
                                <Progress percent={100} />
                                <Progress percent={50} showInfo={false} />
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div>
                                <Progress type="circle" percent={30} width={70} className="p-3" />
                                <Progress type="circle" percent={50} width={70} status="exception" className="p-3" />
                                <Progress type="circle" percent={70} width={70} className="p-3" />
                                <Progress type="circle" percent={90} width={70} strokeColor='red' className="p-3" />
                            </div>
                        </div>
                    </div>
                <div>
            </div>
        </div>
            </div>
        );
    }
}

export default Ratting;