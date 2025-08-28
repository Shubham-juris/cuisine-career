// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Roles from "./Pages/Roles";
import Explore from "./Pages/Explore";
import SignIn from "./Pages/SignIn";
import PostJob from "./Pages/PostJob";
import EmployersLayout from "./components/Employers/EmployersLayout";
import Jobs from "./Pages/Jobs";
import JobDetails from "./Pages/JobDetails";
import JobSeekers from "./Pages/Seekers";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import ContactUs from "./Pages/ContactUs";
import AboutPage from "./Pages/AboutPage";

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
          {/* Removed duplicate route */}
          <Route path="/employers/*" element={<EmployersLayout />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
