<script>
import { deleteCard, updateCard } from '../services/api';
export default {
  data(){
    return {
        editing: false,
        pkmnName: '',
        hp: '',
        attack: '',
        dscript: '',
        power: '',
        cost: '',
        image: ''
    }
  },
  props: ['card'],
  methods: {
    startEditing(){
        this.editing = true;
    },
    doneEditing(){
        this.editing = false;
    },
    closePopup() {
        this.editing = false;
      this.$emit('close');
    },
    async updateCardInfo(){
        const updatedInfo = await updateCard(this.card.id, this.pkmnName, this.hp, this.attack, this.dscript, this.power, this.cost, this.image);
        this.$router.push({
            name: "home"
        });
    },
    async deleteCardInfo(){
        await deleteCard(this.card.id);
        this.$router.push({
            name: "home"
        });
    },
    handleImage(e){
        console.log(e.target.files[0])
        let rawImage
        var files = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            rawImage = reader.result;
            this.image = rawImage;
        }
        reader.readAsDataURL(files);
        

    }
  }
};
</script>

<template>
    <div class="card-popup-container">
        <div class="card-popup">
            <div v-if="!editing" class="button-container">
                <img :src="card.image" alt="" />
                <span class="edit-icon" @click="startEditing">
                    <Icon icon="uil:edit" width="25" height="25" />
                </span>
                <span class="delete-icon" @click="deleteCardInfo">
                    <Icon icon="ph:trash-bold" color="red" width="25" height="25" />
                </span>
            </div>
    
            <form v-else @submit.prevent="updateCardInfo" :key="card.id" method="post" enctype="application/x-www-form-urlencoded" class="card-form">
                <div class="form-group">
                    <label class="card-label">Pokemon Name:</label>
                    <input type="text" v-model="pkmnName" required>
                </div>
                <div class="form-group">
                    <label class="card-label">Hp:</label>
                    <input type="text" v-model="hp">
                </div>
                <div class="form-group">
                    <label class="card-label">Attack:</label>
                    <input type="text" v-model="attack">
                </div>
                <div class="form-group">
                    <label class="card-label">Description:</label>
                    <input type="text" v-model="dscript">
                </div>
                <div class="form-group">
                    <label class="card-label">Power:</label>
                    <input type="text" v-model="power">
                </div>
                <div class="form-group">
                    <label class="card-label">Cost:</label>
                    <input type="text" v-model="cost">
                </div>
                <div class="form-group">
                    <label class="card-label">Upload Image:</label>
                    <input type="file" name= "image" accept="image/png, image/gif, image/jpeg" @change="handleImage">
                </div>
                <div class="form-group">
                    <button class="form-button" type="submit">Submit</button>
                </div>
            </form>
            <div v-if="!editing" class="card-info">
                <p>Name: {{ card.pkmnName }}</p>
                <p>Hp: {{ card.hp }}</p>
                <p>Attack: {{ card.attack }}</p>
                <p>Description: {{ card.dscript }}</p>
                <p>Power: {{ card.power }}</p>
                <p>Cost: {{ card.cost }}</p>
            </div>
            <button class="close-button" @click="closePopup"></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-form {
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background-color: #f2f2f2;
  padding: 25px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.card-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.card-popup-container{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card-popup {
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  max-width: 400px;
  width: 100%;
}

.card-popup-content {
  margin-bottom: 1rem;
}

.card-popup img {
  max-width: 100%;
  height: auto;
}

.edit-icon:hover,
.delete-icon:hover {
  background-color: #cecdcd;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24);
  border-radius: 50%;
}
.close-button{
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    transform: translate(50%, -50%);
    margin-top: -.5rem;
    margin-right: -0.5rem;
    padding: 0.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.close-button::before,
.close-button::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 18px;
  background-color: red;
}

.close-button::before {
  transform: rotate(45deg);
}

.close-button::after {
  transform: rotate(-45deg);
}

.form-button {
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>