import { Header } from './components/Header';
import { Home } from './views/Home';
import { MovieDetail } from './views/MovieDetail';
import { BrowserRouter as Router,
Routes,
Route, 
Link
} from 'react-router-dom'
import { About } from './views/About';
function App() {
 

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/about" element={ <About /> } />
        </Routes>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
        <Routes>
          <Route exact path="/movie/:id" element={ <MovieDetail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
