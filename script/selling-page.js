import { accountsInfo } from "../data/accountsInfo.js";
import { userInfo } from "../data/user-info.js";
import {setProfilePicture} from '../data/profile.js'
setProfilePicture()


const profileArea = document.querySelector('.js-profile-area');
const profileInputFile = document.getElementById("profile-pic");
const profileImage = document.querySelector('.js-profile-image');
const profileText = document.querySelector('.js-profile-text');

const analyticsArea = document.querySelector('.js-analytics-area');
const analyticsInputFile = document.getElementById("analytics-pic");
const analyticsImage = document.querySelector('.js-analytics-image');
const analyticsText = document.querySelector('.js-analytics-text');

let analyticsShot = '';
let profileShot = '';
let profileImageUploaded = false;
let analyticsImageUploaded = false;



function convertToBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}

function shot(callback) {
    if (profileInputFile.files.length > 0) {
        convertToBase64(profileInputFile.files[0], (base64String) => {
            profileShot = base64String;
            profileImageUploaded = true;
            callback();  
        });
    }

    if (analyticsInputFile.files.length > 0) {
        convertToBase64(analyticsInputFile.files[0], (base64String) => {
            analyticsShot = base64String;
            analyticsImageUploaded = true;
            callback();  
        });
    }
}



profileInputFile.addEventListener('change', uploadProfileImage)

function uploadProfileImage(){
    shot(() => {

        if(profileShot){
            profileArea.style.backgroundImage = `url(${profileShot})`;
            profileImage.textContent = '';
            profileText.textContent = 'Uploaded Succecfully';
            profileText.style.color = 'green';
        }
    });
}


analyticsInputFile.addEventListener('change', uploadAnalyticsImage)

function uploadAnalyticsImage(){
    shot(() => {
        if(analyticsShot){ 
            analyticsArea.style.backgroundImage = `url(${analyticsShot})`;
            analyticsImage.textContent = '';
            analyticsText.textContent = 'Uploaded Succecfully';
            analyticsText.style.color = 'green';
        }
    });
}

analyticsArea.addEventListener('dragover', (analytics) => {
    analytics.preventDefault()
});
analyticsArea.addEventListener('drop', (analytics) => {
    analytics.preventDefault();
    analyticsInputFile.files = analytics.dataTransfer.files;
    uploadAnalyticsImage()
});

profileArea.addEventListener('dragover', (profile) => {
    profile.preventDefault()
});
profileArea.addEventListener('drop', (profile) => {
    profile.preventDefault();
    profileInputFile.files = profile.dataTransfer.files;
    uploadProfileImage()
});



document.querySelector('.js-post-btn').addEventListener('click',() => { postAccount()})


function postAccount(){
    shot()
    const userName = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    const selectName = document.getElementById('acc-type');
    const accountName = selectName.options[selectName.selectedIndex].text;
    const accountLink = document.getElementById('acc-username').value;
    const accountMembers = document.getElementById('members').value;
    const selectContent = document.getElementById('content');
    const accountContent = selectContent.options[selectContent.selectedIndex].text;
    const price = document.getElementById('price').value;
    const accountDetail = '' || document.getElementById('message').value;
    

    const accountPriceCents = Number(price*100 + price*0.1);

        if(profileImageUploaded && analyticsImageUploaded){
            if(userName === '' || userPassword === '' || accountName ==='' || accountLink === '' 
                || accountMembers === '' || accountContent === ''|| price === ''){
                alert('Please fill each spaces and upload image');
                return; 
            }
            
            let userFround = false;

            for(let info of userInfo){ 
                if(userName === info.username){
                    userFround = true;

                    if(userPassword === info.password){
                        
                        accountsInfo.unshift({
                            accountName: accountName,
                            accountLink: accountLink,
                            accountMembers: accountMembers,
                            accountContent: accountContent,
                            accountPriceCents: accountPriceCents,
                            accountDetail: accountDetail,
                            analyticsShot: analyticsShot,
                            profileShot: profileShot
                            

                        });
                        localStorage.setItem('accountsInfo', JSON.stringify(accountsInfo));
                        window.location.href = '../html/accounts.html'
                        
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
        } else{
            alert('Please Upload the screenshots!')
        }
}