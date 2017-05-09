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
        this.$http.post('http://127.0.0.1:3000/api/batch', { name: this.newName }).then(function (response) {
          this.$router.push('/')
        })
      }
    }
  }
</script>
