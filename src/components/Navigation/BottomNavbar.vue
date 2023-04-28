<!-- https://bootstrap-vue.org/docs/components/navbar -->
<!-- https://mdbootstrap.com/docs/vue/extended/social-media/ -->
<!-- https://bbbootstrap.com/snippets/bootstrap-social-media-icons-navbar-69975984 -->
<template>
  <nav class="navbar fixed-bottom navbar-light bg-light mobile-navbar">
    <ul class="navbar-nav ml-auto d-flex flex-row mobile-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/">
          <span class="icon bi-facebook" />
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="https://www.twitter.com/">
          <span class="icon bi-twitter" />
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="https://www.instagram.com/">
          <span class="icon bi-instagram" />
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="https://www.pinterest.com/">
          <span class="icon bi-pinterest" />
        </a>
      </li>

      <li class="nav-item">
        <form class="form-inline" @submit.prevent="submitForm">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">E-mail:</span>
            </div>
            <input type="email" class="form-control" v-model="email" required />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="submit">
                Subscribe to our newsletter.
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>
    <!-- Nyhetsbrevsmodal -->
    <div
    class="modal fade" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel"
      aria-hidden="true" ref="newsletterModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newsletterModalLabel">
              Thank you for signing up.
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Your registration has been confirmed. Please check your email for
            further instructions.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BottomNavbar',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitForm() {
      // Skicka e-postadressen till servern och visa tackmeddelandet
      this.$refs.newsletterModal.classList.add('show')
      this.$refs.newsletterModal.style.display = 'block'
      this.$refs.newsletterModal.style.opacity = 1
      this.$refs.newsletterModal.setAttribute('aria-hidden', 'false')
      this.$refs.newsletterModal.setAttribute('aria-modal', 'true')
    },
    closeModal() {
      this.$refs.newsletterModal.classList.remove('show')
      this.$refs.newsletterModal.style.display = 'none'
      this.$refs.newsletterModal.style.opacity = 0
      this.$refs.newsletterModal.setAttribute('aria-hidden', 'true')
      this.$refs.newsletterModal.setAttribute('aria-modal', 'false')
    }
  }
}
</script>

<style lang="scss">
$nav-bg-color: #f8f9fa;
$text-color: #495057;
$btn-primary-bg-color: #3b4146;
$btn-primary-hover-bg-color: #747769;

.navbar {
  background-color: $nav-bg-color;
  opacity: 0.8;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
}

.navbar-nav>li {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  font-family: 'Segoe UI', sans-serif;
  color: $text-color;
  margin: 0 100px;
  padding: 0;
}

.nav-item {
  display: inline-flex;
}

.icon {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .icon {
    display: none;
  }

  .form-inline {
    display: none;
  }

  .navbar {
    display: block;
    opacity: 0;
  }
}
</style>
