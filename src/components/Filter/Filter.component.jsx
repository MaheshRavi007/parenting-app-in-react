import React from 'react';
import './Filter.styles.css';
import {Button} from '../Button/Button.component';
export const Filter=()=>(
    <div className='filter-container' >
        <Button icon={<i class="fas fa-sort-down" ></i>} className='navbtn add-button ' text='All' style={{borderRadius: '50px',padding:'1px 6px'}} />       
    </div>
)