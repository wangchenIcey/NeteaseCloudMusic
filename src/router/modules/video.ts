const pIndex = [{
    path: '/video',
    component: () => import('@/views/video/video.vue'),
    name: 'video',
}, {
    path: '/MV',
    component: () => import('@/views/findMusic/MV.vue'),
    name: 'MV',
},]

export default pIndex