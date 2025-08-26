// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Roles from "./pages/Roles";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import PostJob from "./pages/PostJob";
import EmployersLayout from "./components/Employers/EmployersLayout";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import JobSeekers from "./pages/Seekers";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/jobs" element={<Jobs />} />          
          <Route path="/careers" element={<Jobs />} />            
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/seekers" element={<JobSeekers />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/employers/*" element={<EmployersLayout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;