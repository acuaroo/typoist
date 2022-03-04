<template>
  <div class="app">
    <div class="flex justify-center">
      <p class="py-6 px-6 w-2/5 font-main-mono text-newspaper text-center bg-cobalt rounded-md text-3xl">{{ paragraph }}</p>
    </div>

    <ul class="flex justify-center">
      <li class="float-left mt-5 ml-5 py-6 px-6 w-50 font-main-mono text-dark-cobalt text-center bg-newspaper rounded-md text-3xl" v-for="item in finalList" v-bind:key="item.name">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import paragraphs from "./assets/texts.json";

export default defineComponent({
  name: "App",
  components: {},

  setup() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz.!";

    const normalParagraphs = ref(paragraphs.normalParagraphs);
    const normalAnswerKey = ref(paragraphs.normalAnswerKey)
    const index = Math.floor(
      Math.random() * (normalParagraphs.value.length - 1 - 0 + 1) + 0
    );
    const randomParagraph = normalParagraphs.value[index];

    const answer = ref(randomParagraph[0]);
    const paragraph = ref(randomParagraph[1]);
    const list: Array<string> = []
    const neededList = ref(normalAnswerKey.value[index])

    for (let i = 0; i < (6-neededList.value.length); i++) {
      list[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    
    const randomList = ref(list);
    const finalList = randomList.value.concat(neededList.value);
    finalList.sort((a, b) => 0.5 - Math.random());

    return { paragraph, randomList, finalList };
  },
  methods: {},
});
</script>

<style>
body {
  background-color: #232329;
}


</style>
