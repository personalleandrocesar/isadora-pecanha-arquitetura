<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <div class="homeAnimation">

      <div class='main-four'>

        <div class='main-four-card'>
          <a href="https://docs.google.com/forms/d/1xn0DHP1O2N1hCFyClRgCGdcRpA7UGcmAZoYaXSkA4Es/viewform?edit_requested=true" target="_blank" @click.native="scrollToTop()" >
            <h4>
              <Icon name="fluent:clipboard-checkmark-24-filled" />

            Solicite seu orçamento </h4>
          </a>
        </div>

        <div class='main-four-card'>
          <a href="https://api.whatsapp.com/send?phone=5521966579611%20&text=Ol%C3%A1%20Isadora,%20me%20chamo%20" target="_blank" @click.native="scrollToTop()">
            <h4>
              <Icon name="ri:whatsapp-fill" />

            Nosso Contato pelo Whatsapp </h4>
          </a>
        </div>

      </div>
      <br>


      <div class="main-two">
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

    </div>
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

.main-two {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0 45px 0px;
  color: var(--color-text);
}

.main-two div {
  display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

.main-two .icon {
  font-size: 20px;
  margin: 2px 0;
  transition: all .4s linear;
}


.main-two a {
  border: solid .1px var(--color-border);
  height: 60px;
  width: 60px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size:.7em;
  transition: all .4s linear;
  margin: 0px 4px 20px 4px;
  border-radius: 15px;
  transform: translateY(1em);
}
.main-two a:hover {
  transform: translateY(0.8em) ;
  box-shadow: 0 5px 5px #9eb8a7;
  background-color: #eee;
  color: #9eb8a7;
}



.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 10px 0;
  color: var(--color-text);
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-tree h5{
  margin-left: 10px;
}

.main-four {
  padding: 0 40px;
  display: flex;
  justify-content:center;
  flex-direction: column;
  overflow-x:auto;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.main-four i {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-four h5{
  margin-left: 10px;
}

.main-four-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


.main-four-card a {
  width: 100%;
  border-radius: 30px;
  flex-direction: row;
  border: solid .1px var(--color-border);
  box-shadow: 0 0px 5px var(--color-border);
  margin: 0px 5px 20px 0px;
  transform: translateY(1em);
  transition: all .4s linear;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.main-four-card a h4 {
  transition: all .4s linear;
}

.main-four-card a:hover {
  transform: translateY(0.8em) ;
  box-shadow: 0 5px 5px #9eb8a7;
  background-color: #eee;
  color: #9eb8a7;
}

.main-four-card a:hover h4{
  color: #9eb8a7;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  padding: 10px;
  color: var(--color-text);
}

.main-four-card p {
  font-size: .8em;
}


@media only screen and (max-width: 382px) {
  .main-tree-card {
    width: 90%;
  }
}
</style>
