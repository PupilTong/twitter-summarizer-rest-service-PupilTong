<template>
  <div id="app">      
    <md-field :class="messageClass" v-if="!isInputed">
      <label>Hashtag</label>
      <md-input v-model="args.keyword" required ></md-input>
      <span class="md-error">Must input something</span>
    </md-field>
    
    <md-button class="md-dense md-raised md-primary" v-on:click="submit" v-if="!isInputed">Submit</md-button>
    <div>
    <span style="color:white">{{ret}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:()=>({
    args:{
      keyword : ''
    },
    isInputed : false,
    ret : 'something'
  }),
  components: {
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': this.keyword == ''
      }
    }
  },
  methods:{
    submit(){
      this.isInputed = true;
      var fetchApi = new window.fetchApi.fetchApi();
      var response = fetchApi.Post("",this.args);
      response.then(r => {
      //console.log(r)
        this.sending = false;
        if (r.ok) {
          //alert("ok!")
          r.json().then(body=>{
              if(body!=null){
                this.ret = body
                }
            })
        }
      },0)
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
  padding: 30px;
}
</style>
