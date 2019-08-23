
// open link in a new tab
// taken from: https://www.sitecast.com/blog/open-markdown-links-in-new-tab/
(function() {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = "_blank";
      links[i].setAttribute("rel", "noopener noreferrer");
      links[i].className += " externalLink";
    } else {
      links[i].className += " localLink";
    }
  }
})();
