<template>
  <main class="display-cards">
    <div class="show-card">
      <Top title="E-WALLET" subtitle="ACTIVE CARD" />
      <!--    -->
      <Card v-if="!selectedCard" v-bind:card="firstCardId" />
      <Card v-else v-bind:card="selectedCard" />
    </div>
    <button class="delete-card" v-on:click="deleteCard(selectedId)">
      DELETE CARD
    </button>
    <div class="show-stack">
      <!--    -->
      <CardStack v-bind:cards="cards" v-on:sendID="pickThisCard" />
      <router-link to="/AddCard">
        <button class="add-card">ADD NEW CARD</button>
      </router-link>
    </div>
  </main>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";

/* const STORAGE_KEY = "card-storage"; */
export default {
  components: { Top, Card, CardStack },
  data() {
    return {
      firstCardId: this.$store.state.cards[0],
      selectedId: this.$store.state.cards[0].id
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    selectedCard() {
      return this.$store.state.cards.find(card => card.id == this.selectedId);
    }
  },

  methods: {
    pickThisCard(id) {
      this.selectedId = id;
    },
    deleteCard() {
      this.$store.commit("deleteCard", this.selectedId);
      /* this.$root.$emit("deleteCard", this.selectedId); */
    }
  }
};
</script>

<style>
.display-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.show-card {
  color: black;
  margin-bottom: 200px;
}

.card {
  display: grid;
  grid-auto-rows: 4rem;
}

.card-item {
  z-index: 1;
}

button {
  margin-top: 190px;
  padding: 20px;
  border: solid 2px black;
  border-radius: 10px;
  width: 100%;
}

.delete-card {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 15%;
}
</style>
