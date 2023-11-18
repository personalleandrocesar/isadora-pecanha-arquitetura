

<template>
  <div class="logoAnimationSix">

    <div class='main-one'>
        <NuxtLink to="/projetos">
          <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/projetos.png" width="70" height="70" />
        </NuxtLink>

    </div>
    </div>
  <NuxtPage />

</template>
<style scoped>

i {
  color: var(--color-text);
  margin: auto;
}

h4 .icon {
  margin: -4px 0 0 0  ;
}


iframe {
  margin-left: 10px;
}

code {
  font-size: 0.5em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px var(--color-text);
}

.main-one {
    display: flex;
    justify-content:flex-start;
    flex-direction: row;
    align-items:center;
    flex-wrap: wrap;
    margin:32px 20px 30px 20px;
}

.main-one a {
  transition: all .4s linear;
  border: solid .1px var(--color-border);
  border-radius: 50px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content:space-around;
  flex-direction: row;
  align-items:center;
  flex-wrap: wrap;
  transform: translateY(1em);
  box-shadow: 0 .5px .5px #9eb8a7;
}

.main-one a:hover {
  transform: translateY(0.9em) ;
  box-shadow: 0 4px 4px #9eb8a7;
  color: #9eb8a7;
  background-color: #eee;
}

.main-one a.router-link-exact-active {
  transform: translateY(1em);
box-shadow: 0 4px 4px #99bca6;
  color: #9eb8a7;
  background-color: #eee;
}


h3 {
    color: var(--color-text);
  transition: all .3s linear;
  margin:-15px 0 50px 30px;
  text-align: center;
    font-size: .7rem;
}

h3:nth-child(2) {
  margin-top: -60px;
}

</style>
