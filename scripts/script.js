const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayPets(data.pets))
        .catch(err => console.log(err))
}

const loadDetails = (petId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
        .catch(err => console.log(err))

}

const loadCategoriesPets = (categoriesId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoriesId}`)
        .then(res => res.json())
        .then(data => displayPets(data.data))
        .catch(err => console.log(err))
}


const displayLoader = () => {
    const petsContainer = document.getElementById('pets-container');

    // Store the current pet elements (to restore later)
    // const existingPets = petsContainer.innerHTML;

    // Show the loader
    petsContainer.innerHTML = `
        <div class="flex justify-center items-center col-span-3 py-10">
            <div class="loader border-4 border-gray-200 border-t-[#0E7A81] rounded-full w-12 h-12 animate-spin"></div>
        </div>
    `;

    // After 2 seconds, load pets again (or any filtered category)
    // setTimeout(() => {
    //     // petsContainer.innerHTML = existingPets; // Optional: remove this if you use `loadPets()` or `loadCategoriesPets()`
    //     loadCategoriesPets(); // uncomment this if you want to re-fetch all pets
    // }, 2000);
};


const displayDetails = (petDetails) => {
    const modal = document.getElementById('modal-container');
    modal.innerHTML = `
        <img class="mb-6 w-full rounded-xl" src="${petDetails.petData.image}" alt="">
            <p class="text-2xl font-bold mb-6">${petDetails.petData.pet_name}</p>
            <div class="grid grid-cols-2 border-b mb-3 pb-3">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <img src="images/breed.png" alt="">
                            <p class="text-gray-600">Breed: ${petDetails.petData.breed === null || petDetails.petData.breed === undefined || !petDetails.petData.breed ? 'Not Found' : petDetails.petData.breed} </p>
                    </div>
                    <div class="flex space-x-2">
                        <img src="images/gender.png" alt="">
                            <p class="text-gray-600">Gender: ${petDetails.petData.gender === null || petDetails.petData.gender === undefined || !petDetails.petData.gender ? 'Not Found' : petDetails.petData.gender}</p>
                    </div>
                    <div class="flex space-x-2">
                        <img src="images/gender.png" alt="">
                            <p class="text-gray-600">Vaccinated status: ${petDetails.petData.vaccinated_status === null || petDetails.petData.vaccinated_status === undefined || !petDetails.petData.vaccinated_status ? 'Not given' : petDetails.petData.vaccinated_status}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <img src="images/birth.png" alt="">
                            <p class="text-gray-600">Birth: ${petDetails.petData.date_of_birth === null || petDetails.petData.date_of_birth === undefined || !petDetails.petData.date_of_birth ? 'Not Found' : petDetails.petData.date_of_birth}</p>
                    </div>
                    <div class="flex pb-2 space-x-2">
                        <img src="images/price.png" alt="">
                            <p class="text-gray-600">Price: ${petDetails.petData.price === null || petDetails.petData.price === undefined || !petDetails.petData.price ? 'Not Found' : petDetails.petData.price} $</p>
                    </div>
                </div>
            </div>
            <div class="space-y-2">
                <p class="font-semibold">Details Information</p>
                <p class="text-gray-600">${petDetails.petData.pet_details}</p>
            </div>
    `
    console.log(petDetails);


    document.getElementById('customModal').showModal();
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((category) => {
        // console.log(category);
        const div = document.createElement('div')
        div.innerHTML = `
            <button id='categoryBtn' onclick="displayLoader(); setTimeout(() => loadCategoriesPets('${category.category}'), 2000);" class="button flex items-center mx-auto">
                <img class='w-[56px] h-[56px] mr-4' src='${category.category_icon}' />
                ${category.category}
            </button>
            `
        categoryContainer.append(div)
    });

}

const displayPets = (pets) => {
    // console.log(pets);
    const petsContainer = document.getElementById('pets-container');
    petsContainer.innerHTML = '';
    pets.forEach((pet) => {
        // console.log(pet);
        const div = document.createElement('div');
        div.classList = 'p-5 space-y-2 border rounded-xl'
        div.innerHTML = `
            <img class='rounded-xl' src="${pet.image}" alt="">
                <p class="font-bold text-xl">${pet.pet_name}</p>
                <div class="flex space-x-2">
                    <img src="images/breed.png" alt="">
                        <p class="text-gray-600">Breed: ${pet.breed === null || pet.breed === undefined || !pet.breed ? 'Not Found' : pet.breed}</p>
                </div>
                <div class="flex space-x-2">
                    <img src="images/birth.png" alt="">
                        <p class="text-gray-600">Birth: ${pet.date_of_birth === null || pet.date_of_birth === undefined ? 'Not Found' : pet.date_of_birth

            }</p>
                </div>
                <div class="flex space-x-2">
                    <img src="images/gender.png" alt="">
                        <p class="text-gray-600">Gender: ${pet.gender === null || pet.date_of_birth === 'undefined' || !pet.gender ? 'Not Found' : pet.gender

            }</p>
                </div>
                <div class="border-b flex pb-2 space-x-2">
                    <img src="images/price.png" alt="">
                        <p class="text-gray-600">Price: ${pet.price === null || pet.date_of_birth === 'undefined' ? 'Not Found' : pet.price}$</p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="pet-button">
                        <img src="images/like.png" alt="">
                    </button>
                    <button class="pet-button">Adopt</button>
                    <button onclick='loadDetails(${pet.petId}); ; ' class="pet-button">Details</button>
                </div>
                `


        petsContainer.append(div)
    })
}
loadPets()
loadCategories()