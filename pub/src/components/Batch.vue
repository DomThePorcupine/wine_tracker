<template>
  <div>
    <h3>Welcome to Dom's Wine Tracker!</h3>
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <line-example :data=graphData :options=graphOpts></line-example>
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
      graphData: {}
    }
  },
  methods: {
    getBatches: function () {
      this.$http.get('http://127.0.0.1:3000/api/batch/' + this.$route.params.id).then(function (response) {
        this.batch = response.body
        this.graphData = {
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
      })
    }
  },
  created: function () {
    this.getBatches()
  }
}
</script>
