<cfset moviesObj=CreateObject("component","components.movies")/>
<cfif structKeyExists(URL,'id')>
    <cfif URL.id NEQ "">
        <cfset variables.movieID = URL.id/>
        <cfset result=moviesObj.getMoviesById(movieID)/>   
    </cfif>
</cfif>
<!DOCTYPE html>
<html>
    <head>
        <title> <cfoutput>#result.FLD_MOVIENAME# </cfoutput></title>
        <script type="text/javascript" src="./js/common.js"></script> 
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
        <cfinclude template="./common.cfm">
        <script type="text/javascript" src="./js/detail.js"></script> 
    </head>
    <body>
        <header>
            <cfinclude template="./header.cfm">	  
        </header>
        <section class="details-container">
            <cfoutput>
                <input type="hidden" id="movieID" name="movieID" value=#result.movieID#>
                <cfif isDefined("session") and structKeyExists(session, 'stLoggedInFrUser')  and structKeyExists(session.stLoggedInFrUser, 'userID')  >
                    <input type="hidden" id="userID" name="userID"  value="#session.stLoggedInFrUser.userID#"/> 
                </cfif>
                <div class="print-title"><h1>#result.FLD_MOVIENAME#</h1></div>
                    <div class="mobile-hide movie-details-container">
                        <div class="movie-poster">
                            <img src="../manage/movies/#result.FLD_POSTER#" class="poster-portrait poster-filim">
                        </div>
                        <div class="movie-details">
                            <h1>#result.FLD_MOVIENAME#</h1>
                            <hr>
                            
                            <p class="meta-data">#result.FLD_DETAILS#</p>
                            <p class="meta-data">#result.FLD_CAST#</p>
                            <cfif result.fld_ratings EQ 1> 
                               <div class="small-ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            <cfelseif result.fld_ratings EQ 2> 
                                <div class="small-ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            <cfelseif result.fld_ratings EQ 3> 
                                <div class="small-ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            <cfelseif result.fld_ratings EQ 4> 
                                 <div class="small-ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            <cfelseif result.fld_ratings EQ 5> 
                                <div class="small-ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                </div>
                            </cfif>        
                            <hr>
                            <p><i></i></p>
                            <p><p>#result.FLD_FACTS#</p></p>
                            
                            <div class="social-media-share">
                                <a href="https://twitter.com/share?url=http%3A%2F%2Fwww.moviemaxdigital.co.nz%2Fmovie%2Fthe-unbearable-weight-of-massive-talent&text=The Unbearable Weight of Massive Talent%20at%20Movie%20Max%20Digital%20Cinemas" class="share-button twitter-share-button flex-container flex-container-inline" target="_blank"><span class="twitter-icon"></span> <span>Tweet</span></a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.moviemaxdigital.co.nz%2Fmovie%2Fthe-unbearable-weight-of-massive-talent" class="share-button facebook-share-button flex-container flex-container-inline" target="_blank"><img src="https://www.facebook.com/rsrc.php/v3/yq/r/5nnSiJQxbBq.png"> <span>Share</span></a>
                               
                            </div>
                            <div class='embed-container trailer'><iframe src=#result.FLD_LINK#></iframe></div>
                    </div>
                </div>
            </cfoutput>    
        </section>
     
        <section id="details">
            <div class="main-content">
                <!-- display date selector and times -->
                    <div class="date-picker">
                        <!-- sly here displaying date list -->
                        <div class="dates" id="datePicker">
                            <a id="prev" class="disabled" disabled><img src="./images/right.png"></a>
                            <div id="date-scroller" class="frame ">
                                <ul class="slidee">
                                    <!-- adding dates -->
                                </ul>
                            </div>
                            <a id="next"><img src="./images/left.png"></a>
                        </div>
                    </div> 
                    <div id="movie-list3">
                        <!-- display list of movies here -->
                    </div>
                    <div id="session-keys"></div>
            </div>
            <aside class="mobile-hide tablet-hide"> 
                <cfinclude template="./bannerleftblock.cfm">	
            </aside>
        </section>
        <cfinclude template="./cast.cfm">
        <script type="text/javascript" src="./js/datelist.js"></script>
        <cfinclude template="./footer.cfm">	 
        <script type="text/javascript" src="./js/main.js"></script>
    </body> 
</html>