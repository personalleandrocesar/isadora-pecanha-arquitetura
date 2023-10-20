<template>
    <header>
        <div class='logo'>

            <img alt="Isadora Peçanha Arquitetura Logo" class="logo" src="@/assets/logo.png" width="200" height="200" />
            <span class='logoAnimationSeven'>
                <h1>ISADORA PEÇANHA</h1>
            </span>
            <span class='logoAnimationSevenTwo'>
                <h3>ARQUITETURA E INTERIORES</h3>
            </span>
        </div>
    </header>

</template>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}

</script>

<style scoped>
.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
    font-family: 'Architects Daughter', cursive;;
}


h1 {
    margin-top: -1.5rem;
    font-size: 1.7rem;
    color: var(--color-heading);
  }

h3 {
    color: var(--color-text);
  transition: all .3s linear;
  margin:-7px 0 50px 0;
  text-align: center;
    font-size: .9rem;
}

h3:nth-child(2) {
  margin-top: -60px;
}

</style>
