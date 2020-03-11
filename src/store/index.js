import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        name: "CHRISTOFFER WALLENBERG",
        number: "6666 6666 6666 6666",
        month: "03/",
        year: "21",
        vendor: "evil",
        color: "#f33355",
        svg: "vendor-evil.svg",
        chip: "chip-light.svg"
      },
      {
        id: 2,
        name: "CHRISTOFFER WALLENBERG",
        number: "1234 5678 9101 1121",
        month: "12/",
        year: "23",
        vendor: "blockchain",
        color: "#8b58f9",
        svg: "vendor-blockchain.svg",
        chip: "chip-light.svg"
      },
      {
        id: 3,
        name: "CHRISTOFFER WALLENBERG",
        number: "1234 5678 9101 1121",
        month: "03/",
        year: "21",
        vendor: "bitcoin",
        color: "#ffae34",
        svg: "vendor-bitcoin.svg",
        chip: "chip-light.svg"
      },
      {
        id: 4,
        name: "CHRISTOFFER WALLENBERG",
        number: "5544 5678 1212 1121",
        month: "09/",
        year: "20",
        vendor: "ninja",
        color: "#222",
        svg: "vendor-ninja.svg",
        chip: "chip-light.svg"
      }
    ]
  } /* ,
    mounted() {
      if (localStorage.getItem("card")) {
        try {
          this.cards = JSON.parse(localStorage.getItem("card"));
        } catch (error) {
          console.log(error);
        }
      }

      this.$root.$on("addCard", card => {
        this.cards.push(card);
        const parsed = JSON.stringify(this.cards);
        localStorage.setItem("card", parsed);
      });

      this.$root.$on("deleteCard", id => {
        this.cards = JSON.parse(localStorage.getItem("card"));
        this.cards = this.cards.filter(card => card.id !== id);
        localStorage.setItem("card", JSON.stringify(this.cards));
      });
    }*/,

  mutations: {
    addNewCard(state, card) {
      state.cards.push(card);
      /*   this.$root.$on("addNewCard", card => {
      this.cards.push(card);
      const parsed = JSON.stringify(this.cards);
     localStorage.setItem("card", parsed); 
    });*/
    },
    deleteCard(state, id) {
      state.cards = state.cards.filter(card => card.id !== id);

      /* this.cards = this.cards.filter(card => card.id !== id); */
    }
    /* 

    this.$root.$on("deleteCard", id => {
      this.cards = JSON.parse(localStorage.getItem("card"));
      this.cards = this.cards.filter(card => card.id !== id);
      localStorage.setItem("card", JSON.stringify(this.cards));
    }); */
  },
  actions: {},
  modules: {}
});
