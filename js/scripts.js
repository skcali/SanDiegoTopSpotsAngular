angular.module('SanDiegoTopSpots', []);

angular
	.module('SanDiegoTopSpots')
	.controller('printTable', printTable);

function printTable($http) {

  var vm = this;

  $http.get('json/topspots.json').then(function (response) {
    vm.places = response.data;
  });

  vm.locationLink = function locationLink(lat, lon) {
    window.open("https://www.google.com/maps/preview/@" + lat + "," + lon + ",18z");
  };


};

/* $(document).ready(function () {
  // Grab the JSON object
  $.getJSON('json/topspots.json', function(data) {
    // Loop the the JSON for howmany opjects there are
    $.each(data, function(i, f) {
      // Create the table with the right information and button to link depeding on the indecies
      var tblRow = "<tr>" + "<td>" + f.name + "</td>" +
       "<td>" + f.description + "</td>" + "<td>" + "<button data-lat='" + f.location[0] + "' data-lon='" + f.location[1] + "' class='mapsLink'>Click to open in google Maps</button>" + "</td>" + "</tr>";
       $(tblRow).appendTo("#topSpotTable");
       // When buttong is clicked, open a new window linking the location in a new tab
       $(".mapsLink").click( function () {
         var lat = $(this).data('lat');
         var lon = $(this).data('lon');
         window.open("https://www.google.com/maps/preview/@" + lat + "," + lon + ",18z");
       });
     });
  });
}); */
