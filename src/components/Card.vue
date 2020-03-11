<template >
  <div class="card">
    <div class="card-item" v-bind:class="card.vendor">
      <header class="head">
        <!-- v-if="card.vendor" means card.vendor !== undefined   -->
        <img
          class="logo"
          v-bind:src="require(`@/assets/vendor-${card.vendor}.svg`)"
          v-if="card.vendor"
        />

        <img class="chip" v-bind:src="require(`@/assets/${card.chip}`)" />
      </header>
      <div class="card-details">
        <p class="number">{{ formattedNumber }}</p>
        <p class="name">CARDHOLDER NAME</p>
        <p class="show-name" :class="{ uppercase: card.name }">{{ card.name }}</p>
        <p class="valid">VALID UNTIL</p>
        <p class="valid-date">{{ card.month }}{{ card.year }}</p>
      </div>
    </div>
    <!-- <button v-on:click="deleteCard(card.id)">DELETE</button> -->
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  },
  computed: {
    formattedNumber() {
      return this.card.number
        .split(/(\d{4})/)
        .join(" ")
        .trim();
    }
  }
  /* methods: {
    deleteCard() {
      this.$root.$emit("deleteCard", this.card.id);
    }
  } */
};
</script>

<style>
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}

.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}

.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}

.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.uppercase {
  text-transform: uppercase;
}

.card-item {
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}

.head {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.logo {
  position: absolute;
  margin-left: 320px;
  padding: 10px;
}

.chip {
  position: absolute;
  margin-top: 15px;
  padding: 20px;
}

.number {
  position: absolute;
  margin-top: 130px;
  margin-left: 26px;
  font-size: 20px;
}

.name {
  position: absolute;
  margin-top: 160px;
  margin-left: 26px;
  font-size: 10px;
}

.show-name {
  position: absolute;
  margin-top: 175px;
  margin-left: 26px;
}

.valid {
  position: absolute;
  margin-top: 160px;
  margin-left: 300px;
  font-size: 10px;
}

.valid-date {
  position: absolute;
  margin-top: 175px;
  margin-left: 300px;
}
</style>
