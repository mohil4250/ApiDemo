import React from 'react';
class Goldenplus extends React.Component {
    render() {
        return (

            <div>
                <h4> Goldenzon plus</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse111">
                        If I cancel or return an item from my order, will the SuperCoins credited be deducted?
                         </a>
                    </div>
                    <div id="collapse111" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p> ANS.</p>
                            <p> SuperCoins calculation happens at the order level. You will get to know about the SuperCoins deducted after you've cancelled or returned an item as it will be recalculated on the basis of the updated order value.</p>

                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse112">
                        What is Goldenzon Plus program?
                         </a>
                    </div>
                    <div id="collapse112" class="collapse" data-parent="#accordion">
                        <div class="card-body"> 
                            <p> ANS.</p>
                            <p> Plus is a customer benefits program that brings you a world of benefits like free and faster shipping for select products at serviceable pincodes, early access to select sales and select products, priority customer support and more. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Goldenplus;