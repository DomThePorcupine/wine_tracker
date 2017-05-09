<template>
  <div>
    <input v-model="newName" placeholder="Name of your new batch">
    <v-btn  v-on:click.native="createBatch">Create!</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'create',
    data () {
      return {
        newName: ''
      }
    },
    methods: {
      createBatch: function () {
        this.$http.post('http://toaster.me/api/batch', { name: this.newName }).then(function (response) {
          this.$router.push('/')
        })
      }
    }
  }
</script>
