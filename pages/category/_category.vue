<template>
  <PostList :categoryFilter="this.$route.params.category"/>
</template>

<script>
import PostList from '../../components/PostList'

export default {
  components: {
    PostList
  }
}
</script>
