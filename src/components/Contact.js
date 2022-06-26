// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import PropTypes from 'prop-types';
import './Contact.style.css';

const Contact = ({ data }) => {
    const list = [...data]
    return (
        <div id='contact-wrapper'>
            {list.map((item, index) => (
                <div key={index} id='card'>
                    <img src={item.photo} className='photo' alt={`pictureshowed${index + 1}`} />
                    <div className='name'>{item.name}</div>
                    <div className='phone'>{item.phone}</div>
                    <div className='email'>{item.email}</div>
                </div>
            ))}
        </div>
    )
}

Contact.propTypes = {
    data: PropTypes.array
}

export default Contact;