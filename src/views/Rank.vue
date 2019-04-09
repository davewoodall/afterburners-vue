<template>
  <div class="rank">
    <div class="container">
      <box class="skinny">
        <h1 class="h1">Rankings</h1>
        <rank />
      </box>
    </div>
  </div>
</template>

<script>
import Rank from "@/components/Rank";
export default {
  components: {
    Rank
  }
};
</script>
<style scoped lang="scss">
.skinny {
  max-width: 600px !important;
  .h1 {
    margin-bottom: $size4;
  }
}
</style>
