<template>
  <div>
    <HeaderNavbar/>
    <a-card hoverable style="width: 400px; margin:0 auto; margin-top: 5%;">
    <template #cover>
      <img
        alt="example"
        class="w-[400px] h-[300px] pointer-events-none select-none"
        :src="newQrCodeImg || require('../assets/imgs/default.png')"
      />
      <br>
      <div class="flex w-[90%] text-center items-center justify-center flex-col">
        <a-input class="ml-[10%]" v-model:value="text" size="large" placeholder="Enter text for convert to qr-code" title="Qr-code"/>
        <button @click="" class="px-[6px] py-[8px] rounded bg-blue-400 text-[16px] font-semibold text-white mt-4 ml-[10%] hover:-translate-y-2 hover:bg-black">Generate QR-CODE</button>
      </div>
      <br>
    </template>
    <template #actions>
       <p class="text-[16px] text-blue-400">SVG</p>
       <p class="text-[16px] text-blue-400">PNG</p>
       <p class="text-[16px] text-blue-400">JPG</p>
    </template>
  </a-card>
  </div>
</template>

<script>
import { notification } from 'ant-design-vue'
export default{
  name: 'indexPage',
  data() {
    return {
      text: '',
      newQrCodeImg: null
    }
  },

  methods: {
    generateNewQrCode(){
      if(this.text.length > 0){

      }else{
      notification['error']({
        message: 'You need enter some text or anything in input!',
        duration: 3
      });
      }
    }
  },

  mounted() {

  },
}
</script>