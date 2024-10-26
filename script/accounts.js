import { accountsInfo } from "../data/accountsInfo.js";
import {addAccName} from '../data/image.js'
import {setProfilePicture} from '../data/profile.js'

setProfilePicture();

let accountsHTML = '';

accountsInfo.forEach((accInfo) => {

    addAccName()
    accountsHTML += `
        <div class="account-container" data-acount-id = "${accInfo.Id}">
                <div class="account-name">${accInfo.accountName}</div>
                <div class="account-image-container">
                    <div class="account-image"><img src="${accInfo.accountImage}" alt=""></div>
                </div>
                <div class="account-username"><a href="${accInfo.accountLink}"><p>LINK</p></a></div>
                <div class="account-members"> Content: <br>${accInfo.accountContent}</div><br>
                <div class="account-members">${accInfo.accountMembers} Members</div>
                <div class="account-price">${(Math.floor(accInfo.accountPriceCents)/100).toFixed(0)} Birr</div>
                <div class="account-spacer"></div>
                <button class="buy-button js-buy-button">BUY</button>
            </div>
    `
});

document.querySelector('.js-accounts-grid')
    .innerHTML = accountsHTML;




    document.querySelectorAll('.js-buy-button').forEach((button, index) => {
        button.addEventListener('click', () => {
        
            const selectedAccount = accountsInfo[index];
            localStorage.setItem('selectedAccount', JSON.stringify(selectedAccount));
            
            
            window.location.href = './buying-page.html';

            
        });
    });


