<template>
  <div id="main">
    <h3>Welcome to Dom's Wine Tracker!</h3>
    <div class="phone-viewport">
      <md-list>
        <md-list-item v-for="batch in batches" :key="batch._id">
          <div class="md-list-text-container">
            <router-link :to="{ name: 'Batch', params: { id: batch._id }}">
            <img class="bottle" src="../assets/bottle.svg"> </img>
            <span> {{ batch.name }}</span></router-link>
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

img{
  height: 15px;
  width: 15px;
  margin-right: 35px;
  margin-bottom: 5px;
  margin-left: 35px
}

span{
  font-size: 18px;
}

.md-list-item-container{
  min-height: 45px !important;
  margin-top: 25px !important;
  padding: 10px !important;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
  border: 1px solid transparent;
  border-radius: 5px;
}

.md-list-item-container img{
  transform: rotate(90deg);
}

.md-list-item-container:hover{
  background-color: rgba(119, 136, 153, 0.5);
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}

.md-ink-ripple{
  display: none;
}

.md-button:hover:not([disabled]):not(.md-raised):hover{
  background-color: #ffffff;
}

#floater {
  padding-bottom: 100px;
}

#main {
  width: 80%;
  margin: auto;
}
</style>
