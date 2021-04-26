import React, { useState } from 'react';
import Navigation, { navigate, navigation } from './Navigation';
import './Navbar.css';

function Navbar({
  children,
  routes,
  left,
  right,
  center,
  activeLabel,
  search,
  searchQuery,
  foreGroundStyle,
  backGroundStyle,
  searchStyle,
  logo
}) {
  const r = routes !== null && routes !== undefined ? routes : [/*#__PURE__*/React.createElement("h1", null, "Home"), /*#__PURE__*/React.createElement("h1", null, "About")]; //  const cStyles = mainContainerStyles !== null && mainContainerStyles !== undefined ? mainContainerStyles : {marginTop:100};

  const [goto, setGoto] = useState(r);
  const [navHeight, setNavHeight] = useState(70);
  let compo = goto.filter((g, i) => {
    return navigation() === g.url;
  });
  const navH = navHeight == 'auto' ? 70 : 'auto';
  return /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      height: navHeight,
      background: backGroundStyle.background,
      opacity: backGroundStyle.opacity
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "openbtn",
    style: {
      color: foreGroundStyle.color
    },
    onClick: () => setNavHeight(navH)
  }, "\u2630"), /*#__PURE__*/React.createElement("div", {
    className: "labels"
  }, left === 'search' && search ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    style: searchStyle,
    className: "searchBar",
    onKeyUp: e => searchQuery(e.target.value)
  }) : left === 'logo' ? /*#__PURE__*/React.createElement("div", {
    onClick: () => activeLabel('main'),
    className: "logo"
  }, logo) : left.map((l, i) => {
    return /*#__PURE__*/React.createElement("span", {
      className: "item",
      style: foreGroundStyle,
      onClick: () => activeLabel(l)
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    className: "labels"
  }, center === 'search' && search ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    style: searchStyle,
    className: "searchBar",
    onKeyUp: e => searchQuery(e.target.value)
  }) : center === 'logo' ? /*#__PURE__*/React.createElement("div", {
    onClick: () => activeLabel('main'),
    className: "logo"
  }, logo) : center.map((l, i) => {
    return /*#__PURE__*/React.createElement("span", {
      className: "item",
      style: foreGroundStyle,
      onClick: () => activeLabel(l)
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    className: "labels"
  }, right === 'search' && search ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "searchBar",
    style: searchStyle,
    onKeyUp: e => searchQuery(e.target.value)
  }) : right === 'logo' ? /*#__PURE__*/React.createElement("div", {
    onClick: () => activeLabel('main'),
    className: "logo"
  }, logo) : right.map((l, i) => {
    return /*#__PURE__*/React.createElement("span", {
      className: "item",
      style: foreGroundStyle,
      onClick: () => activeLabel(l)
    }, l);
  })));
}

export default Navbar;