<template>
  <div class="home">
    <box>
      <header class="header">
        <h1 class="h1">Music Video</h1>
        <p class="p">
          Hello there!, <br />
          I made a short video summary of the work I completed.
          <br />
          Sincerely,
          <br />
          Dave
        </p>
      </header>
      <div class="video">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/ibl83TmOhEw"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <nav class="sub-nav">
        <ff-button>
          <router-link class="a" id="rank" to="/rank"
            >View Rankings</router-link
          >
        </ff-button>
      </nav>
    </box>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped lang="scss">
.sub-nav {
  text-align: center;
  .a {
    text-decoration: none;
  }
}
.header {
  margin-bottom: $size4;
  .p {
    margin: $size4;
  }
}
.video-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%; // For ratio 16:9. 75% if ratio is 4:3
  position: relative;

  embed,
  object,
  iframe {
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
