window.onload = function(){
	
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-23.013666,-43.463406), scrollwheel:false, zoom:12, 
			mapTypeId:google.maps.MapTypeId.ROADROLL
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat, 'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:a0px 0;">Meu endereço</p>'; 
	addMarker(-23.013666,-43.463406,'',conteudo);

	map.panTo({'lat':-23.550520,'lng':-46.633309});

}