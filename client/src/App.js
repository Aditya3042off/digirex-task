import Header from "./components/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <main className={"py-3"} >
            {" "}
            <Container>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                    <Route path={"/signup"} element={<RegisterScreen />} />
                    <Route path ={"/dashboard"} element={<DashboardScreen/>} />
                </Routes>
            </Container>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
