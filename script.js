let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

function showerror(input, message) {
    let property = input.parentElement;
    property.className = 'form-control error'

    let small = property.querySelector('small')

    small.innerText = message

}
function showSuccess(input) {
    let property = input.parentElement;
    property.className = 'form-control success'
} 


function checkrequier(inputArr) {    
     inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showerror(input, `${input.id} is Required`)

        } else {
            showSuccess(input)   
              }     })
 }
function checkEmail(input) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
      showSuccess(input)
  } else {
    showerror(input, 'Email is not valid');
  }
  }


 function confirmpassword(input1, input2) {
     if (input1.value != input2.value) {
        showerror(input1, 'password are not equal')
       showerror(input2, 'password are not equal')
   }
}

function lenghtinput(input,min,max) {
if(input.value.length>max || input.value.length<min){
showerror(input,'password must between 5 and 10')

}

    
}



form.addEventListener('submit', function (e) {

    e.preventDefault();
    checkrequier([username, email, password, password2])
    // checklenght(username,3,5) checklenght(password,8,12)
     confirmpassword(password, password2);
    checkEmail(email);
    lenghtinput(password,5,10)
    lenghtinput(password2,5,10)
})




