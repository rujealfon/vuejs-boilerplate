<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ msg }}
    {{ book.year }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

import { clickMeAgain, Product } from "@/interface/persons";
import { Book } from "@/interface/persons";
import { clickMe } from "@/interface/persons";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },

  data: () => ({
    msg: "Hellow Words",
    book: {
      title: "Vue 3 Guide",
      author: "Vue Team",
      year: 2
    } as Book
  }),

  beforeCreate() {
    console.log(this);
    // console.log(this.$hello.sayHello("World"));
  },

  created() {
    console.log(clickMe("we"));
    clickMeAgain(13131233);
    // this.$validate("wesssssssss");
    // console.log(this.$hello.sayHello("World"));

    console.log(this.$api.sayHi("23"));

    this.$api.forgotPassword("gg");

    // this.axios.get("/hello.com");
  },

  methods: {
    clickMe(params: Product): void {
      // const we = new URL();

      params.name;
      this.book.title;
    }
  }
});
</script>
