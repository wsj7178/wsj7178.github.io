<template>
  <div class="post-wrap">
    <v-card v-if="typeof(post) !== 'undefined'">
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="auto" align-self="center">
            <v-row>
              <v-col cols="auto" class="py-0">writed at: {{ post.create_date }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="auto" class="py-0">writer: {{ post.writer.login }}</v-col>
            </v-row>
          </v-col>
          <v-col>
            <a :href="post.writer.html_url" target="_blank"><v-img :src="post.writer.avatar_url" class="avatar \"/></a>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text v-html="postBody"/>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { markdown } from 'markdown'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters({
      getPost: 'post/getPost'
    }),
    post() {
      return this.getPost(this.id)
    },
    postBody() {
      return markdown.toHTML(this.post.content)
    }
  }
}
</script>

<style lang="scss" scoped>
    .post-wrap {
        max-width: 80%;
        margin: 50px auto 0 auto;
    }
    .avatar {
        width: 50px;
        border-radius: 100%;
        display: inline-block;
    }
</style>
