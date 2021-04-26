import React, {useState} from 'react';
import Navbar from './components/Navbar';

function NavbarBody(){
  return(
    <div style={{display:'flex', flexDirection:'row',height:'20%'}}>
        <div style={{color:'black', fontSize:16,padding:45,width:'50%',height:'50%'}}>
          Navbar body
        </div>
        <div style={{ fontSize:16,color:'white',padding:45,width:'50%',height:'50%'}}>
        navbar item
        </div>
    </div>
  )
}

function Scoper(){
  return(
    <div style={{display:'flex', flexDirection:'row',height:'20%'}}>
        <div style={{color:'black', fontSize:16,padding:45,width:'50%',height:'50%'}}>
          This is my footer
        </div>
        <div style={{ fontSize:16,color:'white',padding:45,width:'50%',height:'50%'}}>
          This is my footer
        </div>
    </div>
  )
}

function App() {
    const [goto, setGoto] = useState("item 1");
  return (
    <div style={{display:'flex', flexDirection:'column',height:'20%'}}>

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

<div style={{display:'flex', flexDirection:'column',marginTop:120}}>
{goto === "item 1" ? <Scoper/> : <h1>here we are</h1>}
{goto === "main" ? <h1>main</h1> : <h1>not main</h1>}
</div>

    </div>
  );
}

export default App;
