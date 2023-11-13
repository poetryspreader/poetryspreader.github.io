<template>
  <section class="feedback">
    <div class="container">
      <div class="main-category">
        {{ $t('feedback.pre-title') }}
      </div>
      <div class="main-title">
        {{ $t('feedback.title') }}
      </div>
    </div>
    <feedback-carousel :feedbacks="feedbacks" />
  </section>
</template>
<script>
import FeedbackCarousel from "@/components/FeedbackCarousel.vue";
export default {
  data() {
    return {
      mainCategory: 'отзывы',
      mainTitle: 'Что говорят про нас гости?',
      feedbacks: [
        {
          starAmount: 1,
          text: 'Были первый раз. Всем остались довольны. 2 террасы (не курящим и курящим). Места хватило, и сели и 2 коляски рядом поставили, при этом никому не мешали. Обслужили очень быстро, не смотря на запару. Заказ долго не ждали, всё подали горячим, вкусным. Обязательно приедем ещё и не раз!',
          author: 'Jānis Bērziņš'
        },
        {
          starAmount: 2,
          text: 'Были первый раз. Всем остались довольны. 2 террасы (не курящим и курящим). Места хватило, и сели и 2 коляски рядом поставили, при этом никому не мешали. Обслужили очень быстро, не смотря на запару. Заказ долго не ждали, всё подали горячим, вкусным. Обязательно приедем ещё и не раз!',
          author: 'Anna Bērziņa'
        },
        {
          starAmount: 3,
          text: 'Были первый раз. Всем остались довольны. 2 террасы (не курящим и курящим). Места хватило, и сели и 2 коляски рядом поставили, при этом никому не мешали. Обслужили очень быстро, не смотря на запару. Заказ долго не ждали, всё подали горячим, вкусным. Обязательно приедем ещё и не раз!',
          author: 'Gustavs Brigmanis'
        },
        {
          starAmount: 4,
          text: 'Были первый раз. Всем остались довольны. 2 террасы (не курящим и курящим). Места хватило, и сели и 2 коляски рядом поставили, при этом никому не мешали. Обслужили очень быстро, не смотря на запару. Заказ долго не ждали, всё подали горячим, вкусным. Обязательно приедем ещё и не раз!',
          author: 'Aleksanders Brigmanis'
        }
      ]
    }
  },
  components: {
    FeedbackCarousel
  }
}
</script>
<style lang="scss">
.feedback {
  padding: 120px 0;
  text-align: center;
}
</style>