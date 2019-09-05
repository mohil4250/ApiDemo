import React from 'react';
class Cancelation extends React.Component {
    render() {
        return (

            <div>
                <h4> Return and cancelation</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse111">
                            Payment Related issues
                </a>
                    </div>
                    <div id="collapse111" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q How do I know my order has been confirmed?</p>
                            <p> ANS.</p>
                            <p> You could see different prices for the same product, as it could be listed by many Sellers.</p>

                            <p className="text-danger">Is installation offered for all products?</p>
                            <p> ANS.</p>
                            <p> Installation and demo are offered for certain items by sellers through the brand or an authorised service provider. Please check the individual product page to see if these services are offered for the item.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cancelation;