  var map;
  // Create a new blank array for all the listing markers.
  var markers = [];
  function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7813549, lng: -73.9680244},
      zoom: 12
    });
    // These are the restaurant listings that will be shown to the user.
    var locations = [
        {
            location_name: 'Om Indian',
            location: {lat: 40.7757472, lng: -73.9556981},
            description: 'Indian Food',
            specialtiesDeals: "Amazing Lamb Vindaloo make sure to ask for it spicy.  You'll cry from the heat but love the flavor.  Their takeaway deal of $15 for an entree, apetizer, basmatti rice, and naan is enough for two people." ,
        },
        {
            location_name: 'Flex Muscles',
            location: {lat: 40.7763147, lng: -73.9586954},
            description: 'Seafood',
            specialtiesDeals: "So many great flavors of pots of muscles in the most creative and delicous broths. Save room for the doughnuts for desert, they are spectacular with the vanilla dipping sauce they come with." ,
        },
        {
            location_name: 'B Side Pizza & Wine Bar',
            location: {lat: 40.7638562, lng: -73.9903763},
            description: 'Pizza',
            specialtiesDeals: "Great brick oven pizza. But, what really sets them apart from all the other pizza places is their creative toppings such as Carbonara pizza" ,
        },
        {
            location_name: 'Agora Turkish',
            location: {lat: 40.774956, lng: -73.9563867},
            description: 'Mediterranian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: '2 Bros',
            location: {lat: 40.7567791, lng: -73.9824086},
            description: 'Pizza',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Taqueria Diana',
            location: {lat: 40.728438, lng: -73.9902087},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Cafe Ollin',
            location: {lat: 40.7911861, lng: -73.9415158},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Coarse NY',
            location: {lat: 40.7391548, lng: -74.005815},
            description: 'Farm to Table',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Zest Sushi',
            address: '249 Broome St, New York, NY 10002',
            location: {lat: 40.717931, lng: -73.989905},
            description: 'Sushi',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'JoJu',
            location: {lat: 40.740765, lng:-73.879255},
            description: 'Vietnameese',
            specialtiesDeals: "Get their bahn mi fries." ,
            address: '83-25 Broadway, Elmhurst, NY 11373'
        },
        {
            location_name: 'Yum Yum Too',
            location: {lat: 40.7609944, lng: -73.9926539},
            description: 'Thai',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Gaia Italian Cafè',
            location: {lat: 40.7216961, lng: -73.9875148},
            description: 'Italian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: "Katz's Delicatessen",
            location: {lat: 40.722237, lng: -73.9896177},
            description: 'Jewish Delicatessen',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: "Vanessa's Dumpling House",
            location: {lat: 40.7183673, lng: -73.993907},
            description: 'Chineese',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Black Tap',
            location: {lat: 40.7238326, lng: -74.0064651},
            description: 'Milk Shakes',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Dominique Ansel Kitchen',
            location: {lat: 40.7348068, lng: -74.0040826},
            description: 'Pastries and Soft Serve',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Sushi Nakazawa',
            location: {lat: 40.7318055, lng: -74.0066793},
            description: 'Sushi',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Kashkaval Garden',
            location: {lat: 40.7667648, lng: -73.9883826},
            description: 'Mediterranian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Peter Luger Steak House',
            location: {lat: 40.709823, lng: -73.9646557},
            description: 'Steak House',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Taqueria Tlaxcalli',
            location: {lat: 40.836269, lng: -73.8571387},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Pick a Bagel',
            location: {lat: 40.771934, lng: -73.9586679},
            description: 'Bagels',
            specialtiesDeals: "Get their meat sampler." ,
        }
    ];

    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    //get info from Foursquare api
    //add own API clientID and clientSecret for authentication
    var clientID ='SMMMQFPVXOQN05KSHJ0HNKXJKPVXVJQYL3AMCQ32U1JYCVYG';
    var clientSecret ='QWHLGFNXDLNMVFGXNJ5PYUDYNEQYTPOUBZ4K1FBCH2PUICFP';
    //format date for authentication
    var today = new Date();
    var todaydate = today.getDate();
    var todaydate = "" + todaydate;
    if (todaydate.length < 2) {
      todaydate = "0" + todaydate;
    }
    var date = today.getFullYear()+""+(today.getMonth()+1)+todaydate;

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      const position = locations[i].location;
      const title = locations[i].location_name;
      const description = locations[i].description;
      //    add specialties and deals that I input with the location
      const specialtiesDeals = locations[i].specialtiesDeals;

      var address = locations[i].address;


       var lat = position.lat;
       var lng = position.lng;

      //url to go to foursquare for json request
      var url =  'https://api.foursquare.com/v2/venues/search?ll='+lat+','+lng+'&client_id='+clientID+'&client_secret='+clientSecret+'&v='+date+'&query='+title

      var data = $.getJSON(url)
      .done(function(data) {
          var venue = data.response.venues[0]

          //adjust to foursquare's name, position, and type of restaurant and add their address
          var title1 = venue.name;
          var position1 = {lat: venue.location.lat, lng: venue.location.lng}
          var description1 = venue.categories["0"].name
          var address1 = venue.location.formattedAddress;

          // Create a marker per location, and put into markers array.
          var marker = new google.maps.Marker({
            map: map,
            position: position1,
            title: title1,
            specialtiesDeals: specialtiesDeals,
            animation: google.maps.Animation.DROP,
            id: i,
            description: description1,
            address: address1,
            errorMessage: "",
          });
          //add name of restaurant to UL
          addULofRestaurant(marker)
          // Push the marker to our array of markers.
          markers.push(marker);


          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
      })
      .fail(function() {

        var errorMessage = "There was an error with the Foursquare API pull"
        console.log( "error with foursquare API pull" );
        var marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
           specialtiesDeals: specialtiesDeals,
          animation: google.maps.Animation.DROP,
           id: i,
          description: description ,
          errorMessage: errorMessage,
        });
          //add name of restaurant to UL
           addULofRestaurant(marker)
          // Push the marker to our array of markers.
           markers.push(marker);


          // Create an onclick event to open an infowindow at each marker.
           marker.addListener('click', function() {
             populateInfoWindow(this, largeInfowindow);
           });
      });



    }

    document.getElementById('show-restaurants').addEventListener('click', showRestaurants);
    document.getElementById('hide-restaurants').addEventListener('click', hideRestaurants);
    document.getElementById('searchButton').addEventListener('click', searchRestaurants);

    //document.getElementsByTagName("IFRAME")[0].setAttribute("title", "Google-Map");
  }
  // This function populates the infowindow when the marker is clicked. We'll only allow
  // one infowindow which will open at the marker that is clicked, and populate based
  // on that markers position.
  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.

    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      //set content of infowindow with description, specialties, address, and title of restaurant

var setContentString = '<div class="popup">';
if (marker.title == null){
  setContentString = setContentString + '<p> There was an error with obtaining the Title of the Restaurant</p>'
} else {
  setContentString = setContentString + '<h1>'+marker.title+'</h1>'};
if (marker.description == null){
  setContentString = setContentString + '<p>'+marker.errorMessage+'</p><p> There was an error with obtaining the Type of Restaurant</p>'
} else {
  setContentString = setContentString + '<p>'+marker.errorMessage+'</p><p> Type: '+marker.description+'</p>'};
if (marker.specialtiesDeals == null){
  setContentString = setContentString + '<p> There was an error with obtaining the Specialties and Deals</p>'
} else {
  setContentString = setContentString + '<p> Specialties/Deals: '+marker.specialtiesDeals+'</p>'};
if (marker.address == null){
  setContentString = setContentString + '<p> There was an error with obtaining the address</p></div>'
} else {
  setContentString = setContentString + '<p> Address: '+marker.address+'</p></div>'};

      infowindow.setContent(setContentString);
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
      });
    }
  }
  // This function will loop through the markers array and display them all.
  function showRestaurants() {
    var bounds = new google.maps.LatLngBounds();
    //Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitbounds(bounds);


  }
  // This function will loop through the listings and hide them all.
  function hideRestaurants() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }
  // This function will loop through the listings and show only those that fit the search criteria from the input box
function searchRestaurants(){

  var searchRestaurant = document.getElementById("searchInput").value
  if (searchRestaurant === '') {
    window.alert('You must enter a city or a country');
  }
  else{

    for (var i = 0; i < markers.length; i++) {
      var starter = markers[i].title + markers[i].description + markers[i].address +  markers[i].specialtiesDeals

      var foundOrNot= starter.search(new RegExp(searchRestaurant, "i"));
      // alert(i + "   " + starter + "    " + result)

      if (foundOrNot<0){
        markers[i].setMap(null);
      }
      else{

        markers[i].setMap(map);
        markers[i].setAnimation(google.maps.Animation.BOUNCE);
        stopAnimations(markers[i]);
      }
    }
  }
}
//This function adds the restaurant to the UL
function addULofRestaurant(currentMarker) {

    var btn = document.createElement("li");
    btn.innerHTML  = currentMarker.title ;
    btn.setAttribute("class", "restaurantListUL");
    btn.setAttribute("onClick", 'searchRestaurantsSpecific("' +currentMarker.title+'")');
    document.getElementById("listOfRestaurantsUL").appendChild(btn);
}
//This function runs the search function for the restaurant that is clicked in the UL
function searchRestaurantsSpecific(RestaurantUL){
  document.getElementById("searchInput").value = RestaurantUL;
  searchRestaurants()
}
//This function stops the bouncing marker after 3 seconds
function stopAnimations(BouncingMarker) {
    setTimeout(function(){ setTimeout(function() {
        BouncingMarker.setAnimation(null);
    }, 3000);
});
}
