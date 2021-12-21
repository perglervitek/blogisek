
export default[
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home')
    },
    {
        path: '/post',
        name: 'post.display',
        component: () => import('@/pages/Post')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/pages/Administration'),
        children: [
            {
                path: '/create',
                name: 'create.post',
                component: () => import('@/pages/CreatePost')
            },
            {
                path: '/edit',
                name: 'edit.post',
                component: () => import('@/pages/EditPost')
            },
        ]
    },
   


]