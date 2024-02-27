// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(data => console.log(data))

const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
    // console.log(phones)
    // console.log(data.data[0].phone_name);

}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phnsCont');
    phoneContainer.innerText = '';
    phones.forEach(phone => {
        // console.log(phone)
        /**
         * 01. 
         */
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-teal-400 shadow-xl`;
        phoneCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

// handle search button
const handleSearch = () =>{
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
    loadPhones(searchText)
}

// loadPhones();