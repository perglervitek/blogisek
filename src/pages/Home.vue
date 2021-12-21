<template>
  <div>
      <posts-grid :items="[]"></posts-grid>
  </div>
</template>

<script>
import PostsGrid from '@/components/PostsGrid';

export default {
    components: {
        PostsGrid
    },
    name: 'Home'
}
</script>

<style>

</style>