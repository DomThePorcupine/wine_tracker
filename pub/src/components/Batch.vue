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
      tempData: {}
    }
  },
  methods: {
    getBatches: function () {
      this.$http.get('http://127.0.0.1:3000/api/batch/' + this.$route.params.id).then(function (response) {
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
