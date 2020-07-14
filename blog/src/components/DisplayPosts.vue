<template>
    <v-container>
        <v-row no-gutters>
            <template v-for="n in 12" >
                <div class="ma-2" :key="n" >>
                    <post-card></post-card>
                </div>
            </template>
        </v-row>
    </v-container>
</template>
<script>
import PostCard from './PostCard';
export default {
    components:{
        'post-card': PostCard
    }
}
</script>