<template>
  <div class="card-stack">
    <Card
      v-bind:card="card"
      v-for="card in cards"
      v-bind:key="card.id"
      v-on:click.native="emitId(card.id)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardStack",
  components: { Card },
  props: {
    cards: Array
  },
  methods: {
    emitId(id) {
      this.$emit("sendID", id);
    }
  }
};
</script>

<style></style>
