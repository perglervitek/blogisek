<template>
  <section v-if="items.length > 0">
   <v-row v-if="posts && posts.length">
      <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
    </v-row>
    <posts-pagination></posts-pagination>
  </section>
  <section v-else>
      Empty
  </section>
</template>
<script>
import PostsPagination from '@/components/PostsPagination';


export default {
  name: "PostsGrid",
  components: {
    PostsPagination
  },
  props: {
    perPage: { type: Number, default: 4 },
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
      total(){
          return Math.ceil(this.items.length/this.perPage)
      },
  },
  methods: {
    paginate(pageNum) {
      this.$emit("paginate", pageNum);
    },
  },
};
</script>