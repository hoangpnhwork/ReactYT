import Header from "~/components/Layouts/components/Header";
import Styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import SideBar from "./SideBar";

const cn = classNames.bind(Styles);

function DefaultLayout({children}) {
    return ( 
        <div className={cn("wrapper")}>
            <Header />
            <div className={cn("container")}>
            <SideBar />
                <div className={cn("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;