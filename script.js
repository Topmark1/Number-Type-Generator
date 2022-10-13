let input = document.querySelector('#input')
let button = document.querySelector('button')
input.style.cssText = 'border-color:green;width:300px;height:30px;margin:15px 250px'
button.style.cssText = 'background-color:green;color:white;width:200px;height:30px;position:absolute;margin:20px -230px'

let crazeBorder = document.querySelector('.crazy')
crazeBorder.style.cssText ='background-color:white;display:flex;width:600px;height:100px;margin:0px 220px;flex-flow:wrap'

button.addEventListener('mouseover', ()=>{
crazeBorder.innerHTML = '' //to refresh code at each click
for (let i = 0;i <= input.value; i++){
let crazeNumbers = document.createElement('div')
crazeNumbers.innerHTML = i
crazeNumbers.style.cssText = 'font-family:candara;font-size:30px;color:white;width:60px;height:40px;margin:5px 5px;text-align:center;line-height:35px'
a = []
for(j = 2; j < i; j++){if(i%j != 0){a.push(i%j)}}
if(a.length == i-2 )
{crazeNumbers.style.backgroundColor = 'red'}
else if(i % 2 == 1){crazeNumbers.style.backgroundColor = 'orange'}
else{crazeNumbers.style.backgroundColor = 'green'}
crazeBorder.appendChild(crazeNumbers)
}
})
