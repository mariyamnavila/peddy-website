const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach((category) => {
        console.log(category);
        const div = document.createElement('div')
        div.innerHTML=`
        <button class="button flex items-center">
        <img class='w-[56px] h-[56px] mr-4' src='${category.category_icon}'/>
        ${category.category}
        </button>
        `

        // const buttons = document.createElement('button')
        // buttons.innerText =`${category.category}`
        categoryContainer.append(div)

    });

}


loadCategories()