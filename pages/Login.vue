<script setup>
const { data } = await useFetch('/api/personal')
</script>

<template>
    <div id="login">
        <div>
            <div class='logo'>
                <LCLogoTree />
                <h1>webapp.leandrocesar.com</h1>
                <h3>Acesse sua conta</h3>
                <div>
                    <div>
                        <h4>E-mail</h4>
                        <input type="email" name="" id="usuario" placeholder="Digite seu e-mail" autofocus v-model="email">
                        <br>
                        <h4>Senha</h4>
                        <input type="password" @keyup.enter="trigger" name="" id="senha" placeholder="Digite sua senha" v-model="senha">
                        <br>
                        <div>
                            <input class='button-call' type="submit" value="ENTRAR" id="btn" @click="enterClicked" ref="sendReply">
                            <!-- <RouterLink to="recuperar"><h5>Esqueci minha senha</h5></RouterLink> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            senha: '',
        }
    },
    methods: {
        enterClicked(){
        if (this.email === 'data@gmail.com' & this.senha === '1234') {
                router.replace('/personal')
            }
    },
    trigger() {
        this.$refs.sendReply.click()
    }
},

        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
</script>
<style scoped>

#login {
    font-family: "Philosopher";
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0 0px 0;
}

.logo h1 {
    margin: 80px 0 0px 0;
    color: #fadb41;
}

input {
    height: 2em;
    text-decoration: none;
    transition: all .4s linear;
    color: #777;
    text-indent: 0;
    background: #fff;
    width: 100%;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid 2px #eee;
    padding-left: 20px;
}

input:focus {
    background-color: #fffde1;
    border-color: #fadb41;
}

input:hover {
    background-color: #fffde1;
}


body {
    background: #fff;
    font-family: 'Philosopher', sans-serif;
    color: var(--color-text);
    line-height: 1.6;
}

iframe {
    margin-left: 10px;
}

h1 {
    color: var(--color-text);
    transition: all .3s linear;
    cursor: pointer;
    font-size: 1.5em;
}

h3 {
    color: var(--color-text);
    transition: all .3s linear;
}

h4 {
    color: var(--color-text);
    transition: all .3s linear;
    margin: 0 0 0 -10px;
}

h4:nth-child(1) {
    color: var(--color-text);
    transition: all .3s linear;
    margin: 20px 0 0 -10px;
}

h1:hover {
    color: #fadb41;

}

a {
    text-decoration: none;
    color: var(--color-text);
    transition: all .4s linear;
}

a:hover {
    color: #fadb41;
}

svg a {
    text-decoration: none;
    color: var(--color-text);
    transition: all .4s linear;
}

svg a:hover {
    color: #fadb41;
}

i {
    color: var(--color-text);
    font-size: .9em;
    margin: auto;
}

code {
    font-size: 0.6em;
    margin-left: 15px;
    padding-left: 10px;
    border-left: solid 5px #eee;
    color: #888;
}

.divider {
    height: 15px;
    background-color: #dddddd54;
}


.button-call{
  margin: auto;
  transition: all .4s linear;
 background-color: var(--color-background);
  border: solid 1px #fadb4170;
  box-shadow: 0 0px 5px #fadb4170;
  border-radius: 8px;
  cursor:pointer;
  width: 50%;
  text-align: center;
  padding-left: 10.5%;
  color: var(--color-text);
}

.button-call:hover {
 background-color: #fadb4120;
}

style {
    background-color: black;
}


@media only screen and (max-width: 369px) {}</style>
