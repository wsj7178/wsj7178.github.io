<template>
  <PostList :categoryFilter="this.$route.query.id"/>
</template>

<script>
import PostList from '../components/PostList'

export default {
  components: {
    PostList
  }
}
</script>
