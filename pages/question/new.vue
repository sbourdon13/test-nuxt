<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-6 text-left">
        <h2 class="mt-5">Nouvelle question</h2>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <form
        class="col-12 col-sm-10 col-md-6"
        @submit.prevent="submitQuestion"
      >
        <div class="form-group">
          <label for="title">Titre de la question</label>
          <input
            v-validate="'required|alpha|min:5|max:10|email'"
            id="title"
            v-model="title"
            type="text"
            class="form-control"
            aria-describedby="TitleHelp"
            placeholder="Titre"
            name="title"
          >

          <ul>
            <li
              v-for="(error, index) in errors.collect('title')"
              :key="index"
            >
              {{ error }}
            </li>
          </ul>
          <span>{{ errors.first('title') }}</span>
        </div>
        <div class="form-group">
          <label for="answer_a">Première réponse</label>
          <input
            id="answer_a"
            v-model="responseA"
            type="text"
            class="form-control"
            aria-describedby="AnswerAHelp"
            placeholder="Réponse">
        </div>
        <div class="form-group">
          <label for="answer_b">Seconde réponse</label>
          <input
            id="answer_b"
            v-model="responseB"
            type="text"
            class="form-control"
            aria-describedby="AnswerBHelp"
            placeholder="Réponse">
        </div>
        <div class="form-group">
          <label for="answer_c">Troisième réponse</label>
          <input
            id="answer_c"
            v-model="responseC"
            type="text"
            class="form-control"
            aria-describedby="AnswerCHelp"
            placeholder="Réponse">
        </div>

        <button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'nouvelle question'
  },
  data() {
    return {
      title: '',
      responseA: '',
      responseB: '',
      responseC: ''
    }
  },
  inject: ['$validator'],
  methods: {
    submitQuestion() {
      const newQuestion = {
        title: this.title,
        response: {
          a: {
            name: this.responseA,
            count: 0
          },
          b: {
            name: this.responseB,
            count: 0
          },
          c: {
            name: this.responseC,
            count: 0
          }
        }
      }

      this.$store.dispatch('questions/newQuestion', newQuestion)
      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.responseA = ''
      this.responseB = ''
      this.responseC = ''
    }
  }
}
</script>
