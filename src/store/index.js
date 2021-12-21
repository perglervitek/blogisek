import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
        posts: [
            {
                id: 1, 
                title: "Post 1", 
                description: "",
            }
        ]
    },
    getters: {},
    mutations: {
        INSERT_POST: (state, post)=> {
            state.posts.push(post);
        },
        EDIT_POST: (state, post)=> {
            state.posts = state.posts.map(oldPost => (oldPost.id === post.id) ? post : oldPost)
        },
        DELETE_POST: (state, id)=> {
            state.posts = state.posts.filter(post => post.id != id);
        }
    },
    actions: {
        insertPost(context, post){
            context.commit("INSERT_POST", post);
        },
        editPost(context, post){
            context.commit("EDIT_POST", post);
        },
        deletePost(context, id){
            context.commit("DELETE_POST", id);
        },
    },
});

export default store;