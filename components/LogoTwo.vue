<template>
    <header>
        <div class='logo'>

            <NuxtLink to="/">
                <img alt="Isadora Peçanha Arquitetura Logo" src="@/assets/logo.png" width="100" height="100" />
            </NuxtLink>
            <div class='logo-text'>
                
                <span class='logoAnimationSeven'>
                    <NuxtLink to="/">
                        <h1>ISADORA PEÇANHA</h1>
                    </NuxtLink>
                </span>
                
                <span class='logoAnimationSevenTwo'>
                        <NuxtLink to="/">
                        <h3>ARQUITETURA E INTERIORES</h3>
                    </NuxtLink>
                </span>
            </div>
        </div>
    </header>

</template>

<style scoped>
.logo {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px;
    height: 100px;
    font-family: 'Architects Daughter', cursive;
    border-bottom: solid .2px #62847420;
}
.logo-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    font-family: 'Architects Daughter', cursive;;
    margin-left: -5px;
}


h1 {
    font-size: .9rem;
    color: var(--color-heading);
    font-family: "Lato";
  }

h3 {
    color: var(--color-text);
  transition: all .3s linear;
  margin: -2px 0 0px 0;
  text-align: center;
    font-size: .5rem;
}

</style>
