<template>
   <v-pagination
      v-model="page"
      :length="total"
      :total-visible="5"
      @input="paginate"
    ></v-pagination>
</template>
<script>
export default {
  name: "PostsPagination"
};
</script>