if (typeof DEBUG == 'undefined' || DEBUG == false ) {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-18940431-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
} else {
  debug('gaTrackPageview : ' + self.location.href);
}
