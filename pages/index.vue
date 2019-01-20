<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <h1 class="mt-5">Bienvenue</h1>
      <p class="mb-5">Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has stationes appulit navem, sed ut Scironis praerupta letalia declinantes litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt controversa.</p>

      <template v-if="$store.state.questions.list.length">
        <nuxt-link
          :to="`/question/${firstId}`"
          class="btn btn-lg btn-primary"
        >
          Commencer
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store, params }) {
    await store.dispatch('questions/getQuestions')
  },
  computed: {
    ...mapGetters('questions', {
      firstId: 'getFirstShuffleId'
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
