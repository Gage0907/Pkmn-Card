<script>
import CreateCard from '../components/CreateCard.vue'
import CardPopup from '../components/CardPopup.vue'
import { Icon } from '@iconify/vue2';
import { cardImage } from '../services/api'
export default {
  components: {
    CreateCard,
    CardPopup
  },
  methods:{
    showCardPopup(card){
      this.showPopup = true;
      this.selectedCard = card;
    },
    closeCardPopup() {
      this.showPopup = false;
      this.selectedCard = null;
    },
  },
  props: {
    cardInfo: {
        default: ()=>[]
    }
  },
  data(){
    return {
        cards: [],
        showPopup: false,
        selectedCard: null
    }
  },
};
</script>

<template>
    <div class="grid-container">
      <div v-for="card in cardInfo" :key="card.id" class="grid-item">
        <div class="image-container">
          <img :src="card.image" alt="" @click="showCardPopup(card)">
        </div>
        <!--<div class="card-info">
        <p>Name: {{ card.pkmnName }}</p>
        <p>Hp: {{ card.hp }}</p>
        <p>Attack: {{ card.attack }}</p>
        <p>Description: {{ card.dscript }}</p>
        <p>Power: {{ card.power }}</p>
        <p>Cost: {{ card.cost }}</p>
      </div>-->
      </div>
      <CardPopup v-if="showPopup" :card="selectedCard" @close="closeCardPopup" />
    </div>
  </template>
  

  
  <style lang="scss" scoped>

.grid-container {
  margin-top: 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: .5rem;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 2px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

</style>