import {RedirectPath, Router} from "./router";
import {mainPage, ContactsPage, MobilePage, CoffeePage, TeaPage, DessertPage, CartPage} from "./pages";
import catalog from './pages/data/catalog.json';

const appRouter = new Router([
  {
    path: '',
    redirectTo: '/main'
  },
  {
    path: 'main',
    page: mainPage,
  },
  {
    path: 'contacts',
    page: ContactsPage,
  },
  {
    path: 'mobile',
    page: MobilePage,
  },
  {
    path: 'menu',
    redirectTo: '/coffee',

  },
  {
    path: 'coffee',
    page: CoffeePage,
    resolve: {
      productList: () => fetch(catalog).then(response => response.json()),
    },
  },
  {
    path: 'tea',
    page: TeaPage,
    resolve: {
      productList: () => fetch(catalog).then(response => response.json()),
    },
  },
  {
    path: 'dessert',
    page: DessertPage,
    resolve: {
      productList: () => fetch(catalog).then(response => response.json()),
    },
  },

  {
    path: 'cart',
    page: CartPage,
    resolve: {
      productList: () => fetch(catalog).then(response => response.json()),
    },
  },


]);

appRouter.start();
