<script setup>
const route = useRoute()

const data = await useFetch(`/api/projects`)
const photoView = () => {
  return data.data.value
}
</script>

<template>
  <div>
    <!-- <div class="homeAnimation"> -->
    <div class="main-one">
      <div>

        <a href="mailto:contato@isadoraarq.com">
          <Icon name="ic:outline-alternate-email" /> E-mail
        </a>
        <a href="https://br.pinterest.com/ipeanha1007/">
          <Icon name="mdi:pinterest" /> Pinterest
        </a>

        <a href="https://www.instagram.com/isadorapecanha_arquitetura/">
          <Icon name="uil:instagram-alt" /> Instagram
        </a>
      </div>
    </div>

    <div class='main-two'>

      <div class='main-two-card'>
        <a href="https://api.whatsapp.com/send?phone=5521966579611%20&text=Ol%C3%A1%20Isadora,%20me%20chamo%20"
          target="_blank" @click.native="scrollToTop()">
          <h4>
            <Icon name="ri:whatsapp-fill" />
            Nosso Contato pelo Whatsapp
          </h4>
        </a>
      </div>

    </div>
    <br>



  </div>
  
  <div class='main-tree'>
    <NuxtLink to="/projetos">
      <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/projetos.png" width="70" height="70" />
    </NuxtLink>

  </div>
  <div class='main-four'>
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
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0 35px 0px;
  color: var(--color-text);
  transition: all .4s linear;
}

.main-one div {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0px;
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
  border: solid .1px var(--color-border);
  height: 40px;
  width: 100px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  font-size: .7em;
  transition: all .4s linear;
  margin: 0px 4px 0px 4px;
  border-radius: 15px;
  transform: translateY(1em);
  font-weight: bold;
  box-shadow: 0 2px 2px #628474;
}

.main-one a:hover {
  transform: translateY(0.9em);
  box-shadow: 0 4px 4px #628474;
  background-color: #eee;
  color: #628474;
  margin: 0px 4px 0px 4px;
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
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: -7px 20px 10px 20px;
}

.main-tree a {
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

.main-four {
  border-bottom: solid .1px var(--color-border);
  width: 100%;
}

.main-four ul {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-inline-start: 0px;
}

.card {
  margin: 0 10px;
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
}</style>
