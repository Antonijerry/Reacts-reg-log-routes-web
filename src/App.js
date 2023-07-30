import Login from "./Login";
import Register from "./Register";
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
//import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
        {/**here you nest aother components here */}

        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}> */}
          <Route path="/" element={<Home />} />
        {/* </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}> */}
          <Route path="editor" element={<Editor />} />
        {/* </Route> */}


        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}> */}
          <Route path="admin" element={<Admin />} />
        {/* </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}> */}
          <Route path="lounge" element={<Lounge />} />
       {/* </Route> */}

       {/**catch all */}
       <Route path="*" element={<Missing />} />
       </Route>
    </Routes>
  );
}

export default App;
