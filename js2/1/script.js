let emaill = document.querySelector('.email')
let accesss = document.querySelector('.access')


let regExp = /@/



function yesno(){
    if(regExp.test(emaill.value)) {
        alert('Отправлено')
    } else {
        alert("Email не найден")
    }
}
accesss.addEventListener('click',yesno)



let poll = document.querySelector('.pol')
let acceptt = document.querySelector('.accept')
let answerr = document.querySelector('.result')

let regExp2 = /1{1}/
 let regExp3 = /2{1}/


function passport() {
    if(regExp2.test(poll.value)  ){
        answerr.innerText = 'Access'
        answerr.style.color = 'green'
    }
    
    else if (regExp3.test(poll.value) )  {
        answerr.innerText = 'Access'
        answerr.style.color = 'green'
    }
    else{
        answerr.textContent = 'Ошибка'
        answerr.style.color = 'red'
    }
}


acceptt.addEventListener('click',passport)



let phoneNum = document.querySelector('.num')
let acept = document.querySelector('.accept2')
let res = document.querySelector('.result2')


let regExp4 =  /^\+0 \d{3} \d{3}-\d{3}$/


function proverka (){
    if(regExp4.test(phoneNum.value)){
        res.textContent = 'отправлено'
        res.style.color = 'green'
    } else {
        res.textContent = 'Не найдено'
        res.style.color = 'red'
    }
}


acept.addEventListener('click',proverka)

let button = document.querySelector('.numbers')

 let arr =[1,12,15,22,8,25]


for(i = 0;i< arr.length;i++){
if(arr[i] % 2){
    
    console.log( arr[i] + ' ' + ' не делится')
} else {
    console.log(arr[i] + ' ' + 'Делится')
}
}