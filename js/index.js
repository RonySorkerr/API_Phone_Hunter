// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(data => console.log(data))

const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phnsCont');
    phoneContainer.innerText = '';

    // display show all button if there are more than 15 phones
    const showallbtn = document.getElementById('shwallbtn')
    if (phones.length > 15) {
        showallbtn.classList.remove('hidden')
    }
    else {
        showallbtn.classList.add('hidden')
    }

    phones = phones.slice(0, 15);
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
                <button onclick="shwDtls('${phone.slug}') " class="btn btn-primary mt-4">Show Details</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
    toggle(false);
}

const shwDtls = async (id) => {
    console.log('clicked', id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;-

    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
    console.log(phone)
    const phoneName = document.getElementById('phone_Dtls_name');
    phoneName.innerText = phone.name;

    const showDetailsContainer = document.getElementById
        ('showDtlsCntnr');
    showDetailsContainer.innerHTML = `
        <img src= "${phone.image}" alt= "">
        <p>Storage : ${phone?.mainFeatures?.storage}</p>
        <p>GPS : ${phone?.others?.GPS}</p>
        <></>
    `


    show_details_modal.showModal()

}

// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = '';
    toggle(true);
    loadPhones(searchText);
}

const toggle = (isLoading) => {
    const loader = document.getElementById('loader')
    if (isLoading) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden');
    }
}

const showall = () => {

}



loadPhones(13);