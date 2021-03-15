<template>
  <div id="app">
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components:{
    HelloWorld
  },
  data(){
    return {
      status: false
    }
  },
  methods: {
      onEnd({lastSentence, transcription}) {
          console.log(lastSentence + "____" + transcription)
      },
    setPlay(){
      this.status = !this.status
      console.log(this.status)
    }
  },
  computed:{
    isPlay(){
      return this.status
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
