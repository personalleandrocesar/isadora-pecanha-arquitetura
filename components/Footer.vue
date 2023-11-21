<template>
  <div class='main-footer'>
    <p>&#169; 2019-2023</p>
    <p>isadorapecanha.com | CNPJ: XX.XXX.XXX/XXXX-XX</p>
  </div>
</template>


<style scoped>
body {
    font-family: 'Philosopher', sans-serif;
    color: var(--color-text);
    line-height: 1.6;
}

iframe {
    margin-left: 10px;
}

a {
    text-decoration: none;
    color: var(--color-text);
}

.icon {
    color: var(--color-text);
    font-size: .9em;
    margin: auto;
}


.divider {
    height: 15px;
    background-color: #fadb4154;
}


.main-footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #99bca6 ;
    font-size: .7em;
    color: #555;
}

.main-footer p {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>

