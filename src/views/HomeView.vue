<template>
  <div>
    <MovieAuto movieSrc="/pexels-cottonbro-5836750.mp4" />
    <CarouselImg />
    <GridImg :images="galleryImages" :columnsXs="2" :columnsSm="3" />
    <CampagneImg :images="campagneImages" />
    <ProductReview />


  </div>
</template>

<script>
import MovieAuto from '../components/HomeComponents/MovieAuto.vue'
import CarouselImg from '../components/HomeComponents/CarouselImg.vue'
import GridImg from '../components/HomeComponents/GridImg.vue'
import CampagneImg from '../components/HomeComponents/CampagneImg.vue'
import ProductReview from './Account/AccountChildren/ProductReview.vue'

export default {
  name: 'HomeView',
  components: {
    MovieAuto,
    CarouselImg,
    GridImg,
    CampagneImg,
    ProductReview
  },

  data() {
    return {
      galleryImages: [
        {
          src: '/img1200/pk-paris/pk-paris-100.jpg',
          alt: 'PK Paris 100'
        },
        {
          src: '/img1200/pk-paris/pk-paris-106.jpg',
          alt: 'PK Paris 106'
        },
        {
          src: '/img1200/pk-paris/pk-paris-107.jpg',
          alt: 'PK Paris 107'
        },
        {
          src: '/img1200/pk-paris/pk-paris-104.jpg',
          alt: 'PK Paris 104'
        },
        {
          src: '/img1200/pk-paris/pk-paris-108.jpg',
          alt: 'PK Paris 108'
        },
        {
          src: '/img1200/pk-paris/pk-paris-102.jpg',
          alt: 'PK Paris 102'
        }
      ],

      campagneImages: [
        // {
        //   src: '/img1200/mono/mono-140',
        //   alt: 'mono 140'
        // },
        {
          src: '/img1200/mono/mono-143.jpg',
          alt: 'mono 143'
        },
        {
          src: '/img1200/mono/mono-141.jpg',
          alt: 'mono 141'
        },
        {
          src: '/img1200/mono/mono-142.jpg',
          alt: 'mono 142'
        }
        /* {
          src: '/img1200/thumb/thumb-132.jpg',
          alt: 'thumb-132'
        },
        {
          src: '/img1200/thumb/thumb-133.jpg',
          alt: 'thumb-133'
        },
        {
          src: '/img1200/thumb/thumb-134.jpg',
          alt: 'thumb-134'
        }*/
      ],

      popupVisible: false
    }
  },

  methods: {
    showPopup() {
      this.popupVisible = true
    }
  }
}
</script>
<style>
.newsletter-link {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  z-index: 9999;
}

@media (max-width: 768px) {
  .newsletter-link {
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    padding: 8px 16px;
  }
}
</style>
