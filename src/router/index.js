import { createBrowserRouter } from "react-router-dom";
import Home from '@pages/home';
import NotFound from '@components/notFound';
import Editor from '@pages/editor';
import Units from '@pages/units';

const homeOptions = {
    element: (<Home/>),
    errorElement: (<NotFound/>)
}

export const pathConfig = [
    {
        path: '/home',
        ...homeOptions
        // ,
        // children: [
        //     {
        //         index: true,
        //         element: (<HotRecommands/>)
        //     },
        //     {
        //         path: '/home/rate',
        //         element: (<Rate/>)
        //     },
        //     {
        //         path: '*',
        //         element: (<NotFound/>)
        //     }
        // ]
    },
    // ,
    // {
    //     path: '/detail',
    //     element: (<Detail/>)
    // },
    {
        path: '/editor',
        element: (<Editor/>)
    },
    {
        path: '/units',
        element: (<Units/>)
    },
    {
        path: '/',
        ...homeOptions
    }
];
const routerConfig = createBrowserRouter(pathConfig);

export default routerConfig;