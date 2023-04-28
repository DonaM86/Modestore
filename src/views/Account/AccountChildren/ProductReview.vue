<!-- https://swiperjs.com/vue -->
<!-- https://madewithvuejs.com/carousels -->
<template>
  <!-- Recensioner hämtas från en variabel som heter "reviews" och loopas igenom med hjälp av en
      "v-for" loop för att skapa flera slide med hjälp av Swiper biblioteket.  -->
  <div class="review-carousel">
    <swiper :options="swiperOptions" @swiper:update="swiperUpdate">
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="swiper-content">
          <h2>{{ review.name }}</h2>
          <p>{{ review.text }}</p>
        </div>
      </swiper-slide>
      <template #pagination>
        <div class="swiper-pagination" />
      </template>
      <template #button-prev>
        <div class="swiper-button-prev" />
      </template>
      <template #button-next>
        <div class="swiper-button-next" />
      </template>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ReviewCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      reviews: [
        { name: 'Amanda', text: 'I love the clothing selection on this website! There are so many unique and trendy pieces to choose from.' },
        { name: 'Emma', text: 'The checkout process was a breeze and my order arrived so quickly! I\'m very impressed with this online store.' },
        { name: 'Olivia', text: 'The sizing charts were accurate and helpful in choosing the right size for me. The clothes fit perfectly!' },
        { name: 'Sophia', text: 'I appreciated the variety of payment options available. It made purchasing from this site easy and convenient.' },
        { name: 'Isabella', text: 'The product descriptions and photos were very detailed and gave me a good sense of what I was purchasing. The items exceeded my expectations!' },
        { name: 'Charlotte', text: 'I had a question about a product and the customer service team was incredibly helpful and responsive. I will definitely be a returning customer.' }
      ],

      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // så att autoplay fortsätter efter att användaren har interagerat med swiper
        }
      }
    }
  },
  methods: {
    swiperUpdate() {
      this.$nextTick(() => {
        this.$refs.swiper.update()
      })
    },
    changeReviews() {
      // Här byter vi datan i reviews
      this.reviews.push(this.reviews.shift())
    }
  },
  mounted() {

    setInterval(() => {
      this.changeReviews()
    }, 8000)
  }
}
</script>
<style>
.review-carousel {
  margin: 50px auto;
  position: relative;
}

.swiper-content {
  text-align: center;
  margin-bottom: 110px;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  cursor: pointer;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}
</style>
