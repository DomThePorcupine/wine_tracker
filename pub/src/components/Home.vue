<template>
  <div id="main">
    <h3 style="text-align: center;">Welcome to Dom's Wine Tracker!</h3>
    <div class="phone-viewport">
      <md-list>
        <md-list-item v-for="batch in batches" :key="batch._id">
         <router-link :to="{ name: 'Batch', params: { id: batch._id }}"><md-icon>timeline</md-icon>{{ batch.name }}</router-link>
         <md-divider></md-divider>
        </md-list-item>
      </md-list>
    </div>

    <md-button href="#/create" class="md-fab md-fab-bottom-right md-primary">
      <md-icon>add</md-icon>
    </md-button>

  </div>
</template>

<script>
import API from './api.js'

export default {
  name: 'home',
  data () {
    return {
      batches: []
    }
  },
  methods: {
    getBatches: function () {
      this.$http.get(API + '/api/batch').then(function (response) {
        this.batches = response.body
      })
    },
    goToCreate: function () {
      this.$router.push('/create')
    }
  },
  created: function () {
    this.getBatches()
  }
}
</script>

<style>
#float_action_button {
  float: right;
  position: absolute;
  right:20;
  bottom:20;
}
</style>

<style>
#main {
  width: 80%;
  margin: auto;
}
</style>
