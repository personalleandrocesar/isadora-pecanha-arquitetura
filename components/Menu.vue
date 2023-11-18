<script setup>
const Menu = ref(true)
const openMenu = ref(false)
const clickMenu = () => {
    Menu.value = !Menu.value
    openMenu.value = !openMenu.value
}
</script>
<template>
    <div v-if="Menu" class="menu">
        <Icon name="humbleicons:bars" @click="clickMenu"/>
    </div>
    <div v-else class="menu">
        <Icon name="material-symbols:close" @click="clickMenu"/>
    </div>

    <div v-if="openMenu" class="menuMain">        
                    <NuxtLink to="/projetos" class="degrau">
                      <div>
                        Projetos
                    
                      </div>
                    </NuxtLink>
                    <NuxtLink to="/sobre" class="degrau">
                      <div>
                        Sobre
                    
                      </div>
                    </NuxtLink>
      


          </div>
</template>
<style scoped>
.menu {
    position: fixed;
    top:15px;
    right:15px;
}
.menu .icon {
    zoom: 1.4;
}

.menuMain {
  top: 60px; 
  z-index: 1004; 
  transform: translateX(0%); 
  position: fixed; 
  width: 100%;
  background-color: #ffffff80;
  text-align: left;
  backdrop-filter: blur(15px);
  border-top: solid .1px #62847450;
  border-bottom: solid .1px #62847450;
}

.menuMain a div{
    color: #62847490 ;
    font-weight: bolder;
    margin: 20px;
}
.menuMain a.router-link-exact-active div{
    color: #628474 ;
    font-weight: bolder;
    margin: 20px;
}


</style>