var friends = [
  {
    "id": 0,
    "avatar": "https://via.placeholder.com/100?text=avatar",
    "firstName": "Adrian",
    "lastName": "Norman"
  },
  {
    "id": 1,
    "avatar": "https://via.placeholder.com/100?text=avatar",
    "firstName": "Gail",
    "lastName": "Norton"
  },
  {
    "id": 2,
    "avatar": "https://via.placeholder.com/100?text=avatar",
    "firstName": "Molina",
    "lastName": "Rodgers"
  },
  {
    "id": 3,
    "avatar": "https://via.placeholder.com/100?text=avatar",
    "firstName": "Adams",
    "lastName": "Parrish"
  },
  {
    "id": 4,
    "avatar": "https://via.placeholder.com/100?text=avatar",
    "firstName": "Mercer",
    "lastName": "Wiggins"
  }
];

var photos = {
  "0": [
    {
      "id": 10,
      "url": "https://via.placeholder.com/360x680?text=photo 1 for Adrian Norman"
    },
    {
      "id": 11,
      "url": "https://via.placeholder.com/360x680?text=photo 2 for Adrian Norman"
    },
    {
      "id": 12,
      "url": "https://via.placeholder.com/360x680?text=photo 3 for Adrian Norman"
    }
  ],
  "1": [
    {
      "id": 20,
      "url": "https://via.placeholder.com/360x680?text=photo 1 for Gail Norton"
    },
    {
      "id": 21,
      "url": "https://via.placeholder.com/360x680?text=photo 2 for Gail Norton"
    },
    {
      "id": 22,
      "url": "https://via.placeholder.com/360x680?text=photo 3 for Gail Norton"
    }
  ],
  "2": [
    {
      "id": 30,
      "url": "https://via.placeholder.com/360x680?text=photo 1 for Molina Rodgers"
    },
    {
      "id": 31,
      "url": "https://via.placeholder.com/360x680?text=photo 2 for Molina Rodgers"
    },
    {
      "id": 32,
      "url": "https://via.placeholder.com/360x680?text=photo 3 for Molina Rodgers"
    }
  ],
  "3": [
    {
      "id": 40,
      "url": "https://via.placeholder.com/360x680?text=photo 1 for Adams Parrish"
    },
    {
      "id": 41,
      "url": "https://via.placeholder.com/360x680?text=photo 2 for Adams Parrish"
    },
    {
      "id": 42,
      "url": "https://via.placeholder.com/360x680?text=photo 3 for Adams Parrish"
    }
  ],
  "4": [
    {
      "id": 50,
      "url": "https://via.placeholder.com/360x680?text=photo 1 for Mercer Wiggins"
    },
    {
      "id": 51,
      "url": "https://via.placeholder.com/360x680?text=photo 2 for Mercer Wiggins"
    },
    {
      "id": 52,
      "url": "https://via.placeholder.com/360x680?text=photo 3 for Mercer Wiggins"
    }
  ]
}


function getRandomElement(arr) {
   var rand = Math.floor(Math.random() * arr.length);
   var value = arr.map(item => item.firstName)
   var result = value[rand];
   return result;

  function getNextPhoto (result) {
    var rand2 = Math.floor(Math.random() * photos.length);
    var value2 = photos.map(item => item.url)
    var result2 = value2[rand2];
    return result2;
  };

  getNextPhoto();


}



console.log(getRandomElement(friends));
