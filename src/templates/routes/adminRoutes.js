import Loadable from "react-loadable";
import MyLoadingComponent from "../../components/LoadingComponent";

  const HomePage = Loadable({
    loader: () => import("../../pages/admin/HomePage"),
    loading: MyLoadingComponent
  });

  const ProductPage = Loadable({
    loader: () => import("../../pages/admin/DemoProductPage"),
    loading: MyLoadingComponent
  });
  
  const LoginPage = Loadable({
    loader: () => import("../../pages/admin/Login"),
    loading: MyLoadingComponent
  });

const routes = {
    HomePage: {
        path: '/',
        exact: true,
        component: HomePage,
        layout: 'MainLayout'
    },
    ProductPage: {
      path: '/product',
      exact: true,
      component: ProductPage,
      layout: 'MainLayout'
  },
    LoginPage: {
        path: '/login',
        component: LoginPage,
        exact: true,
        layout: 'Minimal'
    }
};

export default routes;