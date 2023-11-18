

<template>
  <div class="logoAnimationSix">

    <div class='main-one'>
        <NuxtLink>
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
    margin: 20px 20px 30px 20px;
}

.main-one a {
  transition: all .4s linear;
  border-radius: 50px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content:space-around;
  flex-direction: row;
  align-items:center;
  flex-wrap: wrap;
  transform: translateY(1em);
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
