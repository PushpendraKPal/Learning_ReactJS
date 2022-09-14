import './App.css';
import logo from './logo.webp';
import mark from './mark.jpg'
import styles from './styles/style.module.css'

// Inline CSS

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px 0px 50px',
  backgroundColor: '#AFAFB1',
  color: 'rgb(2,14,16)',
  fontWeight: 'bold'
}

const navLogo ={
  width: '60px'
}

/*
.nav-items {
  list-style: none;
  display: flex;
}

.nav-items > li {
  padding: 10px;
}

*/
function Navbar(){
  return(
    <nav style={nav}>
      <img style={navLogo} src={logo} alt="Logo"/>
      <ul style={{listStyle: 'none', display: 'flex'}}>
        <li style={{padding : '10px'}}>HOME</li>
        <li style={{padding : '10px'}}>ABOUT</li>
        <li style={{padding : '10px'}}>SERVICES</li>
        <li style={{padding : '10px'}}>CONTACT</li>
      </ul>
      {
      console.log("Hello")
    }
    </nav>
    
  )
}

// Module CSS

function Hero (){
  return(
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h2 className={styles.subHeading}>Marker 3.0</h2>
        <p className={styles.para}>Welcome to our new product page we are pleased to see you here</p>
        <button className={styles.btn}>Know More</button>
      </div>
      <div className={styles.heroRight}>
        <img className={styles.heroImg} src={mark} alt="Aside Image"/>
      </div>
      {
      console.log("hiii")
    }
    </div>
    
  )
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
