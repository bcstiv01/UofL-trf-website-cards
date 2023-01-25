
let chatScript = document.createElement("script");
chatScript.src = "https://webbot.mainstay.com/static/js/webchat.js";
chatScript.setAttribute("async", true);
document.body.appendChild(chatScript);

function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WPPB7FM');</script><script type="text/javascript">
          var _gaq = _gaq || [];
        
                _gaq.push(['_setAccount', 'UA-2669423-20']);
                _gaq.push(['_setDomainName', 'none']);
                _gaq.push(['_setAllowLinker', true]);
                _gaq.push(['_trackPageview']);
                
          _gaq.push(['_setAccount', 'UA-2669423-1']);
          _gaq.push(['_setDomainName', 'none']);
          _gaq.push(['_setAllowLinker', true]);
          _gaq.push(['_trackPageview']);
           (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
          setTimeout('_gaq.push([\'_trackEvent\', \'NoBounce\', \'Over 10 seconds\'])',10000);

          //This is a function to alter outbound link to enable analytics tracking
          function recordOutboundLink(link, category, action, opt_label) {
              _gat._getTrackerByName()._trackEvent(category, action, opt_label);

              target = link.target.toLowerCase();

              if (target == '' || target == "_self" || target == "_parent" || target == "_top") {
                setTimeout('document.location = "' + link.href + '"', 100);
              }
            }

          function checkURLforfiletype(path) {
              filetypes = [".pdf", ".xls", ".xlsx", ".ppt", ".pptx", ".doc", ".docx", ".txt", ".csv", ".mov", ".mp3"];
              var arraylen = filetypes.length;
              for (var i=0; i<arraylen; i++) {
                if (path.toLowerCase().indexOf(filetypes[i]) != -1) {
                  return true;
                }
              }
              return false;
          }

          jqbs(document).ready(function() {
              jqbs(function () {
                          jqbs('#visual-portal-wrapper a').click(function () {
                                  if (this.hostname != "" && this.hostname.toLowerCase().indexOf(location.hostname) == -1 &&
                                        this.hostname.toLowerCase().indexOf("louisville.edu") == -1) {
                                   recordOutboundLink(this, 'Outbound Link', jq(this).attr('href'), 'Outbound Link');
                                  }
                                  else if (checkURLforfiletype(this.pathname)) {
                                   recordOutboundLink(this, 'File Download', jq(this).attr('href'), 'File Download');
                                  }
                          });
                  });
          });
        </script><script class="calendarjs" type="text/javascript" src="/admissions/apply/transfer/++theme++uofl.dztheme.marketingsite/js/calendar.js"></script><script class="calendarjs" type="text/javascript">
        jqbs(document).ready(function () {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            jqbs('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: false,
                disableDragging: false,
                disableResizing: false,
                startParam: 'start:int',
                endParam: 'end:int',
                events: 'solgemafullcalendarevents',
                eventClick: function (event) {
                    if (event.url) {
                        $.get(event.url, function (data) {
                            $.fancybox(data, { maxWidth: 800 });
                        });
                        return false;
                    }
                }
            });
        });
 <script type="text/javascript">        jqbs('.dropdown-toggle').dropdown()</script><script type="text/javascript">        jqbs('#portlet-accordion').tab('show')</script><script type="text/javascript">        jqbs('#featured-links-accordion').tab('show')</script><script type="text/javascript">jqbs('.btn').popover()</script><script type="text/javascript" src="https://louisville.edu/admissions/apply/transfer/portal_javascripts/UofL%20Base%20Theme/resourceflowplayer-3.2.6.min-cachekey-a415473088d801caf2f07b0596cdf9c1.js"></script><script type="text/javascript" src="https://louisville.edu/admissions/apply/transfer/portal_javascripts/UofL%20Base%20Theme/resourceflowplayer.ipad-3.2.2.min-cachekey-6a1cad7998f3f1990675a1f66f376d23.js"></script>