export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  // 변이 -> state(데이터)를 변경, 여기서만 데이터를 변경할 수 있다.
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기로 처리
  actions: {
    searchMovies() {
      
    }
  }
}