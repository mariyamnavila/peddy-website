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

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((category) => {
        // console.log(category);
        const div = document.createElement('div')
        div.innerHTML = `
        <button class="button flex items-center">
        <img class='w-[56px] h-[56px] mr-4' src='${category.category_icon}'/>
        ${category.category}
        </button>
        `
        categoryContainer.append(div)
    });

}

const displayPets = (pets) => {
    // console.log(pets);
    const petsContainer = document.getElementById('pets-container')
    pets.forEach((pet) => {
        // console.log(pet);
        const div = document.createElement('div');
        div.classList='p-5 space-y-2 border rounded-xl'
        div.innerHTML = `
            <img class='rounded-xl' src="${pet.image}" alt="">
                <p class="font-bold text-xl">${pet.pet_name}</p>
                <div class="flex space-x-2">
                    <img src="images/breed.png" alt="">
                        <p class="text-gray-600">Breed: ${pet.breed}</p>
                </div>
                <div class="flex space-x-2">
                    <img src="images/birth.png" alt="">
                        <p class="text-gray-600">Birth: ${pet.date_of_birth}</p>
                </div>
                <div class="flex space-x-2">
                    <img src="images/gender.png" alt="">
                        <p class="text-gray-600">Gender: ${pet.gender}</p>
                </div>
                <div class="border-b flex pb-2 space-x-2">
                    <img src="images/price.png" alt="">
                        <p class="text-gray-600">Price: ${pet.price}$</p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="pet-button">
                        <img src="images/like.png" alt="">
                    </button>
                    <button class="pet-button">Adopt</button>
                    <button class="pet-button">Details</button>
                </div>
        `


        petsContainer.append(div)
    })
}

loadPets()
loadCategories()