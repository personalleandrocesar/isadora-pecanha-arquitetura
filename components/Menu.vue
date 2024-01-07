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
                    <NuxtLink to="/" class="degrau">
                      <div>
                        Home
                    
                      </div>
                    </NuxtLink>
                    

                      <!-- <NuxtLink to="/projetos" class="degrau">
                        <div>
                          Projetos
                          
                        </div>
                      </NuxtLink> -->
                   
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
    top:25px;
    z-index: 100; 
    right:15px;
}
.menu .icon {
  background-color: #62847420;
  backdrop-filter: blur(15px);
    zoom: 1.6;
    color: #628474;
    border-radius: 50px;
    padding: 3px;
}

.menuMain {
  top: 85px; 
  z-index: 1004; 
  transform: translateX(0%); 
  position: fixed; 
  width: 100%;
  background-color: #ffffff99;
  text-align: left;
  backdrop-filter: blur(15px);
  border-top: solid .1px #62847450;
}

.menuMain a div{
    color: #aaa ;
    font-weight: bolder;
    margin: 20px;
}
.menuMain a:hover div{
    color: #628474 ;
    font-weight: bolder;
    margin: 20px;
}
.menuMain a.router-link-exact-active div{
    color: #628474 ;
    font-weight: bolder;
    margin: 20px;
    text-transform: uppercase;
    
}


</style>