import React from 'react';
class Shopping extends React.Component {
    render() {
        return (

            <div>
                <h4> Shopping</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse111">
                            Q: How do I know my order has been confirmed?
                         </a>
                    </div>
                    <div id="collapse111" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p> ANS.</p>
                            <p> You could see different prices for the same product, as it could be listed by many Sellers.</p>

                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse112">
                        Is installation offered for all products?
                         </a>
                    </div>
                    <div id="collapse112" class="collapse" data-parent="#accordion">
                        <div class="card-body"> 
                            <p> ANS.</p>
                            <p> Installation and demo are offered for certain items by sellers through the brand or an authorised service provider. Please check the individual product page to see if these services are offered for the item.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Shopping;