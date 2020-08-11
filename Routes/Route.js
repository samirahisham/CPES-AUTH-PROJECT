import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNav from "./DrawerNav";
import AuthNav from "./AuthNav";
import { connect } from "react-redux";

const Route = ({ user }) => {
  return (
    <NavigationContainer>
      {console.log("this is me", user)}
      {user ? <DrawerNav /> : <AuthNav />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  user: state.rootAuth.user,
});

export default connect(mapStateToProps)(Route);
