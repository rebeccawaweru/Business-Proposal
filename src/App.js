import { useState } from "react";
import { About,ListItem,Address,Gallery } from "./components";
import logo from './assets/images/valf-logo.png';
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
function App() {
  const [show, setShow] = useState('home')
  const [side,setSide] = useState(false);
  return (
   <div className="h-screen w-full font-sans flex relative cursor-pointer bg">
    <div className="w-full">
    <div className="h-1/3 bg-white opacity-70 font-bold text-blue-900 text-2xl flex flex-col justify-center space-y-4 px-16 lg:px-12  ">
    <div className="block 2xl:flex xl:flex lg:flex md:flex  items-center space-x-0 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-4">
      <img src={logo} alt="valf company limited" className="h-24 w-32 hidden 2xl:block xl:block lg:block md:block "/>
      {!side && <VscMenu onClick={()=>setSide(true)} className="absolute right-2 top-2 block 2xl:hidden xl:hidden lg:hidden  "/>}
      <div className="tracking-wide leading-loose mt-6">
        <p>LIKONI FERRY</p>
      <p>LED AND PUBLIC ADDRESS PROPOSAL</p>
      </div>
    </div>
    </div>
   
    {side && <div className="bg-white absolute h-auto right-0 top-0 w-1/3 p-4" >
      <AiOutlineClose onClick={()=>setSide(false)} className="float-right"/>
    <ul className="space-y-4 flex flex-col items-center mt-6">
          <ListItem show={show} display='home' onClick={()=>setShow('home')} title="Home"/>
            <ListItem show={show} display="about" onClick={()=>setShow('about')} title="About"/>
            <ListItem show={show} display="demo" title="Demo"/>
            <ListItem show={show} display="gallery" title="Gallery" onClick={()=>setShow('gallery')}/>
            <ListItem show={show} display="report" title={<a href="https://drive.google.com/file/d/13_sVIir-EBhK_7RhoRAKg8lcqmUlcKlv/view?usp=sharing" target='_blank' rel="noreferrer"   >
            <p>Report</p>
            </a>}/>
          </ul>
    </div>}

    <div className="h-2/3  flex flex-col px-16 lg:px-12 justify-center  text-lg text-white ">
      {show === 'home' && <Address/>}
      {show === 'about' && <About/>}
      {show === 'gallery' && <Gallery/>}
    </div>
    </div>
     
     <div className="w-1/6 hidden 2xl:flex xl:flex lg:flex  opacity-50 h-full absolute bg-black right-0 text-white font-bold  flex-col items-center justify-center">
          <ul className="space-y-12 flex flex-col">
          <ListItem show={show} display='home' onClick={()=>setShow('home')} title="Home"/>
            <ListItem show={show} display="about" onClick={()=>setShow('about')} title="About"/>
            <ListItem show={show} display="demo" title="Demo"/>
            <ListItem show={show} display="gallery" onClick={()=>setShow('gallery')} title="Gallery"/>
            <ListItem show={show} display="report" title={<a href="https://drive.google.com/file/d/13_sVIir-EBhK_7RhoRAKg8lcqmUlcKlv/view?usp=sharing" target='_blank' rel="noreferrer"   >
            <p>Report</p>
            </a>}/>
          </ul>
     </div>
   </div>
  );
}

export default App;
