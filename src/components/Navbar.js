import React, {useState} from 'react';
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
  const r = routes !== null && routes !== undefined ? routes : [<h1>Home</h1>,<h1>About</h1>];
//  const cStyles = mainContainerStyles !== null && mainContainerStyles !== undefined ? mainContainerStyles : {marginTop:100};


  const [goto, setGoto] = useState(r);
  const [navHeight,setNavHeight] = useState(70)

const navH = navHeight == 'auto' ? 70 : 'auto'
  return (
    <div className="container" style={{height:navHeight, background:backGroundStyle.background,opacity:backGroundStyle.opacity}}>
  <span className="openNav" style={{color:foreGroundStyle.color}} onClick={() => setNavHeight(navH)}>&#9776;</span>


    <div className="labels">
    {
      left === 'search' && search ?
      <input type="text" style={searchStyle} className="searchBar" onKeyUp={(e)=>searchQuery(e.target.value)}/> :(
      left === 'logo' ? <div onClick={()=> activeLabel('main')} className="logo">{logo}</div> :
       left.map((l,i)=>{ return <span className="item" style={foreGroundStyle} onClick={()=> activeLabel(l)}>{l}</span>})
     )
    }
    </div>


    <div className="labels">
    {
        center === 'search' && search ?
         <input type="text" style={searchStyle} className="searchBar" onKeyUp={(e)=>searchQuery(e.target.value)}/> :(
         center === 'logo' ? <div onClick={()=> activeLabel('main')} className="logo">{logo}</div> :
          center.map((l,i)=>{ return <span className="item" style={foreGroundStyle} onClick={()=> activeLabel(l)}>{l}</span>})
        )
    }

    </div>


  <div className="labels">
{
    right === 'search' && search ? <input type="text" className="searchBar" style={searchStyle} onKeyUp={(e)=>searchQuery(e.target.value)}/> :(
    right === 'logo' ? <div onClick={()=> activeLabel('main')} className="logo">{logo}</div> :
     right.map((l,i)=>{ return <span className="item" style={foreGroundStyle} onClick={()=> activeLabel(l)}>{l}</span>})
   )
}

</div>

    </div>



  );
}

export default Navbar;
