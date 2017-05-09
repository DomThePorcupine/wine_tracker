// LineChart.js
import { Line } from 'vue-chartjs'

export default Line.extend({
  props: ['data', 'options'],
  watch: {
    'data': {
      handler: function (newData, oldData) {
        let chart = this._chart

        let newDataLabels = newData.datasets.map((dataset) => {
          return dataset.label
        })

        let oldDataLabels = oldData.datasets.map((dataset) => {
          return dataset.label
        })
        if (JSON.stringify(newDataLabels) === JSON.stringify(oldDataLabels)) {
          newData.datasets.forEach(function (dataset, i) {
            chart.data.datasets[i].data = dataset.data
          })
          chart.data.labels = newData.labels
          chart.update()
        } else {
          this.renderChart(this.data, this.options)
        }
      },
      deep: true
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

