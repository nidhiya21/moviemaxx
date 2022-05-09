<cfif isDefined("session") and structKeyExists(session, 'cart')  and structKeyExists(session.cart, 'cartID')  >
    <cfset variables.cartID=session.cart.cartID />
    <cfset moviesObj=CreateObject("component","components.movies")/>
    <cfset result=moviesObj.getCartDetails(cartID)/>
</cfif>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width">
        <title>Payment - Movie Max Digital</title>
        <link rel="stylesheet" type="text/css" href="./css/site.css" />
        <link rel="stylesheet" type="text/css" href="./css/purchase.css" />
        <link rel="stylesheet" href="./css/bootstrap.min.css">
        <script src="./js/jquery-1.12.4.min.js"  crossorigin="anonymous"></script>
        <script src="./js/bootstrap.min.js"></script>
        <script src="./js/bootstrap-datepicker.min.js"></script> 
        <link type="text/css" href="./css/custom.css" rel="stylesheet" />
        <script src="./js/jquery.validate.min.js"></script>
    </head>
    <body>
        <img class="body-background film-poster"></img> 
        <img class="body-background film-backdrop"></img>
        <div id="container">
            <header>
                <a href="./index.cfm">
                    <img src="./images/banner.jpg" alt="" />
                </a>
            </header>
            <div id="page-body" > 
                <section id="session-overview">
                    <div class="container">
                    <div id="Checkout" class="inline">
                        <h1>Pay Invoice</h1>
                        <div class="card-row">
                            <span class="visa"></span>
                            <span class="mastercard"></span>
                            <span class="amex"></span>
                            <span class="discover"></span>
                        </div>
                        <cfparam name="form.nameOnCard" default=""> 
                        <cfparam name="form.creditCardNumber" default=""> 
                        <cfparam name="form.expiryDate" default=""> 
                        <cfparam name="form.securityCode" default=""> 
                        <cfparam name="form.zipCode" default=""> 
                        <form name="payment" method="post" id="payment">
                            <div class="form-group">
                                <label for="PaymentAmount">Payment amount</label>
                                <div class="amount-placeholder">
                                    <span> &#x20b9;</span> 
                                    <span><cfoutput>#result.ORDERAMOUNT#</cfoutput></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label or="NameOnCard">Name on card</label>
                                <input id="nameOnCard" name="nameOnCard" class="form-control" type="text" maxlength="255"></input>
                            </div>
                            <div class="form-group">
                                <label for="CreditCardNumber">Card number</label>
                                <input id="creditCardNumber" name="creditCardNumber" class="null card-image form-control" type="text"></input>
                            </div>
                            <div class="expiry-date-group form-group">
                                <label for="ExpiryDate">Expiry date</label>
                                <input id="expiryDate" class="form-control"  name="expiryDate" type="text" placeholder="MM / YY" maxlength="7"></input>
                            </div>
                            <div class="security-code-group form-group">
                                <label for="SecurityCode">Security code</label>
                                <div class="input-container" >
                                    <input id="securityCode" name="securityCode" class="form-control" type="text" ></input>
                                    <i id="cvc" class="fa fa-question-circle"></i>
                                </div>
                                <div class="cvc-preview-container two-card hide">
                                    <div class="amex-cvc-preview"></div>
                                    <div class="visa-mc-dis-cvc-preview"></div>
                                </div>
                            </div>
                            <div class="zip-code-group form-group">
                                <label for="ZIPCode">ZIP/Postal code</label> 
                                <div class="input-container">
                                    <input id="zipCode"  name="zipCode" class="form-control" type="text" maxlength="10"></input>
                                    <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
                                </div> 
                            </div>                        
                            <button id="PayButton" class="btn btn-block btn-success submit-button paymentBtn" name="PayButton"  ><span class="submit-button-lock"></span>
                                <span class="align-middle">Pay <span> &#x20b9;</span> 
                                <span><cfoutput>#result.ORDERAMOUNT#</cfoutput></span>
                            </button>
                        </form>
                    </div>
                    </div>
                </section> 
            </div>
        </div>
        <script type="text/javascript" src="./js/payment.js"></script>
    </body>
</html>
