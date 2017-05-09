<template>
  <div>
    <h3>Welcome to Dom's Wine Tracker!</h3>
    <ul>
      <li v-for="batch in batches">
        <router-link :to="{ name: 'Batch', params: { id: batch._id }}">{{ batch.name }}</router-link>
      </li>
    </ul>
   <router-link :to="{ name: 'Create' }" class="button">Click here to create a new batch tracker!</router-link>
   <v-btn-link @click.native="$dialog('Toast!')">Toast!</v-btn-link>
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
      this.$http.get('http://toaster.me/api/batch').then(function (response) {
        this.batches = response.body
      })
    }
  },
  created: function () {
    this.getBatches()
  }
}
</script>
