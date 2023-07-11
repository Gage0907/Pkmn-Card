<script>
import { newCard } from "../services/api"
export default{
  data(){
    return{
      pkmnName: "",
      hp: "",
      attack: "",
      dscript: "",
      power: "",
      cost: "",
      image: ""
    }
  },
  methods: {
    async submitData(e){
      e.preventDefault()
      const card = await newCard(this.pkmnName, this.hp, this.attack, this.dscript, this.power, this.cost, this.image)
      this.$router.push({
        name: "home"
      })
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
}
</script>

<template>
  <div class="form-container">
    <form @submit="(e)=>submitData(e)" class="card-form">
        <div class="form-group">
            <label class="form-label">Pokemon Name</label>
            <input type="text" v-model="pkmnName" required>
        </div>
        <div class="form-group">
            <label class="form-label">Hp</label>
            <input type="text" v-model="hp">
        </div>
        <div class="form-group">
            <label class="form-label">Attack</label>
            <input type="text" v-model="attack">
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <input type="text" v-model="dscript">
        </div>
        <div class="form-group">
            <label class="form-label">Power</label>
            <input type="text" v-model="power">
        </div>
        <div class="form-group">
            <label class="form-label">Cost</label>
            <input type="text" v-model="cost">
        </div>
        <div class="form-group">
            <label class="form-label">Upload Image</label>
            <input type="file" name= "image" accept="image/png, image/gif, image/jpeg" @change="handleImage">
        </div>
        <div class="form-group">
            <button class="form-button" type="submit">Submit</button>
        </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-container{
  position: relative;
  top: 150px;
}
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

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
}

.file-input {
  display: flex;
  align-items: center;
}

.file-input input[type="file"] {
  display: none;
}

.file-label {
  display: inline-block;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.file-label:hover {
  background-color: #0056b3;
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