export const Home = () => {
    return (
        <main>
            <div className="header-box">
                <section className='header-section'>
                    <h1>We design and build better chairs, for a better life</h1>
                    <p className="header-text">
                        In a small shop in the heart of Lisbon, we spend our days
                        relentlessly perfecting the chair. The result is a perfect blend of
                        beauty and comfort, that will have a lasting impact on your health.
                    </p>
                    <a className="btn btn--big" href="#">Shop chairs</a>
                </section>
                <div className='header-image'>
                    <img src="images/hero.jpg" alt="Photo" />
                </div>
            </div>
            <div>
                <section className="feature-box">
                    <h2>What makes our chairs special</h2>
                    <div className="feature">
                        <div className="item">
                            <p><strong>Science meets design</strong></p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                                similique adipisci praesentium.
                            </p>
                        </div>
                        <div className="item">
                            <p><strong>Maximal comfort</strong></p>
                            <p>
                                Reprehenderit optio placeat quasi excepturi architecto, explicabo
                                facilis perspiciatis error maxime magnam.
                            </p>
                        </div>
                        <div className="item">
                            <p>
                                <strong>Ethical and sustainable</strong>
                            </p>
                            <p>
                                Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
                                omnis est laudantium voluptatem voluptas!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="about">
                    <h2>Who we are</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut odio minus? Cum facere perspiciatis reiciendis earum nostrum optio adipisci ea quo culpa maiores molestias quibusdam ex expedita sint nam, corrupti aut consequuntur veniam! Provident at suscipit quibusdam delectus, quo adipisci. Tempora velit delectus perspiciatis voluptates voluptatem itaque quas eum unde, numquam aliquam dicta, dolorem vero? Impedit officia molestiae numquam, labore dolores libero sint cum odit sequi. Quod, qui? Ab, reprehenderit incidunt ipsa, corporis dicta aut sint impedit labore repellat cum, ipsam explicabo neque. Quibusdam reprehenderit tenetur blanditiis earum magni temporibus, reiciendis, sed maxime fuga, eaque sunt optio. Culpa, laudantium.
                    </p>
                </section>
            </div>
            <div>
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
            </div>
        </main>
    )
}