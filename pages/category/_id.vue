<template>
  <PostList :categoryFilter="this.$route.params.id"/>
</template>

<script>
import PostList from '../../components/PostList'

export default {
    components: {
        PostList
    }
}
</script>