<template>
  <div class="add-card">
    <Top title="ADD NEW CARD" subtitle="NEW CARD" />
    <div class="blank">
      <Card v-bind:card="card" class="blank" />
    </div>
    <!--     -->
    <CardForm v-bind:card="card" v-on:updateCard="updateCard" />
  </div>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";

export default {
  name: "AddCard",
  components: { Top, Card, CardForm },
  data() {
    return {
      card: {
        id: Date.now(),
        name: "",
        number: "",
        month: "MM/",
        year: "YY",
        vendor: "",
        chip: "chip-dark.svg"
      }
    };
  },
  methods: {
    updateCard(card) {
      this.card = card; /// this.card is from data() and card is from payload(from cardfrom)
    }
  }
};
</script>

<style>
.blank {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.blank-card {
  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}
</style>
