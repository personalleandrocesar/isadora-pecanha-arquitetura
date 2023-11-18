<template>
  <div class="logoAnimationSix">


        <div class='main-one'>
            <NuxtLink to="/sobre">
              <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/sobre.png" width="70" height="70" />
            </NuxtLink>

        </div>


    <div class='main-two'>
      <div>
        <h1>Isadora Peçanha</h1>
        <img src="@/img/isadora.png">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Alias ipsa a pariatur ab id delectus odio, quam placeat ea 
          rerum sunt in dolorum officia. Nam aliquid fuga quo unde 
          adipisci.
        </p>
      </div>
    </div>

<!-- 
<div class='main-tree'>
  <div>

        <h5><Icon name="mdi:timeline-check" /> Linha do tempo</h5>
        <ContentSlot name="imc-one"/>
      </div>
    </div>

    <div class='main-five'>
      <div class='main-five-card'>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisTres' class='dateYear' :class='{ dateYearHover: aplicarNine }'>2023</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisDois' class='dateYear' :class='{ dateYearHover: aplicarEight }'>2022</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisUm' class='dateYear' :class='{ dateYearHover: aplicar }'> 2021</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umOito' class='dateYear' :class='{ dateYearHover: aplicarTwo }'> 2018</h4>
        <h4 class='dateYear'>|</h4>
        <br>

      </div>
      <div class='vAcontecimentos' v-html='acontecimentos'></div>
    </div> -->







    <br>
    <br>
    <br>

  </div>
</template>
<script>

export default {
  head: {
    title: "Sobre | Leandro Cesar",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Professor Leandro Cesar Ramos da Costa | Site para Conteúdos e Serviços => Personal Trainer | Consultoria Online e Presencial | Acupuntura | Atendimentos em Niterói e São Gonçalo - RJ" },
      { hid: "keywords", name: "description", content: "Personal trainer, Acupuntura, Consultoria" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/img/favicon.svg" },
      { rel: "apple-touch-icon", size: "180x180", href: "/img/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", size: "32x32", href: "/img/favicon-32x32.png" },
      { rel: "icon", type: "image/png", size: "16x16", href: "/img/favicon-16x16.png" },
      { rel: "apple-touch-icon", size: "180x180", href: "/img/apple-touch-icon.png" },
      { rel: "mask-icon", href: "/img/safari-pinned-tab.svg", color: "#002937" }
    ],
  },
  data() {
    return {
      image: '',
      aplicar: "",
      aplicarTwo: "",
      aplicarTree: "",
      aplicarFour: "",
      aplicarFive: "",
      aplicarSix: "",
      aplicarSeven: "",
      aplicarEight: true,
      aplicarNine: "",
      acontecimentos: `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa;
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `}
  },
  methods: {
    doisUm() {
      this.aplicar = true,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;"> Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade
              Castelo Branco - UCB;
            </li>
          </ul>
          <h4 style="margin-left: 10px;"> Julho</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade
              Castelo Branco - UCB;
            </li>
          </ul>
        <h4 style="margin-left: 10px;"> Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);
            </li>
          </ul>
          `;
    },
    umOito() {
      this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            </li>
          </ul>
          `;
    },
    umSete() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = true,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Março</h4>
        <ul class="com-bullet com-indent">
          <li>
            Início do curso de Formação de Professor de Yoga - Shiva Studio - Rio de Janeiro - RJ;
          </li>
          </ul>
          `;
    },
    umUm() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = true,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Março</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          `;
    },
    zeroOito() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = true,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `;
    },
    zeroCinco() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = true,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `;
    },
    oitoSeis() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = true,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Outubro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          `;
    },
    doisDois() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = true,
        this.aplicarNine = false,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa;
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `;
    },
    doisTres() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = true,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do Curso de graduação em Análise e Desenvolvimento de Sitemas na Universidade Estácio;
            </li>
          </ul>
          `;
    },

  }
}
</script>

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

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color: #888;
}

.divider {
  height: 15px;
  background-color: #fadb4154;
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
  border-radius: 50px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content:flex-start;
  flex-direction: row;
  align-items:center;
  flex-wrap: wrap;
  transform: translateY(1em);
}


.main-two {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px 0 45px 20px;
  color: var(--color-text);
}

.main-two div {
  display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .main-two h1 {
    margin-bottom: 30px;
  }

  .main-two p {
    margin-top: 30px;
  }


.main-two img {
  margin: 0 60px;
  width: 80%;
  margin: auto;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-tree .icon {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-tree h5 {
  margin-left: 25px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 30px 0;
  color: var(--color-text);
  overflow-x: auto;
}
@media only screen and (max-width: 310px) {
  .main-four {
      margin: 0px 0 20px 0;
    }
}

@media only screen and (min-width: 340px) {
  .main-four {
      margin: 0px 0 0px 0;
    }
}
@media only screen and (min-width: 370px) {
  .main-four {
      margin: 0px 0 -15px 0;
    }
}

@media only screen and (min-width: 470px) {
  .main-four {
      margin: 0px 0 -80px 0;
    }
}
@media only screen and (min-width: 680px) {
  .main-four {
      margin: 0px 0 -120px 0;
    }
}

.main-four .icon {
  font-size: 1.1em;
}

.main-four h5 {
  margin-left: 10px;
}

.main-four-card {
  height: 350px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card .icon:nth-child(9),
i:nth-child(11),
i:nth-child(15) {
  color: var(--color-text);
}

.main-four-card a {
  border: solid .1px #fadb41;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-five .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-five h5 {
  margin-left: 10px;
}

.main-five-card {
  display: flex;
  justify-content: felx-start;
  flex-direction: column;
  margin-bottom: 7px;
  align-items: center;
}

.main-five-card a {
  border: solid .1px var(--color-text);
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.vAcontecimentos {
  border-left: solid 4px var(--color-text);
  margin-left: 15px;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-six .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-six-card h4 {
  margin-left: 30px;
}

.main-six h5 {
  margin-left: 10px;
}

.main-six h5 {
  margin: 10px;
}

.main-six-card {
  height: 440px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid .1px #fadb41;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: var(--color-text);
  box-shadow: 0px 10px 10px#bbb;
  overflow-x: auto;
}

.main-seven .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-seven h5 {
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto 20px auto;
  width: 60%;
}

.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

.dateYear {
  color: var(--color-text);
  cursor: pointer;
}

.dateYearHover {
  color: #fff;
  font-weight: bold;
}

@media only screen and (max-width: 369px) {}
</style>
