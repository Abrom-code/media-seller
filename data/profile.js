import {userInfo} from './user-info.js'


for(let user of userInfo){
    document.querySelector('.username').innerText = `@${user.username}` || '@username';
}


export function setProfilePicture(){
    
        const inputPic = document.querySelector('.profile-picture');
        const displayArea = document.querySelector('.profileImage');


        displayArea.src = JSON.parse(localStorage.getItem('imgLink')) || '../image/blank-profile-picture-973460_640.png' ||
            

        inputPic.addEventListener('change',  (e) => {
            const inputPicture = inputPic.files[0];
            const reader = new FileReader();

            reader.addEventListener('load',() => {
                const imgLink = reader.result;
                displayArea.src = imgLink;
                localStorage.setItem('imgLink', JSON.stringify(imgLink))
            })

            reader.readAsDataURL(inputPicture)

        })

}
