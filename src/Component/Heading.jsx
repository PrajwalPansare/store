import React from "react";
import  {Link} from 'react-router-dom';

function Heading() {
    return (
        <div>
            <div className="relative w-full px-40">
                <img
                    src="https://img.freepik.com/premium-photo/abundance-ful-fruit-perfect-dessert-basket-generated-by-ai_188544-14486.jpg?w=1060"
                    alt="heading"
                    className="w-full"
                />
                    <div className="absolute top-20 left-1/4  text-center size-1/2 text-3xl bg-yellow-300 rounded-full ">
                        <h3 className="text-red-700 font-medium py-2   hover:underline underline-offset-4">
                            You Can Taste, Trust You Can Feel!
                        </h3>
                        <h1 className=" font-extrabold  text-red-600 ">SNACK's STORE</h1>
                        <h2 className="text-center font-extralight text-red-700 w-400 p-3">YOUR ONE STOP<br/>
                            <strong className="text-orange-500">SNACK SHOPE </strong><br/>
                            FOR ALL YOUR<br/>
                            SNACKING<br/>
                            NEEDS
                        </h2>
                        <Link to="/products"><button className="p-2  hover:bg-orange-500 rounded-lg  bg-red-500  text-white text-xl font-bold ">SHOP NOW</button></Link>
                    </div>
            
            </div>
          
        </div>
    );
}

export default Heading;
