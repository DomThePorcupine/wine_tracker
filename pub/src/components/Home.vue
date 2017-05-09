<template>
  <div>
    <h3>Welcome to Dom's Wine Tracker!</h3>
    <ul>
      <li v-for="batch in batches">
          {{ batch._id }} - {{ batch.name }} - <router-link :to="{ name: 'Batch', params: { id: batch._id }}">{{ batch._id }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      batches: []
    }
  },
  methods: {
    getBatches: function () {
      this.$http.get('http://127.0.0.1:3000/api/batch').then(function (response) {
        this.batches = response.body
      })
    }
  },
  created: function () {
    this.getBatches()
  }
}
</script>
