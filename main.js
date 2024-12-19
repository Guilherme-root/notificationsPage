const markAll = document.querySelector('#mark-all');
const number = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

for(const el of posts){
    el.addEventListener("click", () => {
        el.querySelector('.not-read').classList.remove('not-read');
        updateNotifications();
    })
}

markAll.addEventListener("click", () => {
    const notReadElements = document.querySelectorAll('.not-read');
    for (const el of notReadElements) {
        el.classList.remove('not-read')
    }
    updateNotifications();
})

const updateNotifications = () => { 
    const readElementsActual = document.querySelectorAll('.not-read')
    number.innerText = readElementsActual.length;
}