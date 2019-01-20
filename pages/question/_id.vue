<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 text-center">
        <h2 class="mt-5">{{ question.title }}</h2>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div
        v-for="(resp, key) in question.response"
        :key="key"
        class="col-12 col-sm-4 col-md-3 text-center"
      >
        <button
          :disabled="isShow"
          class="btn btn-light btn-lg w-100 border rounded mt-1 mb-1"
          @click="incrementResponse(key)"
        >
          {{ resp.name }}
          <span
            v-if="isShow"
            class="d-block mt-2 font-weight-bold"
          >
            {{ getResult(resp.count) }}
          </span>
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-md-9 text-right">
        <nuxt-link
          v-if="isShow"
          :to="`/question/${nextId}`"
          class="text-primary"
        >
          Question suivante
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  async fetch({ store, params }) {
    if (store.state.questions.list.length === 0) {
      await store.dispatch('questions/getQuestions')
    }
  },
  asyncData({ params }) {
    return {
      id: params.id,
      isShow: false
    }
  },
  computed: {
    ...mapState({
      sortIdList: state => state.questions.shuffleIdList
    }),
    ...mapGetters({
      getQuestionById: 'questions/getQuestionById',
      getCountByQuestionId: 'questions/getCountByQuestionId'
    }),
    question() {
      return this.getQuestionById(this.id)
    },
    totalCount() {
      return this.getCountByQuestionId(this.id)
    },
    nextId() {
      // ?
      return this.id
    }
  },
  methods: {
    test: function() {
      this.$store.dispatch('questions/readFromFirestore')
    },
    incrementResponse: function(key) {
      this.showResponse()

      this.$store.dispatch('questions/voteForQuestion', {
        id: this.id,
        key: key
      })
    },
    showResponse: function() {
      this.isShow = true
    },
    getResult: function(count) {
      const round = Math.round((count * 100) / this.totalCount) || 0

      return `${round} %`
    }
  }
}
</script>
