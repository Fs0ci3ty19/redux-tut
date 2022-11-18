import React from "react";
import '../App.css'

const Home = () => {
    return (
        <div className="main-wrapper">
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Components</h1>
            <div className="product-container">
                <div className="Cart-wrapper">
                    <div className="Image-wrapper Item">
                        <img src="https://www.pngall.com/wp-content/uploads/13/iPhone-14-PNG.png" />
                    </div>
                    <div className="Text-wrapper">
                        <span>
                            iPhone 14 Plus
                        </span>
                        <span>
                            Price: $999.99
                        </span>
                    </div>

                    <div className="btn-wrapper item">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;