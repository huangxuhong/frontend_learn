<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input
      type="text"
      v-model="inputVal"
    >
    <input
      type="text"
      v-model="inputVal"
    >
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    inputVal: {
      get() {
        return this.$store.state.inputVal;
      },
      set(newVal) {
        // 提交
        this.$store.commit("change", newVal);
      }
    }
  }
}
</script>
