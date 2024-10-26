import {accountsInfo} from './accountsInfo.js'


export function addAccName (){
    accountsInfo.forEach((accInfo) => {
        if(accInfo.accountName === 'YouTube'){
            accInfo.accountImage = '../image/youtube.webp'
        } 
        else if(accInfo.accountName === 'Telegram'){
            accInfo.accountImage = '../image/telegram.png'
        } 
        else if(accInfo.accountName === 'Facebook'){
            accInfo.accountImage = '../image/facebook.png'
        } 
        else if(accInfo.accountName === 'TikTok'){
            accInfo.accountImage = '../image/tiktok.png'
        } 
        else if(accInfo.accountName === 'Instagram'){
            accInfo.accountImage = '../image/instagram.png'
        } 
        else if(accInfo.accountName === 'WhatsApp'){
            accInfo.accountImage = '../image/whatsapp.png'
        } 
        else if(accInfo.accountName === 'X(Twitter)'){
            accInfo.accountImage = '../image/x.png'
        } 
        else if(accInfo.accountName === 'LinkedIn'){
            accInfo.accountImage = '../image/linkedin.png'
        } 
    })
}
