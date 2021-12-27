import logo from './logo.svg';

import './App.css';

const Header = () => {
  return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Processing</h1>
  </header>

  );
}

const Main = ({title,price}) =>{
  

  return(
    <main>
      <h2>
        {title}
      </h2>
      <h3>
        {price}
      </h3>
     
    </main>
  );
}

const Footer = () =>{
  return(
    <footer>
      <a>link something</a>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
     <Header/>
     <div>
       <p>span</p>
     </div>
     <Main title="PC" price={4500}/>
     <Main title="Laptop" price={5000}/>
     <Main title="Phone" price={2000}/>
     <Footer/>
    </div>
  );
}

export default App;
