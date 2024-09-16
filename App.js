import logo from './logo.svg';
import './shoes logo.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
      
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand">NATHAN'S SHOE STORE</a>
          <div class="navbar-toggler"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/nathan-pinto-687197220/">More About The Owner</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="https://www.adidas.co.in/new_arrivals">ADDIDAS</a> <br></br>
                  <a class="dropdown-item" href="https://in.puma.com/">PUMA</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="https://www.nike.com/">NIKE</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="https://www.google.co.in/">leave site</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
             
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">login</button>
            </form>
          </div>
        </nav>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" color="red" />
        <p>
          WELCOME TO MY SHOE STORE, YOU CAN BROWSE THROUGH VARIOUS BRANDS HERE AND FIND THE BEST DEALS!!!!
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my site
        </a>
      </header>
    </div>
  );
}

export default App;
