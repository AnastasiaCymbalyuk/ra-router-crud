import './App.css';
import  {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PostNew from './components/PostNew';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

function App() {
  return (
    <div>
      <Router>
        <Link to="/posts/new">
          <div>
            <p>Создать пост</p>
          </div>
        </Link>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/:id" element={<PostPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
