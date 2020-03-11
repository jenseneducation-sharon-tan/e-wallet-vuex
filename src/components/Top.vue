<template>
  <div class="top-card">
    <h1>{{title}}</h1>
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "top",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style >
.top-card {
  color: black;
}
</style>>


