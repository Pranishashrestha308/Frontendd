// const Kalinchwok = document.getElementById("Kalinchwok");
// const navlinks = document.getElementById("navlinks");

// Kalinchwok.addEventListener('click',()=>{navlinks.classList.toggle('active')});


// const text = "Welcome to Kalinchwok Resort";
// const typedtext = document.getElementById('typed-text');
// let index = 0;
// function type(){
//     if (index < text.length){
//         typedtext.textContent += text.charAt(index);
//         index++;
//         setTimeout(type,150);
// }
// }
// type();
// projects
const projects = [
{
    image:"kuriii.jpg",
    title : "Kuri village",
    description : "Kuri village, located in the Dolakha district of Nepal.",
    src :"http://127.0.0.1:5500/Calculator/index.html",
},
{
    image : "gaurishankar.jpg",
    title : " Gaurishankar Himal",
    description : "Gaurishankar Himal, located in the Dolakha district of Nepal.", 
    src :"http://127.0.0.1:5500/Calculator/index.html",
    
},
{
    image : "tshorolpa.jpg",
    title : "Tsho Rolpa Lake",
    description : "Tsho Rolpa Lake, situated at an elevation of approximately 4,580 meters.",
     src :"http://127.0.0.1:5500/Calculator/index.html",
},
]
const container = document.getElementById("project");
projects.forEach(project=>{
    const item = document.createElement("div");
    item.className = "project-item";
    item.innerHTML = `
    <img src = "${project.image}"alt="${project.title}"/>
    <h3>${project.title}</h3>
    <p>${ project.description}</p>
    <a href="${ project.src}">view.Project</a>
    `;
    container.appendChild(item);
});
const town=[
    {
        image : "kuriii.jpg",
        title : "Kuri village",
        description : "Kuri village, located in the Dolakha district of Nepal."
    },
    {
        image : "gaurishankar.jpg",
        title : "Gaurishankar Himal",
        description : "Gaurishankar Himal, located in the Dolakha district of Nepal."
    },
]
const conatiners = document.getElementById("town");
towns.forEach(town=>{
    const item = document.createElement("div");
    item.className = "towns";
    item.innerHTML = `
    <img src ="${towns.image}"alt="${towns.title}"/>
    <h3>${towns.title}</h3>
    <p>${towns.description}</p>
    `;
    containers .appendChild(item);
});
    
   
