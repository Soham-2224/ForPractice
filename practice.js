//Movement animation to happen
const content = document.querySelector('.content');
const container = document.querySelector('.container');
//Items
const center = document.querySelector('.center');
// const sneaker = document.querySelector('.sneaker img');
// const purchase = document.querySelector('.purchase button');
// const description = document.querySelector('.info h3');
// const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
//Animate in
container.addEventListener('mouseenter', (e) => {
    content.style.transition = "none";
    //popout
    center.style.transform = `translateZ(150px)`;
    // sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
    // description.style.transform = `translateZ(125px)`;
    // purchase.style.transform = `translateZ(100px)`;
    // sizes.style.transform = `translateZ(75px)`;
})

//Animate out
container.addEventListener('mouseleave', (e) => {
    content.style.transition = "all 0.5s ease";
    content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    center.style.transform = `translateZ(0px)`;
    // sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    // description.style.transform = `translateZ(0)`;
    // purchase.style.transform = `translateZ(0)`;
    // sizes.style.transform = `translateZ(0)`;
})