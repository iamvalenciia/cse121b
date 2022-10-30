/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let juanValencia = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
juanValencia['name'] = 'Juan Valencia'
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
juanValencia['photo'] = 'images/rsz_juanv.jpg'
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
juanValencia['favoriteFoods'] = ['Corviche','Encebollado','Aborrajado']
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
juanValencia['hobbies'] = ['Editing Videos','Watch Documentaries','Solve Problems']
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
juanValencia['placesLived'] = [
    {place:'Esmeraldas', length:'20 years'},
    {place:'Honduras', length:'1 year'},
    {place:'Quito', length:'1 year'}
];


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = juanValencia['name'];
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', juanValencia['photo']);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('alt', juanValencia['name']);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
favoriteFoodsCorviche = document.createElement('li'); 
favoriteFoodsCorviche.textContent = juanValencia['favoriteFoods'][0]; 
document.querySelector('#favorite-foods').appendChild(favoriteFoodsCorviche);

favoriteFoodsEncebollado = document.createElement('li'); 
favoriteFoodsEncebollado.textContent = juanValencia['favoriteFoods'][1]; 
document.querySelector('#favorite-foods').appendChild(favoriteFoodsEncebollado);

favoriteFoodsAborrajado = document.createElement('li'); 
favoriteFoodsAborrajado.textContent = juanValencia['favoriteFoods'][2]; 
document.querySelector('#favorite-foods').appendChild(favoriteFoodsAborrajado);


// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

hobbiesEdit = document.createElement('li'); 
hobbiesEdit.textContent = juanValencia['hobbies'][0]; 
document.querySelector('#hobbies').appendChild(hobbiesEdit);

hobbiesDocumentary = document.createElement('li'); 
hobbiesDocumentary.textContent = juanValencia['hobbies'][1]; 
document.querySelector('#hobbies').appendChild(hobbiesDocumentary);

hobbiesSolveProblems = document.createElement('li'); 
hobbiesSolveProblems.textContent = juanValencia['hobbies'][2]; 
document.querySelector('#hobbies').appendChild(hobbiesSolveProblems);

// Step 8: For each object in the <em>placesLived</em> property:
juanValencia['placesLived'].forEach((placesLived) => {

    // - Create an HTML <dt> element and put its place property in the <dt> element
    let placesLivedPlace = document.createElement('dt'); //creating the element
    placesLivedPlace.textContent = placesLived.place; //This is accessing an object property in our array
   
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placesLived.length;



    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placesLivedPlace); //Let's display this by grabbing the ID from our HTML
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})