import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/main.scss';

export default function Main() {
    return (
        <div className="link_list">
            <ul>
                <li><Link to='/box'>Box</Link></li>
                <li><Link to='/scroll1'>Scroll_1</Link></li>
            </ul>
        </div>
    );
}

