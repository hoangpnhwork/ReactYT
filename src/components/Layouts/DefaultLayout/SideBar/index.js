import Styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(Styles);

function Sidebar() {
    return <aside className={cn('wrapper')}>
        <h2>This is Sidebar</h2>
    </aside>;
}

export default Sidebar;