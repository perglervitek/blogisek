import displayPosts from './components/DisplayPosts';
import administration from './components/Administration';
import createPost from './components/CreatePost';
export default[
    {
        path: '/',
        name: 'home',
        component: displayPosts
    },
    {
        path: '/create',
        name: 'posts',
        component: createPost
    },
    {
        path: '/admin',
        name: 'admin',
        component: administration
    }
]