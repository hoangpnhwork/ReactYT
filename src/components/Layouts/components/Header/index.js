import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);


function Header() {

    const [searchResult, setSearchResult] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 3000)
    }, [])

    return (
        <header className={cn('wrapper')}>
            <div className={cn('inner')}>
                <div className={cn('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                interactive
                visible = {searchResult.length > 0}
                render={(atrrs) => (
                    <div className={cn("search-result")} tabIndex="-1"{...atrrs}>
                        result
                    </div>
                )}
                >
                <div className={cn('search')}>
                    <input className={cn('search-box')} type="text" placeholder="Search" spellCheck="false" />
                    <button className={cn('clear-btn')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                        <button className={cn('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
                </Tippy>
                <div className={cn('action')}
                ></div>
            </div>
        </header>
    );
}

export default Header;
