import { userInfo } from "../data/user-info.js";


    document.querySelector('.js-signup-button')
        .addEventListener('click',() => { signUp(); });

function signUp (){
    const userName = document.querySelector('.js-signup-username').value;
    const userEmail = document.querySelector('.js-signup-email').value;
    const userPassword = document.querySelector('.js-signup-password').value;
    const confirmPassword = document.querySelector('.js-confirm-password').value;
    let id = Math.floor(Math.random() * 1_000_000_000_0000).toString().padStart(10, '0');

    
        
            if(userName === '' || userEmail === '' || userPassword === '' || confirmPassword === ''){
                alert("Please fill each input fields")
                return;
            } 
            for(let info of userInfo){
                
                    if(info.username === userName){
                        alert('Your username is already occupy! Please try other.');
                        return;
                    }
                    if(info.email === userEmail){
                        alert('Your email is already registered! Please login.');
                        return;
                    }
                }

                if(userPassword !== confirmPassword){
                    alert('Confirm the correct password!');
                    return;
                }


                userInfo.push({
                    username : userName,
                    email : userEmail,
                    password : userPassword,
                    id: id
                });

                localStorage.setItem('userInfo', JSON.stringify(userInfo))

                document.querySelector('.js-signup-username').value = '';
                document.querySelector('.js-signup-email').value = '';
                document.querySelector('.js-signup-password').value = '';
                document.querySelector('.js-confirm-password').value = '';


                window.location.href = './home.html';

    
}
