
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyListingPage from './pages/PropertyListingPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import StudentProgramsPage from './pages/StudentProgramsPage';
import StudentPropertyDetailPage from './pages/StudentPropertyDetailPage';
import CommercialPropertiesPage from './pages/CommercialPropertiesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties/:category" element={<PropertyListingPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/student-programs" element={<StudentProgramsPage />} />
            <Route path="/student-property/:id" element={<StudentPropertyDetailPage />} />
            <Route path="/commercial" element={<CommercialPropertiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;