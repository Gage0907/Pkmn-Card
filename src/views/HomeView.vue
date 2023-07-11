<script>
import CardsGrid from '../components/CardsGrid.vue';
import CreateCard from '../components/CreateCard.vue';
import { cardInfo } from "../services/api"
export default{
  components: {
    CreateCard,
    CardsGrid
},
  data() {
    return {
    cardsInfo: [],
    cardsForm: false
    }
  },
  async created() {
    await this.showCards(true)
  },
  methods: {
    async showCards(hideCardsForm) {
      this.cardsInfo = await cardInfo()
      if(hideCardsForm)this.cardsForm = false
    },
    createCardInfo(){
      this.$router.push({
        name: "createcard"
      })
    }
  }
}


</script>

<template>
  <div>
    <div class="buttons">
      <button @click="createCardInfo()">Add Card</button>
    </div>
    <CreateCard @showData="showCards(true)" v-if="cardsForm"/>
      <div v-if="!cardsForm">
        <CardsGrid :cardInfo="cardsInfo"/>
      </div>
  </div>
</template>

<style lang="scss">
button {
	display: inline-block;
  margin-top: 150px;
	margin-right: 20px;
	border: none;
	outline: none;
	padding: 10px 20px;
	border-radius: 25px;
	color: #333;
	background: #fff;
	margin-bottom: 10px;
	box-shadow: 0 3px 20px 0 #0000003b;
}
.buttons {
  display: flex;
  justify-content: center;
}
button:hover{
	cursor: pointer;
	background-color: #a9a9a9;
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
