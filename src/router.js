import { createRouter, createWebHashHistory } from 'vue-router'

import CartView from './views/ShoppingCart/CartView.vue'
import HomeView from './views/HomeView.vue'
import AccountView from './views/Account/AccountView.vue'
import PaymentView from './views/ShoppingCart/Payment/PaymentView.vue'
import SubmitView from './views/ShoppingCart/Payment/SubmitView.vue'
import MyAccountView from './views/Account/AccountChildren/MyAccountView.vue'
import ShoppingView from './views/ShoppingView.vue'
import FavoritesView from './views/Account/AccountChildren/FavoritesView.vue'
import HelpView from './views/Account/AccountChildren/HelpView.vue'
import AllProductsView from './views/AllProductsView.vue'
import IndividualProductView from './views/IndividualProductView.vue'
import AboutView from './views/AboutView.vue'

// imports for Helpview's children.
import MaterialsComponent from './views/Account/AccountChildren/HelpChildView/MaterialsComponent.vue'
import PaymentComponent from './views/Account/AccountChildren/HelpChildView/PaymentComponent.vue'
import ExchangesComponent from './views/Account/AccountChildren/HelpChildView/ExchangesComponent.vue'
import DeliveryComponent from './views/Account/AccountChildren/HelpChildView/DeliveryComponent.vue'
import ShippingTrackingqr from './views/Account/AccountChildren/HelpChildView/ShippingTrackingqr.vue'
import LogIn from './components/MyAccount/LogIn.vue'
import SignUp from './components/MyAccount/SignUp.vue'

import SearchComponent from './components/SearchComponents/SearchComponent.vue'

export default createRouter({
  history: createWebHashHistory(),
  //to, from, savedPosition parameters
  scrollBehavior() {
    // always scroll to top
    return { top: 1 }
  },
  routes: [
    {
      component: HomeView,
      path: '/'
    },

    {
      component: AllProductsView,
      path: '/shopping'
    },
    {
      component: CartView,
      path: '/cart'
    },
    {
      path: '/kop',
      component: PaymentView
    },
    {
      path: '/submit',
      component: SubmitView
    },
    {
      component: AccountView,
      path: '/account',
      redirect: '/account/konto',
      beforeEnter: () => {
        const auth = localStorage.getItem('auth')
        return auth === 'true' ? true : '/login'
      },
      children: [
        {
          path: 'favourites',
          component: FavoritesView
        },
        {
          path: 'konto',
          component: MyAccountView
        },
        {
          component: HelpView,
          path: 'help'
        }
      ]
    },
    {
      //KZ new component
      component: HelpView,
      path: '/account/help',
      children: [
        {
          path: 'materials',
          component: MaterialsComponent
        },
        {
          path: 'payment',
          component: PaymentComponent
        },
        {
          path: 'exchanges',
          component: ExchangesComponent
        },
        {
          path: 'delivery',
          component: DeliveryComponent
        },
        {
          path: 'qr',
          component: ShippingTrackingqr
        }
      ]
    },
    {
      component: IndividualProductView,
      path: '/description/:id?/:name?/:price?/:product?'
    },

    {
      component: LogIn,
      path: '/login'
    },
    {
      component: SignUp,
      path: '/signup'
    },

    {
      component: SearchComponent,
      path: '/searchcomponent'
    },
    // New paths that depending on which you choose sends a certain prop to the Shoppingview page.
    {
      path: '/jackets',
      component: ShoppingView,
      props: { category: 'jacket' }
    },
    {
      path: '/dresses',
      component: ShoppingView,
      props: { category: 'dress' }
    },
    {
      path: '/tops',
      component: ShoppingView,
      props: { category: 'tops' }
    },
    {
      path: '/bottoms',
      component: ShoppingView,
      props: { category: 'bottoms' }
    },
    {
      path: '/About',
      component: AboutView,
      props: { category: 'AboutView' }
    }
  ]
})

/*
import Product1 from './components/Product1.vue'
import Product2 from './components/Product2.vue'
import Product3 from './components/Product3.vue'
// add more imports for other product components

const routes = [´
  { path: '/product/1', component: Product1 },
  { path: '/product/2', component: Product2 },
  { path: '/product/3', component: Product3 },
  // add more routes for other products
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
*/
/*
const routes = [
  {
    path: '/product/:id',
    component: Product,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
*/
