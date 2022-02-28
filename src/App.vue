<template>
  <div class="app">
    <p>{{ paragraph }}</p>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import paragraphs from "./assets/texts.json";

export default defineComponent({
  name: "App",
  components: {},
  
  setup() {
    const normalParagraphs = ref(paragraphs.normalParagraphs)
    const index = Math.floor(Math.random() * ((normalParagraphs.value.length-1) - 0 + 1) + 0)
    const randomParagraph = normalParagraphs.value[index]

    const answer = ref(randomParagraph[0])
    const paragraph = ref(randomParagraph[1])

    return {paragraph}
  },
  methods: {}
});
</script>
