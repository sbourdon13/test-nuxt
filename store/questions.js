import { fireDb } from '~/plugins/firebase.js'

export const state = () => ({
  list: [],
  shuffleIdList: []
})

export const getters = {
  getQuestionById: state => id => {
    return state.list.find(item => item.id === id)
  },
  getCountByQuestionId: (state, getters) => id => {
    const question = getters.getQuestionById(id)

    return Object.keys(question.response)
      .map(el => question.response[el].count)
      .reduce((acc, val) => acc + val)
  },
  getFirstShuffleId: state => {
    return state.shuffleIdList[0]
  }
}

export const mutations = {
  async setQuestions(state, items) {
    state.list.length = 0

    Object.keys(items).forEach(item => {
      const newItem = items[item]

      newItem.id = item
      state.list.push(newItem)
    })

    state.shuffleIdList = Object.keys(items)
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
  },
  voteForQuestion(state, payload) {
    const response = state.list.find(el => el.id === payload.id).response[
      payload.key
    ]

    response.count++
    fireDb.ref(`questions/${payload.id}/response/${payload.key}`).set(response)
  },
  newQuestion(state, payload) {
    const newPostKey = fireDb
      .ref()
      .child('questions')
      .push().key

    fireDb.ref(`/questions/${newPostKey}`).set(payload)
  }
}

export const actions = {
  async getQuestions({ commit }) {
    const data = await fireDb.ref('/questions/').once('value')

    commit('setQuestions', data.val())
  },
  voteForQuestion({ commit }, question) {
    commit('voteForQuestion', { id: question.id, key: question.key })
  },
  newQuestion({ commit }, question) {
    commit('newQuestion', question)
  }
}
