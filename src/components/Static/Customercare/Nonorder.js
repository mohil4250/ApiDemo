import React from 'react';
class Nonorder extends React.Component {
    render() {
        return (

            <div id="accordion">
                <h4>Select non order related issues</h4>
                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapseOne">
                            Account Related Queries
                        </a>
                    </div>
                    <div id="collapseOne" class="collapse " data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q .I Want to deactivate my Account</p>
                            <p> ANS.</p>
                            <ul>
                                To deactivate your Goldenzon account, follow these simple steps
                                 <small> <li>Log into your Goldenzon account </li>
                                    <li> Go to My Account > Settings > Deactivate </li>
                                    <li> Enter the password for your account </li>
                                    <li> Choose 'Confirm Deactivation'</li>  </small>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapsetwo">
                            Payment Related issues
                        </a>
                    </div>
                    <div id="collapsetwo" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q How do I know my order has been confirmed?</p>
                            <p> ANS.</p>
                            <p> You will also be notified when the seller ships the item(s) to you. Shipping details will be provided with the respective tracking number(s).</p>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapseseven">
                            Goldenzon service Queries
                        </a>
                    </div>
                    <div id="collapseseven" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> QI don't remember the warranty details for my product. Where can I find it?</p>
                            <p> ANS.</p>
                            <p>You can check the brand website for the warranty details of your product. The product invoice can be used to claim the services from any Authorised Service Centre.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapse20">
                            Offer Related Queries
                        </a>
                    </div>
                    <div id="collapse20" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q .How do I check if a cashback is applied to my order?</p>
                            <p> ANS.</p>
                            <ul>
                                To deactivate your Flipkart account, follow these simple steps
                                 <small> <li>- Date of purchase </li>

                                    <li> Total order value </li>
                                    <li>Mode of payment </li>
                                    <li>Products that are part of the offer</li>  </small>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapsethree">
                            Report an error
                        </a>
                    </div>
                    <div id="collapsethree" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q. How do I know my order has been confirmed?</p>
                            <p> ANS.</p>
                            <p> Once your order has been logged and payment authorization has been received, the seller confirms receipt of the order and begins processing it.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapsefour">
                            Goldenzon plus
                        </a>
                    </div>
                    <div id="collapsefour" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q I have an issue with the addition/deduction of Plus coins</p>
                            <p> ANS.</p>
                            <p>The loyalty coins will be granted to the user after delivery of the order, these coins will move to credited state after return period of all products in the order gets over.</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapsefive">
                            Travel
                        </a>
                    </div>
                    <div id="collapsefive" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q I have booking related issue</p>
                            <p> ANS.</p>
                            To view and manage your bookings, please login to your Flipkart account with your registered email address and password. All of your bookings will be available
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header bg-white">
                        <a class="card-link" data-toggle="collapse" href="#collapsesix">
                            Other
                        </a>
                    </div>
                    <div id="collapsesix" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <p className="text-danger"> Q Why are faster delivery options not available at my location?</p>
                            <p> ANS.</p>
                            Faster delivery options may not be available at your location due to courier related reasons but we’re trying to expand our services to include more places. Stay tuned for updates!
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default Nonorder;