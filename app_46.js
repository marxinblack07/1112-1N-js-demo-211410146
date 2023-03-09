//  Alias of Document.
const doc = document;
//  Configure small Database.
const menu = [
    {
        id: 1,
        title:  "buttermilk pancakes",
        price:  15.99,
        category:   "breakfast",
        image:  "./images/item-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-1.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 2,
        title:  "dinner double",
        price:  13.99,
        category:   "dinner",
        image:  "./images/item-2.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-2.jpeg?t=2023-03-09T11%3A02%3A16.188Z",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 3,
        title:  "godzilla milkshake",
        price:  6.99,
        category:   "shakes",
        image:  "./images/item-3.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-3.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 4,
        title:  "marshmallow",
        price:  3.99,
        category:   "dessert",
        image:  "./images/my-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/my-1.jpg?t=2023-03-09T11%3A08%3A08.499Z",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 5,
        title:  "Hamburger",
        price:  10.99,
        category:   "lunch",
        image:  "./images/my-2.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/my-2.jpg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 6,
        title:  "steaks",
        price:  25.99,
        category:   "dinner",
        image:  "./images/my-3.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/my-3.jpg?t=2023-03-09T11%3A09%3A59.836Z",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 7,
        title:  "buttermilk pancakes",
        price:  15.99,
        category:   "breakfast",
        image:  "./images/item-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-1.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 8,
        title:  "buttermilk pancakes",
        price:  15.99,
        category:   "breakfast",
        image:  "./images/item-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-1.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 9,
        title:  "buttermilk pancakes",
        price:  15.99,
        category:   "breakfast",
        image:  "./images/item-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-1.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    },
    {
        id: 10,
        title:  "buttermilk pancakes",
        price:  15.99,
        category:   "breakfast",
        image:  "./images/item-1.jpeg",
        remote_image:   "https://lkzqmneikhvduesdatyd.supabase.co/storage/v1/object/public/demo-46/1N_img/w4/item-1.jpeg",
        desc:   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, atque?",
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
    displayBtnItems(menu);
    displayMenuItems(menu);
});

//Function Define.
const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
        return `<article class="menu-item">
            <img src=${item.remote_image} alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
      </article>`
    });
    //  Join let things in array turn into string.
    // console.log('Before Join: ', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('After Join: ', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

const displayBtnItems = (menu) => {
    let displayMenu = [
        "all", ...new Set(menu.map((item) => item.category))].map(
            (item)=>{
                return `
                <button type="button" class="filter-btn" data-id="${item}">${item}</button>
                `
    })
    // let displayMenu = menu.map((item) => {
    //     console.log(item);
    //     return `
    //         <button type="button" class="filter-btn" data-id="${item}">${item}</button>
    //     `
    // });
    console.log('Before Join: ', displayMenu);
    btnContainer.innerHTML = displayMenu.join('');
    console.log('After Join: ', displayMenu.join(''));
}