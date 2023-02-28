fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'GET',
    headers:{
        'Content-type': 'application/json'
    }
}).then((response)=> response.json()
).then((data)=>{
    data.forEach(item => console.log(item))
})


const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 0

const func = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `

        })
}
func()
btnNext.onclick =() => {
    count++
    func()
}
btnPrev.onclick = () => {
    count !== 1 && count--
    func()
}