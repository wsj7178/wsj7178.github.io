<template>
  <div class="postlist">
    <v-hover
      v-slot:default="{ hover }"
      v-for="post in filteredPosts" :key="post.title"
      class="hover"
    >
      <v-card
        :elevation="hover ? 12 : 2"
        @click="onPostClick(post)"
      >
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ post.create_date }}, {{ post.writer.login }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        categoryFilter: {
            type: String
        }
    },
    computed: {
        ...mapState({
            posts: state => state.post.list
        }),
        filteredPosts() {
            return typeof(categoryFilter) === 'undefined' ? this.posts : this.posts.filter(value => {
                value.categories.name === this.categoryFilter
            })
        }
    },
    mounted() {
        console.log('index.vue.post=', this.posts)
    },
    methods: {
        onPostClick(post) {
            console.log('onPostClick post=', post)
            this.$router.push({
                name: 'post-id',
                params: {
                    id: post.id
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>
  .postlist {
    margin: 50px auto 0 auto;
    padding: 0 10px;
    max-width: 80%;

    .hover {
        margin-top: 10px;
    }
  }
  .hover {
    cursor: pointer;
  }
</style>