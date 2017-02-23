//For less than 10, turn integers from 1 to 01, 2 to 02 ...
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

//var photos  = [
//    {imgNumber: 1,
//    title: 'Hay Bales',
//    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
//    },
//    {imgNumber: 2,
//    title: 'Lake',
//    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
//    },
//    {imgNumber: 3,
//    title: 'Canyon',
//    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
//    },
//    {imgNumber: 4,
//    title: 'Iceberg',
//    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
//    },
//    {imgNumber: 5,
//    title: 'Desert',
//    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
//    },
//    {imgNumber: 6,
//    title: 'Fall',
//    caption: "Fall is coming, I love when the leaves on the trees start to change color."
//    },
//    {imgNumber: 7,
//    title: 'Plantation',
//    caption: "I drove past this plantation yesterday, everything is so green!"
//    },
//    {imgNumber: 8,
//    title: 'Dunes',
//    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
//    },
//    {imgNumber: 9,
//    title: 'Countryside Lane',
//    caption: "We enjoyed a quiet stroll down this countryside lane."
//    },
//    {imgNumber: 10,
//    title: 'Sunset',
//    caption: "Sunset at the coast! The sky turned a lovely shade of orange."
//    },
//    {imgNumber: 11,
//    title: 'Cave',
//    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
//    },
//    {imgNumber: 12,
//    title: 'Bluebells',
//    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
//    },
//
//];

// //Run through the array of photo data, taking the imgNumber, converting it to dual digit format and getting the image thumbnail as well as the link src photo. Append them together and send to gallary. 
// for ( var i = 0; i < photos.length; i+=1) {
//
// var imgFileNo = pad(photos[i]['imgNumber']);
//
// var thumbnailLink = "<a href='img/" + imgFileNo + ".jpg'</a>"
//
// $(thumbnailLink).attr('title', "photos[i]['title']");
//
// var thumbnailImg = "<img src='img/thumbnails/" + imgFileNo + ".jpg'>";
//
// var complete = $(thumbnailLink).append(thumbnailImg);
// $('.Gallery').append(complete);
// }
//
// //For thumbnailLink, we have to attach title and caption in there as well. 