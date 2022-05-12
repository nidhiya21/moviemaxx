<!--- Param the form posts. --->
<cfparam name="form.submitted" type="boolean" default="false" />
<cfparam name="form.name" type="string" default="" />
<cfparam name="form.email" type="string" default="" />
<cfparam name="form.donation" type="numeric" default="1" />
<cfparam name="form.stripeToken" type="string" default="" />

<!--- A flag for validation-only requests (for AJAX). --->
<cfparam name="form.validateOnly" type="boolean" default="false" />


<!--- Create an errors collection. --->
<cfset errors = [] />


<!---
	Check to see if the form has been submitted. The credit card
	form will be posting back to itself. However, note that we are
	NOT POSTING any credit card information to OUR server (to keep
	in accordance with PCI compliance).
--->
<cfif form.submitted>


	<!--- Check for a name. --->
	<cfif !len( form.name )>

		<cfset arrayAppend( errors, "Please enter your name." ) />

	</cfif>

	<!--- Check for an email. --->
	<cfif !isValid( "email", form.email )>

		<cfset arrayAppend( errors, "Please enter a valid eamil." ) />

	</cfif>

	<!--- Check for an amount. --->
	<cfif (form.donation lt 1)>

		<cfset arrayAppend( errors, "Please select a donation." ) />

	</cfif>

	<!--- Check for transaction token. --->
	<cfif !len( form.stripeToken )>

		<cfset arrayAppend( errors, "Something went wrong with your credit card information. Please double-check your information." ) />

	</cfif>


	<!---
		Check to see if we are using asynchronous validation of the
		form. If so, let's just return an "API" response rather than
		fully processing the form data.
	--->
	<cfif form.validateOnly>

		<!--- Check to see if there are any errors. --->
		<cfif arrayLen( errors )>

			<!--- Create an error response. --->
			<cfset response = {} />
			<cfset response[ "success" ] = false />
			<cfset response[ "errors" ] = errors />

		<cfelse>

			<!--- Create a success response. --->
			<cfset response = {} />
			<cfset response[ "success" ] = true />

		</cfif>

		<!--- Serialize the response. --->
		<cfset responseJSON = serializeJSON( response ) />

		<!--- Return the API response. --->
		<cfcontent
			type="text/x-application-json"
			variable="#toBinary( toBase64( responseJSON ) )#"
			/>

		<!--- NOTE: API processing has been halted. --->

	</cfif>


	<!---
		If we made it this far, we are doing server-side processing.
		Check to see if there were any errors.
	--->
	<cfif !arrayLen( errors )>


		<!---
			Try to process the credit card transaction. Since a
			number of things can go wrong at this point, let's
			wrap this in a try/catch block.
		--->
		<cftry>


			<!---
				Charge the customer using the Stripe API. For this
				request, the username is our SECRET key. The password
				will be left blank.
			--->
			<cfhttp
				result="charge"
				method="post"
				url="https://api.stripe.com/v1/charges"
				username="sk_test_51KyV9vSHMx6X7hdDpgU5mqHK5i5Z1QhQ67yD4xI5ZdpWYs4T6y1zZY7RmHKR5hEl5iauGZKf1REsPkUac4WZhGYo00WgOyWDPx"
				password="">

				<!--- Our donation amount (in cents). --->
				<cfhttpparam
					type="formfield"
					name="amount"
					value="#(form.donation * 100)#"
					/>

				<!--- Our currency (only USD if supported. --->
				<cfhttpparam
					type="formfield"
					name="currency"
					value="usd"
					/>

				<!---
					For the "Card" value, we will provide the Stripe
					transaction token that we received from the client-
					side API call.
				--->
				<cfhttpparam
					type="formfield"
					name="card"
					value="#form.stripeToken#"
					/>

				<!---
					A description of the transaction to show up in
					OUR records for tracking purposes. It is
					considered a good practice to add the Email
					address here in order to follow up if necessary.
				--->
				<cfhttpparam
					type="formfield"
					name="description"
					value="Testing the Stripe.com API. (#form.email#)."
					/>

			</cfhttp>


			<!--- Deserialize the response. --->
			<cfset response = deserializeJSON( charge.fileContent ) />


			<!---
				Check to see if an ERROR key exists. If so, then
				there was a problem with the transaction.
			--->
			<cfif structKeyExists( response, "error" )>

				<!--- Add the message to the errors. --->
				<cfset arrayAppend(
					errors,
					response.error.message
					) />

				<!--- Throw an errors to break the processing. --->
				<cfthrow type="InvalidRequestError" />

			</cfif>


			<!--- ----------------------------------------- --->
			<!--- ----------------------------------------- --->


			<!---
				If we made it this far without error, then we
				successfully processed the credit card and can move
				to the confirmation page.
			--->
			<cflocation
				url="./index.cfm"
				addtoken="false"
				/>


			<!--- ----------------------------------------- --->
			<!--- ----------------------------------------- --->


			<!--- Catch invalid request errors. --->
			<cfcatch type="InvalidRequestError">

				<!--- Nothing to do here. --->

			</cfcatch>


			<!--- Catch any unexpected errors. --->
			<cfcatch>

				<cfset arrayAppend(
					errors,
					"There was an unexpected error during the processing of your purchase. The error has been logged an our team is looking into it."
					) />

			</cfcatch>

		</cftry>


	</cfif>


</cfif>


<!--- ----------------------------------------------------- --->
<!--- ----------------------------------------------------- --->
<!--- ----------------------------------------------------- --->
<!--- ----------------------------------------------------- --->


<!--- Reset the content buffer. --->
<cfcontent type="text/html; charset=utf-8" />

<cfoutput>

	<!DOCTYPE html>
	<html>
	<head>
		<title>Accepting Online Payments With Stripe</title>

		<!-- Include linked scripts. -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


		<!-- Load the STRIPE API from their CDN. -->
		<script type="text/javascript" src="https://js.stripe.com/v1/"></script>
	</head>
	<body>

		<h1>
			Accepting Online Payments With Stripe
		</h1>


		<!--- --------------------------------------------- --->
		<!--- --------------------------------------------- --->


		<!--- Check to see if we have any errors. --->
		<cfif (
			form.submitted &&
			arrayLen( errors )
			)>

			<h3>
				Please review the following:
			</h3>

			<ul>
				<!--- Output the list of errors. --->
				<cfloop
					index="error"
					array="#errors#">

					<li>
						#error#
					</li>

				</cfloop>
			</ul>

		</cfif>


		<!--- --------------------------------------------- --->
		<!--- --------------------------------------------- --->


		<form method="post" action="#cgi.script_name#">

			<!--- Flag the form submission. --->
			<input type="hidden" name="submitted" value="true" />

			<!---
				This is the Stripe token. It holds a one-use-only
				value that can be used to charge the given credit
				card a given amount. Once we pass the credit card
				info to the Stripe site (note: PCI comppliance),
				we will get a token in return.
			--->
			<input type="hidden" name="stripeToken" value="" />


			<p>
				Name:<br />
				<input
					type="text"
					name="name"
					value="#htmlEditFormat( form.name )#"
					size="20"
					/>
			</p>

			<p>
				Email:<br />
				<input
					type="text"
					name="email"
					value="#htmlEditFormat( form.email )#"
					size="20"
					/>
			</p>

			<p>
				Donation:<br />
				<select name="donation">
					<option value="1">$1</option>
					<option value="2">$2</option>
					<option value="3">$3</option>
					<option value="4">$4</option>
					<option value="5">$5</option>
				</select>
			</p>


			<!---
				The user is going to enter their credit card
				information below. Notice that NONE of the credit-
				card fields have Name values. This will prevent them
				from being submitted to OUR server which is what we
				need to avoid in order to comply with PCI standards
				(the credit card information CANNOT touch our server).
			--->

			<!-- ------------------------------- -->
			<!-- BEGIN: Credit Card Information. -->
			<!-- ------------------------------- -->

			<p>
				Credit Card:<br />
				<input
					type="text"
					value="4242424242424242"
					size="20"
					class="creditCard"
					/>
			</p>

			<p>
				Expiration:<br />
				<input type="text" size="5" class="expirationMonth" />
				<input type="text" size="5" class="expirationYear" />
				<em>(MM/YYYY)</em>
			</p>

			<p>
				Security Code:<br />
				<input type="text" size="5" class="securityCode" />
			</p>

			<!-- ----------------------------- -->
			<!-- END: Credit Card Information. -->
			<!-- ----------------------------- -->


			<p>
				<input type="submit" value="Make A Donation!" />
			</p>

		</form>


		<!--- Now that the DOM is mostly ready. --->
		<script type="text/javascript">
			// Get a reference to our main DOM elements.
			var dom = {};
			dom.form = $( "form" );
			dom.stripeToken = dom.form.find( "input[ name = 'stripeToken' ]" );
			dom.name = dom.form.find( "input[ name = 'name' ]" );
			dom.email = dom.form.find( "input[ name = 'email' ]" );
			dom.donation = dom.form.find( "select[ name = 'donation' ]" );
			dom.creditCard = dom.form.find( "input.creditCard" );
			dom.expirationMonth = dom.form.find( "input.expirationMonth" );
			dom.expirationYear = dom.form.find( "input.expirationYear" );
			dom.securityCode = dom.form.find( "input.securityCode" );
			// ---------------------------------------------- //
			// ---------------------------------------------- //
			// Our Stripe.js file gave us an API to work with. Let's
			// identify our site.
			//
			// NOTE: We are using the DEMO key for this example. This
			// allows us to test without truly being charged.
			Stripe.setPublishableKey( "pk_test_51KyV9vSHMx6X7hdDnht4e7CpsJQHYwxo5Z7W6NGnbRP3IBuKu603Au7QGZouW2i4WlfOh2TArGqLzyd8OtY5iTZX00GE1a3rrF");
			// Intersect the form submission so that we can interact
			// the Stripe API to get our transaction token.
			dom.form.submit(
				function( event ){
					// Cancel the default event - we don't want the
					// form to submit... YET. We need to contact the
					// Stripe API first.
					event.preventDefault();
					// Get a transaction token from the Stripe API.
					// This will store the credit card in the Stripe
					// database. We can then use the token to
					// actually execute the charge.
					Stripe.createToken(
						// The credit card information.
						{
							number: dom.creditCard.val(),
							exp_month: dom.expirationMonth.val(),
							exp_year: dom.expirationYear.val(),
							cvc: dom.securityCode.val()
						},
						// The amount of the purchase. This amount
						// is in the form of cents.
						(dom.donation.val() * 100),
						// The callback for our transaction token.
						tokenHandler
					);
				}
			);
			// I handle the response from the Stripe token request.
			// Since this request is asynchronous, we will get a
			// response using a callback mechanism.
			function tokenHandler( status, response ){
				// Check to see if the response contains an error
				// (ie. if the "error" key exists in the response).
				if (response.hasOwnProperty( "error" )){
					// Oh snap! Something went wrong. Alert the user.
					alert(
						"Something went wrong!\n\n" +
						response.error.message
					);
					// Return out - there's no more processing to
					// be done at this point.
					return;
				}
				// If the "error" key did not exist, then our token
				// should have been returned successfully. We can
				// now store it in the form and process the form.
				dom.stripeToken.val( response.id );
				// Now, let's validate our non-stripe data.
				var validation = $.ajax({
					type: "post",
					url: "#cgi.script_name#",
					data: {
						submitted: true,
						validateOnly: true,
						name: dom.name.val(),
						email: dom.email.val(),
						donation: dom.donation.val(),
						stripeToken: response.id
					},
					dataType: "json"
				});
				// Check the validate asynchronous response.
				validation.done(
					function( response ){
						// Check to see if the validate passed.
						if (response.success){
							// Both the stripe API call and the local
							// server validation worked. Unbind any
							// form handlers (so we don't go into an
							// endless loop) and submit the form.
							dom.form
								.unbind( "submit" )
								.submit()
							;
						} else {
							// Alert the errors.
							alert(
								"Something went wrong!\n\n- " +
								response.errors.join( "\n- " )
							);
						}
					}
				);
			}
		</script>

	</body>
	</html>

</cfoutput>