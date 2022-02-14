import Index from "views/Index.js";
import BrandForm from "views/pages/brands/BrandForm";
import BrandsTable from "views/pages/brands/BrandsTable";
import CategoriesTable from "views/pages/categories/CategoriesTable";
import CategoryForm from "views/pages/categories/CategoryForm";
import Login from "views/pages/Login.js";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
    isSidebar: true,
  }, {
    path: "/brands",
    name: "Brands",
    icon: "ni ni-bag-17 text-yellow",
    component: <BrandsTable />,
    layout: "/admin",
    isSidebar: true,
  }, {
    path: "/brand/create",
    name: "Brands Create",
    icon: "ni ni-tv-2 text-primary",
    component: <BrandForm />,
    layout: "/admin",
    isSidebar: false,
  }, {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-collection text-dark",
    component: <CategoriesTable />,
    layout: "/admin",
    isSidebar: true,
  }, {
    path: "/category/create",
    name: "Category Create",
    icon: "ni ni-tv-2 text-primary",
    component: <CategoryForm />,
    layout: "/admin",
    isSidebar: false,
  }, {
    path: "/login",
    name: "Login",
    icon: "fas fa-stream text-orange",
    component: <Login />,
    layout: "/auth",
    isSidebar: false,
  },
];
export default routes;
