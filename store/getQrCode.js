import { defineStore } from 'pinia'


export const createQrCode = defineStore({
    id: 'qr-code',
    state: () =>  ({
      newQrCodeLink: null,
    }), 
    actions: {

    }
})