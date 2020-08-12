import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Adminroute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/cart";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/cart" exact component={Cart} />

          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashBoard}
          />
          <Adminroute
            path="/admin/dashboard"
            exact
            component={AdminDashBoard}
          />
          <Adminroute
            path="/admin/create/category"
            exact
            component={AddCategory}
          />
          <Adminroute
            path="/admin/categories"
            exact
            component={ManageCategories}
          />
          <Adminroute
            path="/admin/create/product"
            exact
            component={AddProduct}
          />
          <Adminroute path="/admin/products" exact component={ManageProducts} />
          <Adminroute
            path="/admin/product/update/:productId"
            exact
            component={UpdateProduct}
          />
          <Adminroute
            path="/admin/category/update/:productId"
            exact
            component={UpdateCategory}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
