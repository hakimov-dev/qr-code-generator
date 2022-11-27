import { defineStore } from 'pinia'


export const createQrCode = defineStore({
    id: 'qr-code',
    state: () =>  ({
      newQrCodeLink: null,
    }), 
    actions: {
      generateQrCode(text){
        this.newQrCodeLink = process.env.SECRET_TEXT + text
        console.log(this.newQrCodeLink)
      }
    }
})