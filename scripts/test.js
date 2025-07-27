// const displayLoader = () => {
//     const petsContainer = document.getElementById('pets-container');
//     // const applePet = document.getElementsByClassName('apple')[0];
//     petsContainer.classList.add('loader');  // add loader styles
//     // applePet.classList.add('hidden');       // hide the .apple element
//     setTimeout(() => {
//         petsContainer.classList.remove('loader'); // remove loader styles
//         // applePet.classList.remove('hidden');      // show the .apple element
//     }, 2000);
// }
// const displayLoader = () => {
//     const petsContainer = document.getElementById('pets-container');
//     // Store the current pet elements (to restore later)
//     const existingPets = petsContainer.innerHTML
//     // Show the loader
//     petsContainer.innerHTML = `
//         <div class="flex justify-center items-center col-span-3 py-10">
//             <div class="loader border-4 border-gray-200 border-t-[#0E7A81] rounded-full w-12 h-12 "></div>
//         </div>
//     `;
//     // After 2 seconds, load pets again (or any filtered category)
//     setTimeout(() => {
//         // petsContainer.innerHTML = existingPets; // Optional: remove this if you use `loadPets()` or `loadCategoriesPets()`
//         loadCategoriesPets(); // uncomment this if you want to re-fetch all pets
//     }, 2000);
// }
// const displayLoader = () => {
//     const petsContainer = document.getElementById('pets-container');
//     // Store the current pet elements (to restore later)
//     const existingPets = petsContainer.innerHTML;
//     // Show the loader
//     petsContainer.innerHTML = `
//         <div class="flex justify-center items-center col-span-3 py-10">
//             <div class="loader border-4 border-gray-200 border-t-[#0E7A81] rounded-full w-12 h-12 animate-spin"></div>
//         </div>
//     `;
//     // After 2 seconds, load pets again (or any filtered category)
//     setTimeout(() => {
//         // petsContainer.innerHTML = existingPets; // Optional: remove this if you use `loadPets()` or `loadCategoriesPets()`
//         loadCategoriesPets(); // uncomment this if you want to re-fetch all pets
//     }, 2000);
// };
const numbers = [2,57,34,66,653,5,543,]
const numbers_dsc = [...numbers].sort(function(a,b) {return b - a})
console.log(numbers_dsc);



    // const sortByPrice = (pets) => {
    // const sort = pets.price.sort(function(a,b) {return b - a});
    // console.log(sort);

    // }

    // const sortPets = () => {
    //     const sortP =  pets.sort(function (a, b) { return b.price - a.price });
    //     console.log(sortP);
        
    //     pets.forEach((pet) => {
    //     // console.log(pet);
    //     const div = document.createElement('div');
    //     div.classList = 'p-5 space-y-2 border rounded-xl'
    //     div.innerHTML = `
    //         <img class='rounded-xl' src="${pet.image}" alt="">
    //             <p class="font-bold text-xl">${pet.pet_name}</p>
    //             <div class="flex space-x-2">
    //                 <img src="images/breed.png" alt="">
    //                     <p class="text-gray-600">Breed: ${pet.breed === null || pet.breed === undefined || !pet.breed ? 'Not Found' : pet.breed}</p>
    //             </div>
    //             <div class="flex space-x-2">
    //                 <img src="images/birth.png" alt="">
    //                     <p class="text-gray-600">Birth: ${pet.date_of_birth === null || pet.date_of_birth === undefined ? 'Not Found' : pet.date_of_birth

    //         }</p>
    //             </div>
    //             <div class="flex space-x-2">
    //                 <img src="images/gender.png" alt="">
    //                     <p class="text-gray-600">Gender: ${pet.gender === null || pet.date_of_birth === 'undefined' || !pet.gender ? 'Not Found' : pet.gender

    //         }</p>
    //             </div>
    //             <div class="border-b flex pb-2 space-x-2">
    //                 <img src="images/price.png" alt="">
    //                     <p class="text-gray-600">Price: ${pet.price === null || pet.date_of_birth === 'undefined' ? 'Not Found' : pet.price}$</p>
    //             </div>
    //             <div class="flex justify-between items-center mt-4">
    //                 <button class="pet-button">
    //                     <img src="images/like.png" alt="">
    //                 </button>
    //                 <button class="pet-button">Adopt</button>
    //                 <button onclick='loadDetails(${pet.petId}); ; ' class="pet-button">Details</button>
    //             </div>
    //             `


    //     petsContainer.append(div)
    // })

    //     return
    // }


//  const countDown = () => {
//     const countdownNumber = document.getElementById('countdown');
//     const countdown = 3;
//     countdownNumber.innerText = countdown;
//     setInterval(() => {
//         countdown--;
//         countdownNumber.innerText= countdown;
//         if(countdown = 0){
//             document.getElementById('adoptModal').classList.add('hidden')
//         }
//     }, 1000);
//  }
