
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Divider from './Hooks/Divider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Tools from './Pages/Tools/Tools';
import Header from './Shared/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import Blog from './Pages/Blog/Blog';
import Menufecturing from './Pages/Blog/Menufecturing';
import Applied from './Pages/Blog/Applied';
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>

    < >
      <Divider></Divider>
      <div className='px-12'>
        <Header></Header>
      </div>
      <Divider></Divider>
      <div className='px-12'>
      <Routes >
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path='menufecture'element={<Menufecturing></Menufecturing>}></Route>
        <Route path='applied'element={<Applied></Applied>}></Route>
        <Route path="tools" element={<Tools></Tools>} />
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="blog" element={<Blog></Blog>} />

      </Routes>
      </div>
      
    </>
    <ToastContainer></ToastContainer>
    </QueryClientProvider>
  );
}

export default App;
