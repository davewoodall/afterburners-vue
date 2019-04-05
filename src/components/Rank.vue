<template>
  <div class="rank">
    <ul>
      <li v-for="rank in ranks">
        <span class="p">
          {{ rank["genre"] }}
        </span>
        <span class="p2">
          {{ rank["album_count"] }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import API from "@/api/ranks";
export default {
  data() {
    return {
      foo: "hi",
      ranks: []
    };
  },
  created() {
    let vm = this;
    API.getRankByGenre().then(response => {
      vm.ranks = response["data"]["rank"];
    });
  }
};
</script>

<style scoped lang="scss"></style>
