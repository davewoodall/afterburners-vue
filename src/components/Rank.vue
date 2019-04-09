<template>
  <div class="rank container">
    <section class="genre">
      <h2 class="h2">by Genre</h2>
      <ff-button class="small">
        <a class="a" :href="api('genre')" target="_blank">view json</a>
      </ff-button>
      <ul>
        <li v-for="rank in genre">
          <span class="p">
            {{ rank["genre"] }}
          </span>
          <span class="p2">
            {{ rank["album_count"] }}
          </span>
          <hr />
        </li>
      </ul>
    </section>
    <section class="year">
      <h2 class="h2">by Year</h2>
      <ff-button class="small">
        <a class="a" href="api('year')" target="_blank">view json</a>
      </ff-button>
      <ul>
        <li v-for="rank in year">
          <span class="p">
            {{ rank["year"] }}
          </span>
          <span class="p2">
            {{ rank["album_count"] }}
          </span>
          <hr />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import API from "@/api/ranks";
import ffButton from "@/components/shared/Button";
export default {
  components: {
    ffButton
  },
  data() {
    return {
      foo: "hi",
      genre: [],
      year: []
    };
  },
  methods: {
    api(resource) {
      return API.rankURL(resource);
    }
  },
  created() {
    let vm = this;
    API.getRankByGenre().then(response => {
      vm.genre = response["data"]["rank"];
    });

    API.getRankByYear().then(response => {
      vm.year = response["data"]["rank"];
    });
  }
};
</script>

<style scoped lang="scss">
@media (min-width: $break2) {
  .rank {
    display: flex;
    justify-content: space-around;
  }
}
</style>
