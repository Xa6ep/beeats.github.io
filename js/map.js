function init_map() {
		var var_location = new google.maps.LatLng(47.223792,39.700127);
 
        var mapOptions = {
        center: var_location,
        zoom: 18,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		scrollwheel: false,
		draggable: false,
	    styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"visibility": "off"}]}]
		};
 
		var mapElement = document.getElementById('map');

		var map = new google.maps.Map(mapElement, mapOptions);
 
		var contentString =
			'<IMG BORDER="0" ALIGN="right" SRC="img/beeline-small.png">'+
			'<div id="infowindow_content">'+
            '<p><strong>Офис обслуживания юридических лиц</strong><br>'+
            'ул. Максима Горького, д. 55<br>'+
			'<a href="tel:+79034006745" target="_blank"><strong>+7(903)400-67-45</strong></a>'+
            '</div>';
        var var_infowindow = new google.maps.InfoWindow({
            content: contentString,
			position: var_location
          });
 
		var_infowindow.open(map);
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);