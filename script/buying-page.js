import {setProfilePicture} from '../data/profile.js'
setProfilePicture()

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.js-container');
    const selectedAccount = JSON.parse(localStorage.getItem('selectedAccount'));


    displayAccount();
   function displayAccount(){
     if (selectedAccount) {
        container.innerHTML = `
            <div class="profile-screenshot">
                <div class="profile-pic-area">
                    <img src="${selectedAccount.profileShot}" alt="Profile Image">
                </div>
                <p class="profile-text">This is the screenshot of the profile page. See if there is any inconsistency.</p>
            </div>
            <div class="analytics-screenshot">
                <div class="analytics-pic-area">
                    <img src="${selectedAccount.analyticsShot}" alt="Analytics Image">
                </div>
                <p class="js-analytics-text"> This is the screenshot of the analytics page of the account. Take a look for more detail.</p>
            </div>
            <div class="seller-detail">
                <fieldset>
                    <legend>Account Information</legend>
                    <div class="acc-type">Account Type: <b>${selectedAccount.accountName}</b></div>
                    <div class="content">Content: <b>${selectedAccount.accountContent}</b></div>
                    <div class="members">Members: <b>${selectedAccount.accountMembers}</b></div>
                    <div class="acc-link">Account Link: <a href="${selectedAccount.accountLink}"><b>${selectedAccount.accountLink}</b></a></div>
                    <div class="price">Price (Birr): <b>${(selectedAccount.accountPriceCents / 100).toFixed(0)}</b></div>
                    <fieldset>
                        <legend>More About the Account</legend>
                        <div class="additional-info"><q><i>${selectedAccount.accountDetail}</i></q></div>
                    </fieldset>
                </fieldset>
                <button>BUY</button>
            </div>
        `;
    }
}
});


