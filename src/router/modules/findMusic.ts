const pIndex = [{
    path: '/recommend',
    component: () => import('@/views/findMusic/recommend.vue'),
    name: 'recommend',
}, {
    path: '/musicSheet',
    component: () => import('@/views/findMusic/musicSheet.vue'),
    name: 'musicSheet',
}, {
    path: '/radioStation',
    component: () => import('@/views/findMusic/radioStation.vue'),
    name: 'radioStation',
}, {
    path: '/rank',
    component: () => import('@/views/findMusic/rank.vue'),
    name: 'rank',
}, {
    path: '/singer',
    component: () => import('@/views/findMusic/singer.vue'),
    name: 'singer',
}, {
    path: '/newMusic',
    component: () => import('@/views/findMusic/newMusic.vue'),
    name: 'newMusic',
}]

export default pIndex