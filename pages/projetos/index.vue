<script setup>
useHead({
    titleTemplate: 'Projetos | Isadora Peçanha - Arquitetura e Interiores',
})
const route = useRoute()

const data = await useFetch(`/api/projects`)
const photoView = () => {
    return data.data.value
}

const grid = ref(true)
const list = ref(true)
function swit() {
    grid.value = !grid.value
    list.value = !list.value
}
</script>

<template>
    <Menu/>
    <LogoTwo/>
    
    <div class='main-one'>
        <NuxtLink to="/projetos">
            <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/projetos.png" width="70" height="70" />
        </NuxtLink>
        
    </div>
    <!--
    <div class='main-two'>
        <div v-if="grid">
            <icon name="material-symbols:grid-view-rounded" @click="swit"/>
        </div>
        <div v-else>
            <icon name="material-symbols-light:picture-in-picture-center-rounded" @click="swit"/>
        </div>
    </div>
    -->
    <div v-if="list" class='main-tree'>
        <ul>
            <li v-for="item in photoView()" class="card">
                <div>
                    <span class="card-title">
                        {{ item.nome }}
                        <NuxtLink :to="`/projetos/${item.link}`">Detalhes
                            <Icon name="material-symbols:arrow-right-alt-rounded" />
                        </NuxtLink>

                    </span>
                    <img :src="item.img" />
                </div>
            </li>
        </ul>
    </div>
    <div v-else  class='main-four'>
        <ul>
            <li v-for="item in photoView()" class="card-grid">
                <div>
                    <img :src="item.img" />
                </div>
            </li>
        </ul>
    </div>
    <NuxtPage />
    <br>
    <br>
    <Footer/>
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
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 100px 20px 10px 20px;
}

.main-one a {
    transition: all .4s linear;
    border-radius: 50px;
    height: 80px;
    width: 80px;
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

.main-two {
    width: 100%;
}

.main-two ul {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-inline-start: 0px;
}

.main-two .icon {
    zoom: 1.4;
    margin-right: 15px;
    margin-bottom: 10px;
    text-align: right;
}
.main-two div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
}
.main-tree {
    border-bottom: solid .1px var(--color-border);
    width: 100%;
}

.main-tree ul {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding-inline-start: 0px;
    margin-top: 10px;
}

.main-tree ul li {
    
    margin: 0px 15px 0 15px;
}

.main-tree .icon {
    zoom: 1.4;
    margin-bottom: 0px;
    text-align: right;
}

.main-four ul li {
    
    margin: 0px 15px 0 15px;
}

.main-four .icon {
    zoom: 1.4;
    margin-bottom: 0px;
    text-align: right;
}
.card {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
    color: transparent;
}

.card div {
    margin-top: -20px;
}

.card a {
    transform: scale(0);
    color: transparent;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
}

.card span {
    transform: scale(1) translate(0, -50%);
    color: transparent;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
}

.card:hover {
    z-index: 9;
    color: #628474;
}

.card:hover a {
    color: #628474;
    transform: scale(1);
    opacity: 1;
}

.card:hover span {
    color: #628474;
    opacity: 1;
    transform: scale(1)
}

.card:hover img {
    opacity: .2;
}


.card img {
    color: transparent;
    opacity: 1;
    border: solid 3px #628474;
    border-radius: 8px;
    overflow-y: hidden;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
}

.main-four {
    border-bottom: solid .1px var(--color-border);
    width: 100%;
}

.main-four ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.card-grid {
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
    color: transparent;    
}

.card-grid a {
    transform: scale(0);
    color: transparent;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
}


.card-grid:hover {
    z-index: 9;
    color: #628474;
}

.card-grid:hover a {
    color: #628474;
    transform: scale(1);
    opacity: 1;
}

.card-grid:hover span {
    color: #628474;
    opacity: 1;
    transform: scale(1)
}

.card-grid:hover img {
    opacity: .2;
}


.card-grid img {
    color: transparent;
    opacity: 1;
    border: solid 3px red;
    border-radius: 8px;
    overflow-y: hidden;
    transition: transform 0.8s, opacity 0.8s, color 0.8s;
}

.card-title {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 135px;
    font-size: 1.2em;
    border: solid 3px transparent;
    z-index: 10;
}
</style>
