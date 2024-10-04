import React  from "react";
import "./try.css";
import  {Link} from 'react-router-dom';

function Catagori() {
    return(
< >
<h1 className="text-center font-medium pt-3 pb-2 text-3xl top-20  text-red-700">Snacks By Category</h1>
<div class="grid justify-items-stretch grid-cols-3 gap-8  px-40 ">
  <div class="bg-sky-500 relative   ">
    <Link to="/Chakli">
      <img src="https://t4.ftcdn.net/jpg/09/71/94/83/240_F_971948387_ZTaqKU9GIDY6xMC3wOXqjRc3iUEDF067.jpg" alt="sweet" class="h-full max-h-full hover:mix-blend-hard-light "/>
      </Link>
    <h4 class="absolute bottom-0  right-0 text-white rounded-l-full bg-red-800 text-xs p-2 font-light" >#CHAKLI..</h4>
  </div>
  <div class=" row-span-2 relative ">
    <Link to="/Ladoo">
      <img src="https://media.istockphoto.com/id/982302046/photo/rava-ladoo-or-semolina-laddu-with-cashew-nut-topping-popular-festival-food-from-india-served.jpg?s=612x612&w=0&k=20&c=zie1qpVL8Ye7vVNtIArRWBCi4dT_UVrl5d3x2c0gisk=" alt="ladoo" class="h-full max-h-full hover:mix-blend-hard-light"/>
    </Link>
    <h4 class="absolute top-2 left-0 text-white rounded-r-full bg-red-800 text-xs p-2  size-fit   " >#LADOO..</h4>
  </div>
  <div class="bg-sky-500 relative ">
    <Link to="/Namkeen">
      <img src="https://img.freepik.com/premium-photo/indian-spicy-crispy-popular-breakfast-poha-chivda_762785-239155.jpg?size=626&ext=jpg&ga=GA1.1.1393642661.1726381561&semt=ais_hybrid" alt='chivda' class="h-full max-h-full hover:mix-blend-hard-light "/>
    </Link>
    <h4 class="absolute bottom-0  left-0  text-white rounded-r-full bg-red-800 text-xs p-2 font-bold" >@Namkeen</h4>
  </div>
  
  <div class="bg-sky-500 relative">
    <Link to="/Cookies">
      <img src="https://img.freepik.com/free-photo/delicious-cookies-basket_23-2150707141.jpg?ga=GA1.1.1393642661.1726381561&semt=ais_hybrid" alt="shev" class="h-full max-h-full hover:mix-blend-hard-light"/>
    </Link>
    <h4 class="absolute bottom-0  right-0 text-white rounded-l-full bg-red-800 text-xs p-2 font-bold" >@Cookies</h4>
  </div>
  <div class="bg-sky-500 relative">
    <Link to="/Modak">
      <img src="https://t3.ftcdn.net/jpg/09/84/36/76/240_F_984367681_1wuAEJLimYxTFfhfoMb6H3lNhxCwHfAd.jpg" alt="shev" class="h-full max-h-full hover:mix-blend-hard-light"/>
    </Link>
    <h4 class="absolute bottom-0 left-0 text-white rounded-r-full bg-red-800 text-xs p-2 font-bold" >@Modak</h4>
  </div>
</div>
<div className="px-48">
                <img
                    src="https://patilkaki.com/assets/home-brand-d34a5207.png"
                    alt="delivery"
                    className="px-16"
                />
            </div>
</>

    )
}

export default Catagori ;