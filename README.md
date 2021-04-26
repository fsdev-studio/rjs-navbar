# About
rjs-navbar is a navigational header component for react web apps.


## Getting Started

Install with npm:
``` npm i rjs-navbar```
Install with yarn
```yarn add rjs-navbar```

## Include in your project
```javascript
import Footer from 'rjs-navbar/Navbar';
```

```javascript
<Navbar
 logo={<img src="http://mrmrs.github.io/photos/u/011.jpg" style={{width:'100%',height:'100%'}}/>}
 activeLabel={(val) => setGoto(val)}
 searchQuery={(val) => setGoto(val)}
 left={"search"}
 center={["item 1", "item2","item 1", "item2"]}
 right={"logo"}
 search={true}
 foreGroundStyle={{color:'white',padding:3,border:'1px solid white',width:'100%', margin:2,fontSize:17, fontWeight:'bold'}}
 backGroundStyle={{background:'linear-gradient(to right, rgb(0, 0, 255), rgb(255, 0, 0))',opacity:0.9}}
 searchStyle={{border:'1px solid green', width:200, height:30}}
/>
```

## Props
Props | Details  |  Examples
-------------------- | ------------------------- | ----------------------------------------
logo| can be a string or a react component |  <img src="http://mrmrs.github.io/photos/u/011.jpg"style={{width:'100%',height:'100%'}}/>
activeLabel | returns the selected label | {(val) => setGoto(val)}
searchQuery | returns the search query | {(val) => setGoto(val)}
left | left side component of navbar can be on of : "search","logo" or and array of labels | ["item 1", "item 2"] , "logo"
center | center component of navbar can be on of : "search","logo" or and array of labels | ["item 1", "item 2"] , "logo"
right | right side component of navbar can be on of : "search","logo" or and array of labels | ["item 1", "item 2"] , "logo"
search | sets the search input, can be true or false | search={true}
foreGround | object containg styles for the foreground | {color:'white',padding:3,border:'1px solid white',width:'100%', margin:2,fontSize:17, fontWeight:'bold'}
backGroundStyle | object containing styles for the background | {background:'linear-gradient(to right, rgb(0, 0, 255), rgb(255, 0, 0))',opacity:0.9}
searchStyle | object containing styles for the search input box |  {border:'1px solid green', width:200, height:30}


[Examples](https://fsdev.studio)
