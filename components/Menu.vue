<script setup>
const Menu = ref(true)
const openMenu = () => {
    Menu.value = !Menu.value
}
</script>
<template>
    <div v-if="Menu">
        <Icon name="humbleicons:bars" @click="openMenu"/>
    </div>
    <div v-else>
        <Icon name="material-symbols:close" @click="openMenu"/>
    </div>
</template>
<style scoped>
div {
    position: fixed;
    top:15px;
    right:15px;
}
div .icon {
    zoom: 1.4;
}
</style>