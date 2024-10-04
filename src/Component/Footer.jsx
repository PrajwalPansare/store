// Footer.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
    return (
        <div className="bg-yellow-300  p-6">
            <div className="flex justify-center mb-6">
            <p className="mr-auto text-red-700 font-extrabold size-auto">SNACK's STORE</p>
            </div>
            <div className="flex justify-between max-w-6xl mx-auto">
                <div>
                    <h4 className="font-semibold mb-2">Company</h4>
                    <ul className="list-none">
                        <li>About us</li>
                        <li>Terms & condition</li>
                        <li>Privacy policy</li>
                        <li>Anti-discrimination policy</li>
                        
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">For Customers</h4>
                    <ul className="list-none">
                        <li>UC reviews</li>
                        <li>Categories near you</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">For Partners</h4>
                    <ul className="list-none">
                        <li>Register for exciting offer</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Social Links</h4>
                    <ul className="flex space-x-4 mb-4">
                        <li><a href="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"><i className="bi bi-twitter text-blue-500"></i></a></li>
                        <li><a href="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"><i className="bi bi-facebook text-blue-600"></i></a></li>
                        <li><a href="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"><i className="bi bi-instagram text-pink-500"></i></a></li>
                        <li><a href="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"><i className="bi bi-linkedin text-blue-700"></i></a></li>
                    </ul>
                    <img src="image_&_icon/AppleStore.webp" alt="Apple Store" className="mr-2" />
                    <img src="image_&_icon/Google Play.webp" alt="Google Play" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
