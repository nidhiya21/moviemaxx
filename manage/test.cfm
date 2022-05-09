<cffunction name="sendMessageWithTwilio" output="false" access="public" returnType="string">
    <cfargument name="aMessage" type="string" required="true" />
    <cfargument name="destinationNumber" type="string" required="true" />

    <cfset var twilioAccountSid = "AC166f0034dccf016f80268b7cfe5b0318" />
    <cfset var twilioAuthToken = "b7ee73fada289fa4a5c1ab5f7f656af0" />
    <cfset var twilioPhoneNumber = "+19804092167" />

    <cfhttp 
        result="result" 
        method="POST" 
        charset="utf-8" 
        url="https://api.twilio.com/2010-04-01/Accounts/#twilioAccountSid#/Messages.json"
        username="#twilioAccountSid#"
        password="#twilioAuthToken#" >

        <cfhttpparam name="From" type="formfield" value="#twilioPhoneNumber#" />
        <cfhttpparam name="Body" type="formfield" value="#arguments.aMessage#" />
        <cfhttpparam name="To" type="formfield" value="#arguments.destinationNumber#" />

    </cfhttp>

    <cfif result.Statuscode IS "201 CREATED">
        <cfreturn deserializeJSON(result.Filecontent.toString()).sid />
    <cfelse>
        <cfreturn result.Statuscode />
    </cfif>

</cffunction>

<cfdump var='#sendMessageWithTwilio(
    "This is a test message.",
    "+17775553333"
)#' />