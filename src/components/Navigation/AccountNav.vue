<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('auth')
    }
  }
}
</script>

<template>
  <div class="account-nav">
    <nav class="child-nav">
      <ul>
        <li>
          <RouterLink to="/account/konto" :class="{ active: $route.path === '/account/konto' }">{{ $t('Konto') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/account/favourites" :class="{ active: $route.path === '/account/favourites' }">{{
            $t('Favoriter') }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/account/help" :class="{ active: $route.path === '/account/help' }">{{ $t('Hjälp') }}
          </RouterLink>
        </li>

      </ul>
    </nav>
    <RouterView />
    <div id="divLogout">
      <RouterLink to="/">
        <button id="logout" @click="logout">Logout</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.account-nav {
  margin-top: 5rem;
}

.child-nav {
  margin: 2rem;
}

ul {
  margin: 30px;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
}

ul li {
  padding-left: 1em;
}

ul li:first-child {
  padding-left: 0em;
}

ul li a {
  font-family: 'jost';
  text-decoration: none;
  color: #3c3e3f;
  margin: 0.3rem;
  position: relative;
  /* KZ make sure the :after element is positioned relative to this element */
}

/* KZ Add the line under the link to show where you are */
ul li a.active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  /* Distance the line from the text */
  left: 5px;
  width: 20%;
  height: 2px;
  /* Height of the line */
  background-color: #818c85;
}

/* KZ Change the color of the link when hovered */
ul li a:hover {
  color: #818c85;
}

#logout {
  width: 100%;
  background-color: #3c3e3f;
  color: #f5f5f5;
  /*made the font a bit smaller to match the nav*/
  font-size: 0.5em;
  border: none;
  /*kz change the size just a little*/
  padding: 5px 15px;
}

#divLogout {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c3e3f;
  font-size: 1.5em;
}

@media (min-width: 601px) {
  .account-nav {
    margin-top: 6rem;
  }

  ul li a {
    margin: 1.5rem;
  }
}

@media (min-width: 768px) {
  .account-nav {
    margin-top: 6rem;
  }

  ul li a {
    margin: 3rem;
  }
}

@media (min-width: 980px) {
  #logout {
    margin: 2;
    font-size: 1em;
  }

  #divLogout {
    justify-content: center;
  }
}
</style>
