import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Changeinapi from './changeinapi'; // Ensure this matches the actual file name exactly

function NavBar() {
  const [category, setCategory] = useState([]); // Store search results
  const [error, setError] = useState(''); // Store error message

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar className="fixed-top h-16 px-40 bg-yellow-500">
        <Container className="flex justify-between items-center">
          <Navbar.Brand as={Link} to="/" className="mr-auto text-red-700 font-extrabold size-auto">
            SNACK's STORE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow">
            <Nav className="mx-5 flex space-x-6 font-semibold">
              <Nav.Link as={Link} to="/" className="hover:underline">Home</Nav.Link>
              <Nav.Link as={Link} to="/Catagori" className="hover:underline">Category</Nav.Link>
              <Nav.Link as={Link} to="/Heading" className="hover:underline">Heading</Nav.Link>
              <Nav.Link as={Link} to="/All" className="hover:underline">All</Nav.Link>
            </Nav>
            {/* Search Bar Integrated into Navbar */}
            <Changeinapi setCategory={setCategory} setError={setError} />
            <Nav className="ml-auto flex space-x-4">
              <Nav.Link as={Link} to="/Login">Login</Nav.Link> / <Nav.Link as={Link} to="/Sign-up">Sign-up</Nav.Link>
              <Nav.Link as={Link} to="/memes"><i className="bi bi-cart2"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Area (Search Results) */}
      <main className="flex-grow pt-10  px-4 flex justify-center">
        <div className="w-full max-w-6xl">
          {error && (
            <div className="text-red-500 text-center ">
              <p>{error}</p>
            </div>
          )}

          {category.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.map((data) => (
                <div key={data.id} className="card bg-white p-4 rounded-lg shadow-md">
                  <div className="flex flex-col items-center">
                    <img className="h-32 w-32 object-cover mb-4" src={data.img} alt={data.foodName} />
                    <h3 className="text-lg font-semibold">{data.foodName}</h3>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-md text-gray-500">{data.description}</p>
                    <div className="text-xl font-bold text-gray-700">
                      <p className="text-gray-600">Rs.<s>{data.price}</s></p>
                      Rs.{data.discountedPrice}
                    </div>
                    <h4 className="text-md text-gray-500">{data.foodType}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default NavBar;
