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

const openBookDetails = (navigation) => (props = {}) => {
  navigation.push("BOOK_DETAILS", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openSignUp: navigateOneTime(openSignUp(navigation)),
  openSignIn: navigateOneTime(openSignIn(navigation)),
  openBook: navigateOneTime(openBookDetails(navigation)),
});

export default navigate;
