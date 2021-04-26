const navigation = () => {
  var url = window.location.pathname;
  return url;
};

const navigate = url => {
  document.location.pathname = url;
};

module.exports = {
  navigate: navigate,
  navigation: navigation
};