<template>
  <div>
    <div class="graph_container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>{{ batch.name }}</h2>
          <line-example :data=specgData :options=graphOpts></line-example>
          <div style="padding-top: 50px">
            <line-example :data=tempData :options=graphOpts></line-example>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 80%; padding-top: 25px; margin: auto">
      <input v-model="newDate" placeholder="Date">
    </div>
    <div style="width: 80%; padding-top: 25px; margin: auto">
      <input v-model="newTemp" placeholder="Temperature">
    </div>
    <div style="width: 80%; padding-top: 25px; margin: auto">
      <input v-model="newSpecG" placeholder="Specific Gravity">
    </div>
    <div style="width: 80%; padding-top: 25px; margin: auto">
      <input v-model="key" placeholder="Key">
    </div>

    <v-btn  v-on:click.native="addData">Add!</v-btn>
  
  </div>
</template>

<script>
import LineExample from './LineChart.js'

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
      this.$http.put('http://toaster.me/api/batch/' + this.$route.params.id, {
        date: this.newDate,
        specg: parseFloat(this.newSpecG),
        temp: parseFloat(this.newTemp),
        key: this.key
      }).then(function (response) {
        this.getBatches()
      })
    },
    getBatches: function () {
      this.$http.get('http://toaster.me/api/batch/' + this.$route.params.id).then(function (response) {
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
  max-width: 95%;
  margin: auto;
}
</style>
