import Github from 'github-api'
import axios from 'axios'

export const state = () => ({
  list: [],
  categories: []
})

export const getters = {
  getPost: (state) => (id) => state.list.find(post => id == post.id)
}

export const mutations = {
  setList(state, list) {
    console.log('setList list=', list)
    state.list = list
  },
  setCategories(state, categories) {
    console.log('setCategories categories=', categories)
    state.categories = categories
  }
}

export const actions = {
  initPost(context) {
    return new Promise(async (resolve, reject) => {
      if (process.server) return
      const gh = new Github()
      let response = await axios({
        url: '/config/github.json',
      })
      let githubConfig = response.data
      const issueManager = gh.getIssues(githubConfig.user, githubConfig.repo)
      let promises = []
      let list = []
      promises.push(new Promise((resolve, reject) => {
        issueManager.listIssues(null, (error, result, request) => {
          if (error) reject(error)
          console.log('initPost listIssues result=', result)
          result.forEach(issue => {
            let post = {
              id: issue.number,
              title: issue.title,
              writer: issue.user,
              create_date: issue.created_at,
              update_date: issue.updated_at,
              content: issue.body,
              categories: getCategories(issue.labels)
            }
            console.log(issue.title, 'initPost listIssues labels=', issue.labels)
            list.push(post)
          })
          context.commit('setList', list)
          resolve()
        })
      }))
      promises.push(new Promise((resolve, reject) => {
        issueManager.listLabels(null, (error, result, request) => {
          if (error) reject(error)
          console.log('initPost listLabels result=', result)
          context.commit('setCategories', result.filter(value => value.name.startsWith('categories:')))
          resolve()
        })
      }))
      Promise.all(promises).then(() => {
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const getCategories = (labels) => {
  return labels.filter(label => /categories:.+/.test(label.name))
}
