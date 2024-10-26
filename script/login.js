import { userInfo } from "../data/user-info.js";

document.querySelector('.js-login-btn').addEventListener('click', () => { logIn();})

function logIn(){
        const userName = document.querySelector('.js-login-username').value;
        const userPassword = document.querySelector('.js-login-password').value;
        
        
        if(userName === '' || userPassword === ''){
            alert('Please enter the correct username and password!');
            return; 
        }

        let userFround = false;

        for(let info of userInfo){ 
            if(userName === info.username){
                userFround = true;

                if(userPassword === info.password){
                    window.location.href = '../index.html';
                    document.querySelector('.js-login-username').value = '';
                    document.querySelector('.js-login-password').value = '';
                    return;
                }

                else{
                    alert('Your password is incorrect!');
                    return;
                }
            }
        }
        if(!userFround){
            alert('Your username is not registered! Please re-check or signup.');
            return;
        }   
    };
            
            


