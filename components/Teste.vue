<script setup>

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
  <div class='main-tree logoAnimationSevenTwo'>
    <NuxtLink to="/projetos">
      <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/projetos.png" width="70" height="70" />
    </NuxtLink>

  </div>
  <div class='main-four logoAnimationSevenTwo'>
    <div class="card">
      
    </div>
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
  box-shadow: 0 2px 2px #62847490;
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
  margin: -7px 20px 30px 20px;
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

.main-tree a:hover {
  transform: translateY(0.9em);
  box-shadow: 0 4px 4px #628474;
  color: #628474;
  background-color: #eeeeee;
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
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow-x: auto;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-bottom: solid .1px var(--color-border);
}

.card {
  height: 350px;
  width: 95%;
  background-color: #62847410;
}
</style>
