// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList'
import SingleBook from './components/SingleBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/blog/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
}

export default App;
