import React from 'react'
import Container from './shared/Container'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-gray-600'>
      <Container>
        <div className='footer1 text-white p-5 grid grid-cols-1 md:grid-cols-3 justify-center gap-3'>
            <div>
                <h1>
                    <a href="">Venus</a>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis asperiores beatae mollitia quod laboriosam.</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h3>Social Handles</h3>
                <ul className='flex flex-wrap justify-start gap-3'>
                    <li><a href=""><FaFacebookF /></a></li>
                    <li><a href=""><FaWhatsapp /></a></li>
                    <li><a href=""><FaTiktok /></a></li>
                    <li><a href=""><FaXTwitter /></a></li>
                </ul>
                
            </div>
        </div>
        <div className='footer2 text-white border-t border-white text-center capitalize p-5'>
            <p>copyright &copy; 2025 | Team jan 13 | all rights reserved</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
