
class Project{
    constructor(title,link,sourceCode){
        this.title = title;
        this.link = link;
        this.sourceCode = sourceCode;
    }
}

const projectArray = [];

projectArray.push(new Project("Unsplash Image Search Engine","Pages/UnsplashProject/index.html","https://github.com/adarshrangare/"));
projectArray.push(new Project("Shopping Cart","Pages/ShoppingCart/index.html","https://github.com/adarshrangare/"));
projectArray.push(new Project("Digital Stopwatch","Pages/Stopwatch/index.html","https://github.com/adarshrangare/"));

console.log(projectArray);

const container = document.querySelector(".container");
let count =0;
function displayFrame(count){

    let project = projectArray[count];

    container.innerHTML = ` <div class="card">
                
    <a href=${project.link} target="_blank"><h1>${project.title}</h1></a>

    <iframe src=${project.link} frameborder="0"></iframe>

</div>`
    

}

displayFrame(0);


document.querySelector("#right").addEventListener("click",(e)=>{

        count++;
        if(count>=projectArray.length){
            count = count%(projectArray.length);
        }
        displayFrame(count);

})

document.querySelector("#left").addEventListener("click",(e)=>{

    count--;
    if(count<0){
        count = (projectArray.length-1);
    }
    displayFrame(count);

})



// projectArray.forEach((project,index)=>{



//     container.innerHTML += ` <div class="card card${index+1}">
                
//     <h1><a href=${project.link} target="_blank">${project.title}</a></h1>

//     <iframe src=${project.link} frameborder="0"></iframe>

// </div>`

// })




