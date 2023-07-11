import axios from 'axios';

export async function cardInfo(){
    return await axios.get('http://localhost:5098/api/Pkmn').then((response) =>response.data)
}
export async function cardImage(cardId){
    return await axios.get('http://localhost:5098/api/Pkmn').then((response)=>response.data)
}

export async function newCard(pkmnName, hp, attack, dscript, power, cost, image, cardId){
    console.log(pkmnName, hp, attack, dscript, power, cost, image)
    return await axios.post('http://localhost:5098/api/Pkmn',{
        pkmnName, hp, attack, dscript, power, cost, image, cardId
    }).then((response)=>response.data)
}
export async function newImage(image, cardId){
    return await axios.post(`http://localhost:5098/api/Images`,{
        image, cardId
    }).then((response)=>response.data)
}

export async function updateCard(cardId, pkmnName, hp, attack, dscript, power, cost, image){
    return await axios.put('http://localhost:5098/api/Pkmn',{
        cardId, pkmnName, hp, attack, dscript, power, cost, image
    }).then((response)=>response.data)
}

export async function deleteCard(cardId){
    return await axios.delete(`http://localhost:5098/api/Pkmn/${cardId}`,{
        cardId
    }).then((response)=>response.data)
}