//Layouts
import {ChannelLayout} from '~/components/Layouts/';
//Pages
import Home from '~/pages/Home';
import Subscribe from '~/pages/Subcribe';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
        { path: '/', component: Home },
        { path: '/subcribe', component: Subscribe },
        { path: '/profile', component: Profile },
        { path: '/upload', component: Upload, layout: ChannelLayout },

    ];
    
    const privateRoutes = [];
    
    export { publicRoutes, privateRoutes };