
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="">
        <RouterProvider router={routers}>
         <Toaster />
        </RouterProvider>
    </div>
  );

}

export default App;
