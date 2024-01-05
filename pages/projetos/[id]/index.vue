<script setup>
const route = useRoute()

const data = await useFetch(`/api/projects`)
const dataActual = await useFetch(`/api/${route.params.id}`)


const photoView = () => {
    return dataActual.data.value.img
}
const photoCapa = () => {
    return dataActual.data.value
}
const details = () => {
    return dataActual.data.value
}

useHead({
    titleTemplate: `${dataActual.data.value.nome} | Isadora Peçanha - Arquitetura e Interiores`,
})

const mainTextDescription = ref(true)
const mainTextPlant = ref(false)
const activeDescription = ref(true)
const activePlant = ref(false)
const activeSala = ref(true)
const activeSuite = ref(false)
const activeCozinha = ref(false)
const activeBanheiros = ref(false)
const activeVaranda = ref(false)


function description () {
    mainTextDescription.value = true
    mainTextPlant.value = false
    activeDescription.value = true
    activePlant.value = false
}
function plant () {
    mainTextDescription.value = false
    mainTextPlant.value = true
    activeDescription.value = false
    activePlant.value = true
}
function sala () {
    activeSala.value = true
    activeSuite.value = false
    activeBanheiros.value = false
    activeCozinha.value = false
    activeVaranda.value = false
}
function suite () {
    activeSala.value = false
    activeSuite.value = true
    activeBanheiros.value = false
    activeCozinha.value = false
    activeVaranda.value = false
}
function cozinha () {
    activeSala.value = false
    activeSuite.value = false
    activeBanheiros.value = false
    activeCozinha.value = true
    activeVaranda.value = false
}
function banheiros () {
    activeSala.value = false
    activeSuite.value = false
    activeBanheiros.value = true
    activeCozinha.value = false
    activeVaranda.value = false
}
function varanda () {
    activeSala.value = false
    activeSuite.value = false
    activeBanheiros.value = false
    activeCozinha.value = false
    activeVaranda.value = true
}


</script>

<template>
    <LogoTwo />
    <Menu />
    
    <div class='main-tree'>
        <h1 class="card-title">
        {{ details().nome }}
    </h1> 
    <span class="card-thumb">
        <img :src="photoCapa().capa" />
    </span> 
    
</div>

<div class='main-one'>
    <!-- <NuxtLink @click="description" :class="{activa: activeDescription}">
        Descrição
    </NuxtLink> -->
    <!-- <NuxtLink @click="plant" :class="{ active: activePlant }">
        Planta 
    </NuxtLink> -->
</div>
<div class="main-one-content">
        <div v-if="mainTextDescription" class="mainDescription">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sint inventore eum ipsam 
            nostrum et quisquam fugiat id aliquam optio, 
            quas quia? Et quas omnis tempora aliquid nobis, 
            doloremque optio ipsum.
        </div>
        <div v-else="mainTextPlant" class="mainPlant">
            <span class="plant">
                <img :src="photoCapa().capa" />
            </span>
        </div>
    </div>
    
   <div class='main-one'>
        <NuxtLink @click="sala()" :class="{ activeSala: activeSala }">
            Sala
        </NuxtLink>
        <NuxtLink @click="suite()" :class="{ activeSuite: activeSuite}">
            Suíte
        </NuxtLink>
        <NuxtLink @click="cozinha()" :class="{ activeCozinha: activeCozinha }">
            Cozinha
        </NuxtLink>
        <NuxtLink @click="banheiros()" :class="{ activeBanheiros: activeBanheiros }">
            Banheiros 
        </NuxtLink>
        <NuxtLink @click="varanda()" :class="{ activeVaranda: activeVaranda }">
            Varanda
        </NuxtLink>
    </div>
    <div class='main-four'>
        <ul >
        <li v-for="item in photoView()" class="card" >
            <div>
                <!-- <span class="card-title">
                    {{ item.nome }}
                    
                </span >  -->
                <img :src="item"/>
            </div>
        </li>
    </ul>
    </div>
    <NuxtPage />
    <br>
    <br>
</template>
<style scoped>
i {
    color: var(--color-text);
}

h4 .icon {
    margin: -4px 0 0 0;
}

code {
    font-size: 0.5em;
    margin-left: 15px;
    padding-left: 10px;
    border-left: solid 5px var(--color-text);
}

.main-one {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 0px;
    color: var(--color-text);
    transition: all .4s linear;
    margin: 40px 0 20px 0;
    /* position: sticky;
    top: 85px; */
    z-index: 20;
    z-index: 1004; 
    transform: translateX(0%); 
    width: 100%;
    background-color: #ffffff20;
    text-align: left;
    backdrop-filter: blur(15px);
}

.main-one div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem;
}

.main-one a .icon {
    font-size: 20px;
    margin: 2px 3px 2px -2px;
}

.main-one a .icon:hover {
    font-size: 20px;
    margin: 2px 3px 2px -2px;
}


.main-one a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    color: var(--color-text);
    /* color: #628474; */
}
.main-one .activa {
    border-bottom: solid 1px #628474;
    color: #628474;
}
.main-one .active {
    border-bottom: solid 1px #628474;
    color: #628474;
}
.main-one .activeSala,
.main-one .activeSuite,
.main-one .activeCozinha,
.main-one .activeBanheiros,
.main-one .activeVaranda {
    color: #628474;
    border-bottom: solid 1px #628474;
}

.main-one-content {
    margin: 0rem 1rem 2rem 1rem;
}
.plant {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: solid 3px transparent;
}
.plant img {
    width: 250px;
    height: fit-content;
    border-radius: 8px;
    margin: auto;
}

.main-two {
    padding: 0 35px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-x: auto;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.main-two i {
    font-size: 1.2em;
    color: var(--color-text);
}

.main-two h5 {
    margin-left: 10px;
}

.main-two-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}


.main-two-card a {
    width: 100%;
    border-radius: 30px;
    flex-direction: row;
    border: solid .1px var(--color-border);
    box-shadow: 0 2px 2px var(--color-border);
    margin: 0px 5px 60px 0px;
    transform: translateY(1em);
    transition: all .4s linear;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0 2px 2px #628474;
}

.main-two-card a h4 {
    transition: all .4s linear;
}

.main-two-card a:hover {
    transform: translateY(0.9em);
    box-shadow: 0 4px 4px #628474;
    background-color: #eee;
    color: #628474;
}

.main-two-card a:hover h4 {
    color: #628474;
}

.main-two-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-two-card h4 {
    padding: 10px;
    color: var(--color-text);
}

.main-two-card p {
    font-size: .8em;
}



@media only screen and (min-width: 620px) {
    .main-two {
        padding: 0 150px;
    }
}

@media only screen and (min-width: 800px) {

    .main-two {
        padding: 0 200px;
    }
}

@media only screen and (min-width: 950px) {

    .main-two {
        padding: 0 300px;
    }
}

@media only screen and (min-width: 1150px) {

    .main-two {
        padding: 0 400px;
    }
}

.main-tree {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 120px 20px 10px 20px;
}

.main-tree a {
    transition: all .4s linear;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    transform: translateY(1em);
}

h3 {
    color: var(--color-text);
    transition: all .3s linear;
    margin: -15px 0 50px 30px;
    text-align: center;
    font-size: .7rem;
}

h3:nth-child(2) {
    margin-top: -60px;
}

.main-four {
margin-top: -5rem;

width: 100%;
}

.main-four ul {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-inline-start: 0px;
    margin-bottom:  50px;
}

.card {
    margin:  90px 4px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    /* transition: transform 0.8s, opacity 0.8s, color 0.8s; */
    color: transparent;
    cursor: zoom-in;
    height: 100px;
}
/* 
.card a {
    transform: scale(0);
    color: transparent;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
} */

/* .card span {
    transform: scale(1) translate(0, -50%);
    color: transparent;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
} */

.card:hover {
    z-index: 9;
    color: #628474;
}

.card:hover a {
    color: #628474;
    opacity: 1;
}

.card:hover span {
    color: #628474;
    opacity: 1;
}


.card img {
    color: transparent;
    border-radius: 8px;
    overflow-y: hidden;
    width: 180px;
}
.card-title {
    font-size: 1.6em;
    color: #628474;
    margin-bottom: 30px;
    width: max-content;
    border-bottom: solid .1px var(--color-border);
    
}

.card-thumb {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: solid 3px transparent;
    width: 150px;
}
.card-thumb img{
    width: 250px;
    height: fit-content;
    border-radius: 8px;
}
</style>
