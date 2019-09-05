import React from 'react';
class Order extends React.Component {
    render() {
        return (

            <div>
                <h4> Order</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse1">
                        I missed the delivery of my order today. What should I do?
                         </a>
                    </div>
                    <div id="collapse1" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p> ANS.</p>
                            <p> The courier service delivering your order usually tries to deliver on the next business day in case you miss a delivery..</p>

                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse2">
                        Will the delivery be tried again if I'm not able to collect my order the first time?
                         </a>
                    </div>
                    <div id="collapse2" class="collapse" data-parent="#accordion">
                        <div class="card-body"> 
                            <p> ANS.</p>
                            <p>Couriers make sure that the delivery is re-attempted the next working day if you can't collect your order the first time.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Order;