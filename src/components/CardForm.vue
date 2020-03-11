<template>
  <div id="form">
    <div class="card-form">
      <form v-on:submit.prevent="addCard" v-on:change="emitUpdate">
        <div class="label-validate">
          <label for="card-number">CARD NUMBER</label>
          <!--     <p class="validate" v-if="validated">*Required field</p> -->
        </div>
        <!-- ASCII related, from 48 to 57 are the codes for 0 to 9 character -->
        <!--    -->
        <input
          type="text"
          name="card-number"
          placeholder="1234 1234 1234 1234"
          required
          v-model="card.number"
          v-on:input="emitUpdate"
          :minlength="16"
          :maxlength="16"
          onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        />
        <div class="label-validate">
          <label for="cardholder-name">CARDHOLDER NAME</label>
          <!--  <p class="validate" v-if="validated">*Required field</p> -->
        </div>
        <!-- ASCII related, capital A-Z start from 65 and ends at 90 and small a-z starts from 97 and ends at 122 and space is 32 -->
        <input
          type="text"
          name="card-number"
          placeholder="Name as appear on the card"
          required
          v-model="card.name"
          :maxlength="20"
          v-on:input="emitUpdate"
          onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)"
        />

        <div class="wrap-valid">
          <div class="wrap-month">
            <label for="month" class="month">MONTH</label>
            <select
              name="select-month"
              class="select-month"
              v-model="card.month"
            >
              <option value="01/">01</option>
              <option value="02/">02</option>
              <option value="03/">03</option>
              <option value="04/">04</option>
              <option value="05/">05</option>
              <option value="06/">06</option>
              <option value="07/">07</option>
              <option value="08/">08</option>
              <option value="09/">09</option>
              <option value="10/">10</option>
              <option value="11/">11</option>
              <option value="12/">12</option>
            </select>
          </div>
          <div class="wrap-year">
            <label for="year" class="year">YEAR</label>
            <select name="select-year" class="select-year" v-model="card.year">
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>
        <label for="vendor" class="vendor">VENDOR</label>
        <select name="vendor" v-model="card.vendor">
          <option disabled value>Please select one</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="blockchain">Blockchain Inc</option>
          <option value="evil">Evil Corp</option>
          <option value="ninja">Ninja Bank</option>
        </select>

        <button>ADD CARD</button>
      </form>
    </div>
  </div>
</template>

<script>
/* const STORAGE_KEY = "card-storage"; */
export default {
  name: "CardForm",
  props: {
    card: Object
  },

  methods: {
    addCard() {
      this.$store.commit("addNewCard", this.card);
      this.$router.push("/");
    },

    /*  addCard() {
      if (this.card.name && this.card.number !== "") {
        this.$root.$emit("addCard", this.card);
        this.$router.push("/");
      } 
    },*/

    emitUpdate() {
      this.$emit("updateCard", this.card);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display-card-info {
  width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  color: white;
  background: rgb(179, 178, 178);
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
  margin-bottom: 40px;
}

form {
  width: 24rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

input,
select {
  padding: 10px;
  margin: 10px 0 20px;
  font-size: 1rem;
  border: 1px solid rgb(180, 180, 180);
  transition: border-color 1s ease-out;
}

input:focus {
  border: 1px solid;
}

.label-validate {
  text-align: left;
  width: 50%;
}
.month {
  width: 30%;
}
.year {
  width: 20%;
}

.vendor {
  width: 15%;
}

.validate {
  color: red;
  font-size: 12px;
}
.wrap-valid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.wrap-year,
.wrap-month {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.select-month {
  width: 95%;
}

button {
  margin-top: 40px;
  padding: 15px;
  font-size: 15px;
}
</style>
