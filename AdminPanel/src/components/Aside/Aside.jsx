import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { toggleMenu } from '../../store/themSlice';
export default function Aside() {
    const [className, setClassName]=useState()
    const them = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('them TTT ', them)
        if (them.showMenu) {
            setClassName('show')
        } else {
            setClassName('hide')
        }
    }, [them])



    return (

        <aside className={className} >
            <div className="closeIcon iconButton position-absolute top-0 end-0 mt-2" onClick={(e) => { dispatch(toggleMenu(!them.showMenu)) }}>
                <i className="fa-solid fa-xmark" />
            </div>
            <nav>
                <ul>
                    <li>
                        test
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
