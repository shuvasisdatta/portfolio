<template>
  <footer class="has-text-white">
    <section class="columns">
      <div class="column">{{ $parent.app_title }}</div>
      <div class="column">
        Copyright &copy; {{ new Date().getFullYear() }}. All Rights Reserved
      </div>
      <div class="column">v{{ $parent.app_version }}</div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  min-height: 70px;
  padding-top: 25px;
  /* margin-top: -52px; */
  background: #1d4350; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #a43931,
    #1d4350
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #a43931,
    #1d4350
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
