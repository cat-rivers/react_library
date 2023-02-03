import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
//import { getAllBooks } from "./services/servicesBooks";



function App() {
  const [userData, setUserData] = useState(null); // null = logged off
  
  /*
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then(books => {
      setBookDetails(books);
    });
  }, []);

          <Route path="search" element={<Search bookDetails={bookDetails} />} />
          <Route path="mypage" element={<MyPage bookDetails={bookDetails} />} />


  */


  return (
    <UserIDContext.Provider value={{ data: userData, set: setUserData }}>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserIDContext.Provider>
  );
}

export const UserIDContext = createContext();
export default App;
