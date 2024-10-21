// library
import React from 'react'

export const Location = ({item}) => {
  return (
    <div className='location_cont'>
        <h2>Расположение</h2>
        <p>{item.address}</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19774.17941287283!2d45.712752321551115!3d43.303380826301165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d411c3b2da1d%3A0xe6258be30848b158!2z0KLQpiAi0JzQuNC90YPRgtC60LAi!5e0!3m2!1sru!2sru!4v1728761577718!5m2!1sru!2sru" width="900" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
