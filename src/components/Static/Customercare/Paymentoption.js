import React from 'react';
class Shopping extends React.Component {
    render() {
        return (

            <div>
                <h4> Payment</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse113">
                        How can I order for large quantities of the product as part of a corporate order?
                         </a>
                    </div>
                    <div id="collapse113" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p> ANS.</p>
                            <p> You can write to  info@goldenzon.com for your corporate gifting requirements</p>

                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse114">
                        How can I label my saved cards?
                         </a>
                    </div>
                    <div id="collapse114" class="collapse" data-parent="#accordion">
                        <div class="card-body"> 
                            <p> ANS.</p>
                            <p> You can specify a card label at the time of saving a card on Flipkart through the 'My Account' section. You can also add/edit the label anytime through 'My Saved Cards'</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Shopping;