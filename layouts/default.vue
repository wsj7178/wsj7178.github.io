<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-group
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Categories</v-list-item-title>
          </template>

          <v-list-item
            v-for="category in categories"
            :key="category.id"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="getCategoryName(category.name)"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" class="s-title">
          Maru blog
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  a.s-title:any-link {
    color: white;
    text-decoration: none;
  }
</style>

<script>
import { mapState } from 'vuex'
  export default {
    beforeCreate() {
      this.$store.dispatch('post/initPost')
    },
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    computed: {
      ...mapState({
        categories: state => state.post.categories
      })
    },

    created () {
      this.$vuetify.theme.dark = true
    },

    methods: {
      getCategoryName(name) {
        let result = /categories:(.+)/.exec(name)
        console.log('regex result=', result)
        return result && result[1]
      }
    }
  }
</script>