<template>
  <div id="main">
    <h3 style="text-align: center;">Welcome to Dom's Wine Tracker!</h3>
    <div class="phone-viewport">
      <md-list>
        <md-list-item v-for="batch in batches" :key="batch._id">
          <md-icon>timeline</md-icon>
          <div class="md-list-text-container">
            <router-link :to="{ name: 'Batch', params: { id: batch._id }}">
                <span style="float: left;"> {{ batch.name }}</span></router-link>
          </div>
            <md-button style="float: right;" v-on:click.native="deleteBatch(batch._id)">
              <md-icon>delete</md-icon>
            </md-button>
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
    deleteBatch: function (id) {
      this.$http.delete(API + '/api/batch/' + id).then(function (response) {
        this.getBatches()
      })
    }

  },
  created: function () {
    this.getBatches()
  }
}
</script>

<style>
#floater {
  padding-bottom: 100px;
}
</style>

<style>
#main {
  width: 80%;
  margin: auto;
}
</style>
