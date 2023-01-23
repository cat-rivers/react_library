import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  
  const padding = { padding: 5 }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/search">Search</Link>
        <Link style={padding} to="/mypage">My page</Link>
        <Link style={padding} to="/signupsuccessful">Sign-up successful</Link>
        <Link style={padding} to="/login">Login</Link>
        <Link style={padding} to="/signup">Sign-up</Link>
        <Link style={padding} to="/bookid">Book</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/signupsuccessful" element={<SignupSuccessful/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/book/{id}" element={<IndividualBook/>} />
      </Routes>
    </Router>
  )
}

export default App;
