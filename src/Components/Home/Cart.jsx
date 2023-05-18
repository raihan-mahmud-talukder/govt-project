export const Cart = () => {
    return (
        <section className="cart-box">
            <h2>Our bestselling chairs</h2>
            <div className="selling">
                <figure className="cart">
                    <img src="images/chair-1.jpg" alt="Chair" />
                    <div className="cart-item">
                        <h3>The Laid Back</h3>
                        <ul className="cart-details">
                            <li><span>Leisure and relaxing</span></li>
                            <li><span>Comfortable for 4h</span></li>
                            <li><span>Vegan leather</span></li>
                            <li><span>Weighs 16 kg</span></li>
                        </ul>
                        <div className="cart-price">
                            <strong>250€</strong>
                            <a href="#">Add to cart</a>
                        </div>
                    </div>
                </figure>

                <figure className="cart">
                    <img src="images/chair-2.jpg" alt="Chair" />
                    <div className="cart-item">
                        <h3>The Worker Bee</h3>
                        <ul className="cart-details">
                            <li><span>Work</span></li>
                            <li><span>Comfortable for 8h</span></li>
                            <li><span>Vegan leather</span></li>
                            <li><span>Weighs 22 kg</span></li>
                        </ul>
                        <div className="cart-price">
                            <strong>525€</strong>
                            <a href="#">Add to cart</a>
                        </div>
                    </div>
                </figure>

                <figure className="cart">
                    <img src="images/chair-3.jpg" alt="Chair" />
                    <div className="cart-item">
                        <h3>The Chair 4/2</h3>
                        <ul className="cart-details">
                            <li><span>Leisure and relaxing</span></li>
                            <li><span>Comfortable all day!</span></li>
                            <li><span>Organic cotton</span></li>
                            <li><span>Weighs 80 kg</span></li>
                        </ul>
                        <div className="cart-price">
                            <strong>1450€</strong>
                            <a href="#">Add to cart</a>
                        </div>
                    </div>
                </figure>
            </div>
        </section>
    )
}