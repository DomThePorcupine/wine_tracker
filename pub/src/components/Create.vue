<template>
  <div id="input_div">
    <form style="width: 500px;" novalidate @submit.stop.prevent="createBatch">
      <md-input-container>
        <label>Name of your batch</label>
        <md-input v-model="newName"></md-input>
      </md-input-container>
    </form>
    <md-button id="center_it" v-on:click.native="createBatch"  class="md-raised md-primary">Create!</md-button>
    </div>
  </div>
</template>

<script>
  import API from './api.js'
  export default {
    name: 'create',
    data () {
      return {
        newName: ''
      }
    },
    methods: {
      createBatch: function () {
        this.$http.post(API + '/api/batch', { name: this.newName }).then(function (response) {
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style>
#input_div {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#center_it {
  width: 80%;
  margin: auto;
}
</style>
