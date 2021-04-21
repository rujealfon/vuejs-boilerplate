<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <p class="red">color black</p>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}

.red {
  color: $primary-red;

  @include hover-active;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
