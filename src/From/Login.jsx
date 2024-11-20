import React from 'react';

function login() {
    // Get the values of username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demonstration purposes
    if (username === "admin" && password === "1234") {
        document.getElementById("message").innerHTML = "Login successful!";
    } else {
        document.getElementById("message").innerHTML = "Incorrect username or password.";
    }
}

const Login = () => {
    return (
        <div className='max-h-full  bg-gray-100'>
            <div className='border-2 border-yellow-400 p-10 bg-white shadow-md rounded-lg w-1/3'>
                <h2 className="text-2xl mb-6 text-center">Login Page</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="w-full p-2 border rounded-md bg-white hover:border-yellow-300 focus:border-red-500 focus:outline-none" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full p-2 border rounded-md bg-white hover:border-yellow-300 focus:border-red-500 focus:outline-none" 
                        />
                    </div>
                    <input
                        type="button"
                        value="Login"
                        onClick={login}
                        className='w-full p-2 text-white rounded-md cursor-pointer bg-blue-500 hover:bg-green-500'
                    />
                    <p id="message" className="mt-4"></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
