import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import DashboardPage from './pages/DashboardPage';
import TablesPage from './pages/TablesPage';
import FormsPage from './pages/FormsPage';
import './App.css';
import TodoList from './components/TodoList';
import Gallery from './components/Gallery';
import CalendarBox from './components/CalendarBox';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/tables" element={<TablesPage />} />
            <Route path="/forms" element={<FormsPage />} />


             <Route path="/app/todo" element={<TodoList />} />
            <Route path="/app/gallery" element={<Gallery />} />
            <Route path="/app/calendar" element={<CalendarBox />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;