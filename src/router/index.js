import Vue from 'vue';
import Router from 'vue-router';
// 引用页面模板->供路由使用
import index from '../pages/index';
import pageQuiButton from '../pages/pageQuiButton';
import pageQuiList from '../pages/pageQuiList';
import pageQuiNav from '../pages/pageQuiNav';
import pageLogin from '../pages/pageLogin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/login',
      name: 'login',
      component: pageLogin,
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton,
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList,
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav,
    },
  ],
});
