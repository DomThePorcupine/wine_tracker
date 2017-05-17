<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body{
  padding: 20px;
}

a:hover{
  text-decoration: none !important;
}

h3{
  text-align: center;
  font-size: 45px;
}

h2{
  font-size: 25px;
}

.md-theme-default.md-button:not([disabled]).md-primary.md-raised, .md-theme-default.md-button:not([disabled]).md-primary.md-fab{
  background-color: #8F181D !important;
}

.md-theme-default a:not(.md-button){
  color: #4c4c4c !important;
}

.md-theme-default.md-input-container.md-input-focused label{
  color: black !important;
}

.md-theme-default.md-input-container.md-input-focused:after{
  background-color: black !important;
}

@media only screen and (max-width: 776px) {
  h3{
    font-size: 35px;
    line-height: 30px;
  }
}

@media only screen and (max-width: 480px) {
  h3{
    font-size: 25px;
    line-height: 25px;
  }
}

</style>
