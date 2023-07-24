

<template>
  <div class="logoAnimationNav">
    <div class="nav-bottom">
     <a to="/servicos">
        <h5>CNPJ: 7i68765897698760 </h5>
     </a>
  </div>
  </div>
</template>

<style scoped>
h5 {
  margin: 9px 0 13px 0;
  font-size: .9em;
  color: #9eb8a7;
}
.svg-inline--fa {
  font-size: 1.1em;
}
.nav-bottom {
  position: fixed;
  bottom: .1px;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  line-height: 0;
  z-index: 10;
  z-index: 20;
}

.nav-bottom div {
  cursor: pointer;
}

.nav-bottom div h5 {
  margin: 0;
  padding:0;
  font-size: 1em;
}

.nav-bottom a {
  text-decoration: none;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: var(--color-text);
  font-size: .9em;
  margin: 10px 0 0px 0;
}

.nav-bottom a:hover {
  text-shadow: 0px 0px .5px #ffffff10;
}

.nav-bottom a.router-link-exact-active {
  color: #fadb41;
}
</style>
