export const state = () => ({
    items:[]
  })

  export const actions = {
    fetchCourses({commit}){
      return this.$axios.$get('/api/v1/products')
        .then(courses => {
          return state.items
        })
    }
  }


