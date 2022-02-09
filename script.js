const models = [
    {
        number: 01,
        miniModel : "./image/mini-model.jpg",
        bigModel : "./image/big-model.jpg",
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, magni ipsam saepe nihil voluptas fugit debitis officia reiciendis voluptates quo libero maiores eius aperiam laborum vero numquam eligendi. Deleniti, possimus "
    },
    {
        number: 02,
        miniModel : "./image/mini-model2.jpg",
        bigModel : "./image/big-model2.jpg",
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, magni ipsam saepe nihil voluptas fugit debitis officia reiciendis voluptates quo libero maiores eius aperiam laborum vero numquam eligendi. Deleniti, possimus "
    },
    {
        number: 03,
        miniModel : "./image/mini-model3.jpg",
        bigModel : "./image/big-model3.jpg",
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, magni ipsam saepe nihil voluptas fugit debitis officia reiciendis voluptates quo libero maiores eius aperiam laborum vero numquam eligendi. Deleniti, possimus "
    },
    {
        number: 04,
        miniModel : "./image/mini-model4.jpg",
        bigModel : "./image/big-model4.jpg",
        about : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, magni ipsam saepe nihil voluptas fugit debitis officia reiciendis voluptates quo libero maiores eius aperiam laborum vero numquam eligendi. Deleniti, possimus "
    },
]


const miniModel = document.querySelector('.mini-model img')
const bigModel = document.querySelector('.big-model img')

const modelAbout = document.querySelector('.model-about-text')
const modelNumber = document.querySelector('.model-number')

const controlLines = document.querySelectorAll('.control-line')

let currentLine

controlLines.forEach((controlLine,index)=>{
    
    controlLine.addEventListener('click',(e)=>{
        currentLine = e.currentTarget
        controlLines.forEach(line=>{
            if(currentLine != line){
                line.classList.remove('active')
            }
        })
        controlLines[index].classList.add('active')
     
        renderNextImages(index)
    })
})


const renderNextImages = (index) =>{
    console.log(miniModel)
    miniModel.src = models[index].miniModel
    bigModel.src = models[index].bigModel
    modelAbout.textContent = models[index].about
    modelNumber.textContent = models[index].number
}


