import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Proficiencies from './pages/Proficiencies';
import Home from './pages/Home';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/proficiencies',
        element: <Proficiencies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
