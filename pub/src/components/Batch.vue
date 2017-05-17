<template>
  <div>


    <h2>{{ batch.name }}</h2>

    <div class="input_container">
      <form novalidate @submit.stop.prevent="addData">
        <md-input-container>
          <label>Date (ex: "05/12")</label>
          <md-input v-model="newDate"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Temperature</label>
          <md-input v-model="newTemp"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Specific Gravity</label>
          <md-input v-model="newSpecG"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Key</label>
          <md-input v-model="key"></md-input>
        </md-input-container>
      </form>

      <div style="width: 80%; padding-top: 25px; margin: auto">
        <md-button v-on:click.native="addData" class="md-raised md-primary">Add!</md-button>
      </div>

    </div>

    <div class="graph_container">
      <div class="Chart__list">
        <div class="Chart">
          <line-example :data="specgData" :options="graphOpts"></line-example>
          <div>
            <line-example :data="tempData" :options="graphOpts"></line-example>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LineExample from './LineChart.js'
import API from './api.js'

export default {
  name: 'batch',
  components: {
    LineExample
  },
  data () {
    return {
      batch: [],
      graphOpts: {responsive: true, maintainAspectRatio: false},
      specgData: {},
      tempData: {},
      newDate: '',
      newTemp: '',
      newSpecG: '',
      key: ''
    }
  },
  methods: {
    addData: function () {
      this.$http.put(API + '/api/batch/' + this.$route.params.id, {
        date: this.newDate,
        specg: parseFloat(this.newSpecG),
        temp: parseFloat(this.newTemp),
        key: this.key
      }).then(function (response) {
        this.getBatches()
      })
    },
    getBatches: function () {
      this.$http.get(API + '/api/batch/' + this.$route.params.id).then(function (response) {
        this.batch = response.body
        this.specgData = {
          labels: response.body.dates,
          datasets: [
            {
              label: 'Specific Gravity',
              backgroundColor: '#7f1a1a',
              fill: false,
              data: response.body.specgrav
            }
          ]
        }
        this.tempData = {
          labels: response.body.dates,
          datasets: [
            {
              label: 'Temperature',
              backgroundColor: '#fffff',
              fill: false,
              data: response.body.temps
            }
          ]
        }
      })
    }
  },
  created: function () {
    this.getBatches()
  }
}
</script>

<style>
.graph_container {
  width: 70%;
  float: left;
  margin: 30px;
}

.input_container {
  width: 20%;
  float: right;
}

.Chart div{
  margin-top: 20px;
  width: 100%;
  height: 500px;
}

.Chart div:first-child{
  margin-top: 5%;
}

@media only screen and (max-width: 776px) {
  /* define mobile specific styles come here */
  .graph_container {
    width: 90%;
    margin: 0;
    float: none;
  }

  .input_container {
    width: 50%;
    float: none;
    margin: 0 auto;
  }
}


@media only screen and (max-width: 480px) {
  /* define mobile specific styles come here */
  .input_container {
    width: 100%;
    height: 370px;
    margin: 0 auto;
  }

  .Chart div{
    margin-top: 30px;
    height: 300px;
  }

}
</style>
