import throttle from "lodash.throttle";

const navigateOneTime = (navigate) =>
  throttle(navigate, 1000, { trailing: false });

/* navigate */
const openSignUp = (navigation) => (props = {}) => {
  navigation.push("SIGNUP", props);
};

const openSignIn = (navigation) => (props = {}) => {
  navigation.push("SIGNIN", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openSignUp: navigateOneTime(openSignUp(navigation)),
  openSignIn: navigateOneTime(openSignIn(navigation)),
});

export default navigate;
