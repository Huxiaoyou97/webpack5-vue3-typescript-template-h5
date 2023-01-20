const v1Pages = [
    {
        path: '/example-useState',
        name: 'exampleUseState',
        component: () => import(/* webpackChunkName: "example-useState" */ '@modules/v1/pages/example/useState.vue'),
    },
];

const v1Views = [
    {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "v1-test" */ '@modules/v1/views/v1-test.vue'),
    },
];

export { v1Pages, v1Views };
