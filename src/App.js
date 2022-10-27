// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList'
import SingleBook from './components/SingleBook';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/blog/:id" element={<SingleBook />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
