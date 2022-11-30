
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routes/Router/Router';
import toast, { Toaster } from 'react-hot-toast';

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
