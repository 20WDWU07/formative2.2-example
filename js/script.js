$(document).ready(function(){

// ==========================================================
// Declaration of an array of objects
// ==========================================================
var cats = [
      {
        id : 101,
        name : 'Furry',
        color : 'Brown',
        breed : 'Siamese',
        behaviour : 'Agressive',
        photo : 'siamese1.jpg',
        description : 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. ' +
        'Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand ' +
        '(formerly known as Siam), the original Siamese became one of the most popular breeds in Europe ' +
        'and North America in the 19th century. ',
        tagWords : ['furry', 'brown', 'siamese', 'asian', 'wichianmat landrace','thailand', 'siam', 'europe','north america','19th century']

      },
      {
        id : 102,
        name : 'Whisky',
        color : 'White',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian1.jpg',
        description :   'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. ' +
          'It is also known as the "Persian Longhair" in the English-speaking countries. The first ' +
          'documented ancestors of the Persian were imported into Italy from Iran (historically known ' +
          '  as Persia in the west) around 1620.[1][2] Recognized by the cat fancy since the late 19th ' +
          '  century, it was developed first by the English, and then mainly by American breeders after ' +
          '  the Second World War. Some cat fancier organizations\' breed standards subsume the Himalayan ' +
          '  and Exotic Shorthair as variants of this breed, while others treat them as separate breeds. ',
        tagWords : ['whisky','white','persian','19th century']

      },

      {
        id : 203,
        name : 'Coony',
        color : 'Brown',
        breed : 'Maine Coon',
        behaviour : 'Cool',
        photo : 'maine-coon2.jpeg',
        description : 'The Maine Coon is the largest domesticated cat breed. It has a distinctive '+
        'physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America,' +
         'specifically native to the US state of Maine,[3] where it is the official state cat.',
        tagWords : ['coony', 'brown', 'maine coon', 'cool' ]

      },

      {
        id : 103,
        name : 'Raggy',
        color : 'White',
        breed : 'Rag Doll',
        behaviour : 'Agressive',
        photo : 'ragdoll2.jpg',
        description : 'The Ragdoll is a cat breed with a color point coat and blue eyes. ' +
        'They are large and muscular semi-longhair cats with a soft and silky coat. Developed ' +
        'by American breeder Ann Baker in the 1960s, they are best known for their docile and placid ' +
        ' temperament and affectionate nature. The name "Ragdoll" is derived from the tendency of individuals ' +
        'from the original breeding stock to go limp and relaxed when picked up',
        tagWords : ['raggy', 'white', 'ragdoll', 'rag doll']

      },
      {
        id : 204,
        name : 'Jack',
        color : 'Brown & White',
        breed : 'Maine Coon',
        behaviour : 'Cool',
        photo : 'maine-coon3.jpeg',
        description : '',
        tagWords : ['jack','brown', 'white']

      },
      {
        id : 106,
        name : 'Frank',
        color : 'Brown',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian2.jpeg',
        description : '',
        tagWords : ['brown']
      },
      {
        id : 104,
        name : 'Coony',
        color : 'Black',
        breed : 'Maine Coon',
        behaviour : 'Friendly',
        photo : 'maine-coon1.jpeg',
        description : '',
        tagWords : ['black','friendly']

      },
      {
        id : 205,
        name : 'Dolly',
        color : 'Brown & Black',
        breed : 'Rag Doll',
        behaviour : 'Lazy',
        photo : 'ragdoll1.jpeg',
        description : '',
        tagWords : ['brown','black','dolly']

      },
      {
        id : 109,
        name : 'Ferero',
        color : 'white',
        breed : 'Siamese',
        behaviour : 'Lazy',
        photo : 'siamese3.jpeg',
        description : '',
        tagWords : ['white','siamese','siam']
      },
      {
        id : 210,
        name : 'Foresty',
        color : 'Brown',
        breed : 'Rag Doll',
        behaviour : 'Cool',
        photo : 'ragdoll3.jpeg',
        description : '',
        tagWords : ['brown','cool']

      },
      {
        id : 107,
        name : 'Puffy',
        color : 'White',
        breed : 'Persian',
        behaviour : 'Lazy',
        photo : 'persian3.jpeg',
        description : '',
        tagWords : ['white','persian']
      },
      {
        id : 105,
        name : 'Siam',
        color : 'Black & White',
        breed : 'Siamese',
        behaviour : 'Friendly',
        photo : 'siamese2.jpeg',
        description : '',
        tagWords : ['black','white','siamese','siam','friendly']

      }

];




// ==========================================================
// Function call to display all items
// ==========================================================
$('input[type=checkbox]').prop('checked',false);
allCats(); //displays all items on home page

$('#refresh').click(function(){
  cats.sort(function(a,b){
   var itemA = a.id, itemB = b.id;
   if (itemA < itemB){
     return -1;
   }
   if (itemA > itemB){
     return 1;
   }
   console.log(cats);
 });
 $('input[type=checkbox]').prop('checked',false);
 allCats();//displays all items on home page
});
//   $('input[type=checkbox]').prop('checked',false);
//   allCats();
// });



// ==========================================================
// Display items as per user's input - breed filter call
// ==========================================================

$('#showChoice').click(function(){
  var inputArray = [];

  // read input of users and store
  var persian = $('#persian:checked').val();
  var ragDoll = $('#ragDoll:checked').val();
  var maineCoon = $('#maineCoon:checked').val();
  var siamese = $('#siamese:checked').val();

  //push user's choice into an array
  if (persian === 'checked') {
        inputArray.push('Persian');
        console.log(inputArray);
  }

  if (maineCoon === 'checked') {
        inputArray.push('Maine Coon');
        console.log(inputArray);
  }

  if (siamese === 'checked') {
        inputArray.push('Siamese');
        console.log(inputArray);
  }

   if (ragDoll === 'checked'){
      inputArray.push('Rag Doll');
      console.log(inputArray);
  }

  //call the function to filter user's choice
  filteredCats(inputArray);

});//showChoice click function



// ==========================================================
// Behaviour filter call
// ==========================================================

$('#showSelection').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  var behaviour = $('#behaviour').val();
  console.log(behaviour);
  filteredBehaviour(behaviour);
});

// ==========================================================
// Search by word
// ==========================================================
$('#searchWord').click(function(){
  $(this).val('');
});

$('#searchIcon').click(function(){
  $('input[type=checkbox]').prop('checked',false);
  var searchWord = $('#searchWord').val();
  console.log(searchWord);
  filterByWord(searchWord);

});
// ==========================================================
// Sort by selection
// ==========================================================
$('#sortBtn').change(function(){
  $('input[type=checkbox]').prop('checked',false);
  var sortType = ($('#sortBtn').val()).toLowerCase();
  console.log(sortType);

  if ((sortType === 'name') || (sortType === 'color') ||(sortType === 'breed') || (sortType === 'behaviouraz')) {
   sortByAscending(sortType);//calling function
  }

  if ((sortType === 'nameza') || (sortType === 'colorza') ||(sortType === 'breedza') || (sortType === 'behaviourza')) {
   sortByDescending(sortType);//calling function
  }


  //recursive function
  // cats.sort(function(a,b){
  //   // compare 2 consecutive objects' name property
  //   var itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
  //   if (itemA < itemB){
  //     return -1; //false
  //   }
  //   if (itemA > itemB){
  //     return 1; //true
  //   }
  //
  // });
  // console.log(cats);

}); //sortBtn.change()

//function definition
function sortByAscending(dummySortType){
  console.log(dummySortType);
  cats.sort(function(a,b){
    // compare 2 consecutive objects' name property

    switch (dummySortType){
      case 'name':
            console.log('name');
            var itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
            break;
      case 'breed':
            console.log('breed');
            var itemA = a.breed.toLowerCase(), itemB = b.breed.toLowerCase();
            break;
      case 'color':
            console.log('color');
            var itemA = a.color.toLowerCase(), itemB = b.color.toLowerCase();
            break;
      case 'behaviouraz':
            console.log('behaviour');
            var itemA = a.behaviour.toLowerCase(), itemB = b.behaviour.toLowerCase();
            break;
      default :
            console.log('not matching');
    }//switch

    if (itemA < itemB){
      return -1; //false
    }
    if (itemA > itemB){
      return 1; //true
    }

  });//cats.sort()
      console.log(cats);
      allCats();

}//sortBySelection

//function definition
function sortByDescending(dummySortType){
  console.log(dummySortType);
  cats.sort(function(a,b){
    // compare 2 consecutive objects' name property

    switch (dummySortType){
      case 'nameza':
            console.log('name');
            var itemA = a.name.toLowerCase(), itemB = b.name.toLowerCase();
            break;
      case 'breedza':
            console.log('breed');
            var itemA = a.breed.toLowerCase(), itemB = b.breed.toLowerCase();
            break;
      case 'colorza':
            console.log('color');
            var itemA = a.color.toLowerCase(), itemB = b.color.toLowerCase();
            break;
      case 'behaviourza':
            console.log('behaviour');
            var itemA = a.behaviour.toLowerCase(), itemB = b.behaviour.toLowerCase();
            break;
      default :
            console.log('not matching');
    }//switch

    if (itemA > itemB){
      return -1; //false
    }
    if (itemA < itemB){
      return 1; //true
    }

  });//cats.sort()
      console.log(cats);
      allCats();

}//sortBySelection




// ==========================================================
// Function to display all items
// ==========================================================

function allCats(){

  var i = 0;
  $('#result').text(' ');
  for (i = 0 ; i < cats.length; i++){

    // own style
    // $('#result').append('<div class="row clearfix border border-danger m-2 p-2">' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<h1>' + cats[i].name +   '</h1>' +
    //                       '<h2>' + cats[i].breed + '</h2>' +
    //                        '<h3>' + cats[i].color + '</h3>' +
    //                        '<h5>' + cats[i].behaviour + '</h5>' +
    //
    //                     '</div>' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
    //                     '</div>' +
    //
    //                     '</div>'
    // ); //append ends here
    //

    //bootstrap cards to $display
    displayCards(i);
    cardModal();
  } //end of for loop
  } //end of allCats function



// ==========================================================
// Modal
// ==========================================================

  function cardModal(){

    $('.moreDetails').click(function(){
      $('#imageCat').text(' '); //clearing the content
      console.log(this.id);
      var breed = '';
      var i=0;
      for (i = 0; i < cats.length; i++) {
        console.log(parseInt(this.id), cats[i].id);
        if (parseInt(this.id) === cats[i].id) {
          breed = cats[i].breed;
          console.log(breed);
          console.log(cats[i].id, cats[i].name, cats[i].breed);
            $('#exampleModalLabel').text(cats[i].breed);
            //append will keep  adding to existing content, so clear if you want
            //or else use html to replace existing content
            $('#imageCat').append('<img class="img-fluid" src="images/' + cats[i].photo + '" alt="' + cats[i].breed + '"/>');


        } //end of if statement


      }//end of for statement
      console.log(breed);
      catCarousel(breed);





    }); // end of moreDetails click event

  } //cardModal



// ==========================================================
// Carousel
// ==========================================================

  function catCarousel(catBreed){
    var breedArray = [];
    $('#imageCat').text('');
    for (i = 0; i < cats.length; i++) {

      if (cats[i].breed === catBreed) {
        breedArray.push(cats[i].photo);
        // console.log(cats[i].description);
        $('#imageCat').append('<p class="text-danger lead">' + cats[i].description + '<p>' );
      } //end of if
    } //end of for

    console.log(breedArray);
    $('#imageCat').append(
      '  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
      '  <ol class="carousel-indicators">' +
      '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
      '    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
      '    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
      '  </ol>' +
      '  <div class="carousel-inner">' +
      '    <div class="carousel-item active">' +
      '      <img class="d-block w-100" src="images/' + breedArray[0] + '" alt="First slide">' +
      '    </div>' +
      '    <div class="carousel-item">' +
      '      <img class="d-block w-100" src="images/' + breedArray[1] + '"alt="Second slide">' +
      '    </div>' +
      '    <div class="carousel-item">' +
      '      <img class="d-block w-100" src="images/' + breedArray[2] + '" alt="Third slide">' +
      '    </div>' +
      '  </div>' +
      '  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
      '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
      '    <span class="sr-only">Previous</span>' +
      '  </a>' +
      '  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
      '    <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
      '    <span class="sr-only">Next</span>' +
      '  </a>' +
      '</div>'); //end of imageCat html

  } //end of catCarousel



// ==========================================================
// Filter by cat type
// ==========================================================

function filteredCats(catBreed){
  console.log(catBreed);
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < cats.length; i++) {
    for (j = 0 ; j < catBreed.length; j++){
      if (catBreed[j] === cats[i].breed) {
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filteredCats


// ==========================================================
// Filter by cat behaviour
// ==========================================================

function filteredBehaviour(catBehaviour){
  console.log(catBehaviour);
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < cats.length; i++) {
    for (j = 0 ; j < catBehaviour.length; j++){
      console.log(catBehaviour[j], cats[i].behaviour)
      if (catBehaviour[j] === cats[i].behaviour) {
        displayCards(i);
        cardModal();

      }//if

    }//for j
  }//for i
}//filteredBehaviour

// ==========================================================
// Filter by word
// ==========================================================
function filterByWord(word){
  console.log(word);
  var i,j;
  $('#result').text('');
  for (i = 0 ; i < cats.length; i++){
    for (j = 0; j < cats[i].tagWords.length; j++){

      if (word.toLowerCase() === cats[i].tagWords[j]){
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filterByWord

// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#result').append( '<div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center">' +
                          '<div class="card text-danger" >' +
                             '<img src="images/' + cats[j].photo + '" class="card-img-top" alt="' + cats[j].breed + '">' +
                             '<div class="card-body">' +
                              '<h1 class="card-title">'+ cats[j].breed + '</h1>' +
                              '<p class="card-text text-dark">Name : ' + ' ' + '<span class="text-primary">' + cats[j].name + '</span> <br></p>' +
                               '<p class="card-text text-dark">Color : ' + ' ' + '<span class="text-primary">' + cats[j].color + '</span> <br></p>' +
                               '<p class="card-text text-dark">Behaviour : ' + ' ' + '<span class="text-primary">' + cats[j].behaviour + '</span> <br></p>' +

                              '<button id="' + cats[j].id + '" type="button" class="btn btn-primary moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + cats[j].breed + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here


  }; //displayCards



}); //document.ready()
