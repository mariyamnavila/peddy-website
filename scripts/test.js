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
