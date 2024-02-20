import React from 'react'
import './Skills.css'

import '../CommonStyles/CommonStyles.css'



const Skills = () => {
    return (

        <>
            <div className='skills'>
                <ul className="listGroup">
                    <li className='item'><i className="fab fa-html5"></i></li>
                    <li className='item'><i class="fa-brands fa-css3-alt"></i></li>
                    <li className='item'><i class="fa-brands fa-react"></i></li>
                    <li className='item'><i class="fa-brands fa-aws"></i></li>
                    <li className='item'><i class="fa-brands fa-python"></i></li>
                    <li className='item'><i class="fa-brands fa-bootstrap"></i></li>
                </ul>
            </div>
        </>
    );
}

export default Skills