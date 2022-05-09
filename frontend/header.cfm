<cfoutput>
    <div class="main-menu " >
        <div class="logo"><a href="./index.cfm"><img src="./images/logo.png" alt="Movie Max Digital Cinemas"></a><br />
        </div>
        <div class="menu-desktop">
            <div class="social-media-header">
                <a href="http://www.twitter.com/MovieMaxDigitals" target="_blank" class="twitter-header"></a> 
                <a href="http://www.instagram.com/moviemaxdigitals" target="_blank" class="instagram-header"></a> 
                <a href="https://www.facebook.com/moviemaxdigitals" target="_blank" class="facebook-header"></a> 
            </div>
            <nav>
                <ul>
                    <li  class="active" ><a href="./nowplaying.cfm">NOW PLAYING</a></li>
                    <li ><a href="./comingsoon.cfm">COMING SOON</a></li>
                        <li  ><a href="./prices.cfm" >PRICES &amp; SPECIALS</a></li>
                    <li>
                    <cfif isDefined("session") and structKeyExists(session, 'stLoggedInFrUser')  and structKeyExists(session.stLoggedInFrUser, 'emailID')  >
                        <a href="./account.cfm" class="more"> #Session.stLoggedInFrUser.emailID#  </a> 
                    <cfelse>
                        <a href="##" class="more"><button>LOGIN</button> </a>     
                    </cfif>
                        <nav class="sub-menu"> 
                            <ul>
                                <cfif isDefined("session") and structKeyExists(session, 'stLoggedInFrUser') and structKeyExists(session.stLoggedInFrUser, 'emailID') >                                  
                                    <li><i class="glyphicon glyphicon-user"></i>&nbsp;&nbsp;<a  href="./account.cfm">My Profile</a></li>
                                    <li><i class="glyphicon glyphicon-home"></i>&nbsp;&nbsp;<a  href="./logout.cfm">lOGOUT</a></li>
                                </cfif>          
                            </ul>
                        </nav>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="main-popup">
        <div class="popup-header">
            <div id="popup-close-button"><a href="##"></a></div>
                <ul>
                    <li><a href="##" id="sign-in">Sign In</a></li>
                    <li><a href="##" id="register">Register</a></li>
                </ul>
        </div><!--.popup-header-->
        <div class="popup-content">
            <cfparam name="form.emailID" default=""> 
            <cfparam name="form.password" default=""> 
            <form name="loginForm" method="post"  class="sign-in" action="./components/contactscript.cfc?method=validateLogin">
                <label for="email">Email:</label>
                <input type="text" id="log-email" name="emailID">
                <label for="password">Password:</label>
                <input type="password" id="log-password" name="password">
                <input type="submit" id="submit"  name="login"  value="Submit">
            </form>
            <cfparam name="form.emailID" default=""> 
            <cfparam name="form.userName" default=""> 
            <cfparam name="form.phoneNumber" default=""> 
            <cfparam name="form.password" default=""> 
            <cfparam name="form.confirmpassword" default=""> 
            <form name="signup" method="post" id="signup" class="register"  action="./components/contactscript.cfc?method=saveUser">
                <label for="userName">Username:</label>
                <input type="text" id="userName" name="userName">
                <label for="emailID">Email:</label>
                <input type="text" id="emailID" name="emailID">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
                <label for="confirmpassword">Confirm Password:</label>
                <input type="password" id="confirmpassword" name="confirmpassword">
                <label for="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber">
                <input type="submit" id="saveForm" value="Create Account" class="myform-btn" name="saveForm">
            </form>
        </div><!--.popup-content-->
    </div><!--.main-popup-->
</cfoutput>