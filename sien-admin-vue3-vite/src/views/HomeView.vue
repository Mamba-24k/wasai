<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary">I am ElButton</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
// import { ElButton } from "element-plus";
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    // ElButton,
  },
});
</script>
