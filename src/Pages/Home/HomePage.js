import "./HomePage.css"
import { Link } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";
import productCardData from "../../components/Products/productCardData";

const FavoritesCardData = productCardData.filter((productObj) => productObj.favorite)

function HomePage({setCartCount, cartItems, setCartItems}) {
    return (
        <main>
            <section className="hero-section">
                <div className="hero">
                    <div className="hero-text">
                        <h1>World class macarons</h1>
                        <h3>At the touch of a button</h3>
                        <Link to="/ShopPage"><button className="large-button">Shop Now</button></Link>
                    </div>
                    <div className="hero-image"></div>
                </div>
            </section>
            <section>
                <h2>Featured Flavors</h2>
                <div className="card-grid">
                    {FavoritesCardData.map((obj) => (
                        <ProductCard 
                            key={obj.name}
                            name={obj.name} 
                            price={obj.price}
                            qty={obj.qty} 
                            image={obj.image} 
                            setCartCount={setCartCount} 
                            cartItems={cartItems} 
                            setCartItems={setCartItems} />
                    ))}
                </div>
            </section>
            <section className="customer-reviews">
                <div className="review-area">
                    <h2>Customer Reviews</h2>
                    <div className="review">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <h4>The best tasting desserts I have ever had!</h4>
                        <p>Absolute perfection. My 3rd purchase & I'll be a customer for life. Mac details: comes in lovely, feminine parisian keepsake box (and the boxes have been different each time, so I'm building a gorgeous collection). Extremely authentic tasting.</p>
                        <p><i>Review by David P</i></p>
                    </div>
                    <div className="review">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <h4>Sweet Treats is the best online dessert business ever</h4>
                        <p>OH wow.....what a treat! They arrived in less than two weeks. The box was gorgeous and has a tab at one of the side ends to use as a lovely storage box after you are done with the macaroons. Meticulously wrapped (better than Tiffany's!), tied with a lovely ribbon. But the macaroons!! Oh my, my, my. Bursting with unique flavors. These are not like American coconut macaroons (those are delicious too, even the ones in the cans). Pastel colored, crispy wafers on outside, delightful filling in the middle. Completely fresh....all are individually wrapped in tiny ziplock bags. It's SOOOOO French.</p>
                        <p><i>Review by Shelly</i></p>
                    </div>
                    <div className="review">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <h4>I am in love with their macaroons.</h4>
                        <p>The macaroons are delicious and when I eat them I feel like I am sitting in a cafe on the Champs-Elisee! They are amazing, and if you want to get a special gift for someone you love and don’t know what to get, these handmade delicacies are the perfect gift!</p>
                        <p><i>Review by John Marquis</i></p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;