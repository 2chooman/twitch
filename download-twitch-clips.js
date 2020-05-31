// ==UserScript==
// @name     Download Twitch Clips
// @version  1
// @grant    none
// ==/UserScript==

if (window.location.href.indexOf('twitch.tv') != -1) {
    
  window.addEventListener('load', function() {

    if (document.getElementsByClassName('chat-input').length == 0) {
    
      var svgURI = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS( svgURI, 'svg' );
      
      svg.setAttribute( 'viewBox', '0 0 512 512' );
      
      var path = document.createElementNS( svgURI, 'path' );
      
      path.setAttribute( 'd', 'M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64 c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472 c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z' );
      path.setAttribute( 'fill', '#ffffff' );
      path.setAttribute( 'class', 'arrow' );
      
      svg.appendChild( path );

      var tag = document.createElement("p");
      tag.setAttribute( 'style', 'cursor: pointer; margin-top: 0.3em; margin-bottom: 0.3em' );
      
      tag.appendChild(svg);
      
      tag.onclick = function() {
      
        var video = document.getElementsByTagName('video')[0].getAttribute('src');
        var link = document.createElement("a");
        
        link.download = 'Download video';
        link.href = video;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
        
      };
      
      document.querySelector('div.tw-flex-row:nth-child(2) > div:nth-child(1)').appendChild(tag);
      
    };
    
	}, false);
    
};
