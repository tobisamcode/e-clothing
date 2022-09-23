import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-&-sign-up/sign-in-&-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collections } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments("collections", collections);
      console.log(collections);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/signin"
              element={
                this.props.currentUser
                  ? <Navigate replace to="/" />
                  : <SignInAndSingUpPage />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  collections: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
