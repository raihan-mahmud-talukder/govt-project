export const Home = () => {
    return (
        <main>
            <div className="header-box">
                <section className='header-section'>
                    <h1>We design and build better chairs, for a better life</h1>
                    <p class="header-text">
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
                <section className="">
                    <h2>What makes our chairs special</h2>
                    <div className="feature">
                        <div>
                            <p><strong>Science meets design</strong></p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                                similique adipisci praesentium.
                            </p>
                        </div>
                        <div>
                            <p><strong>Maximal comfort</strong></p>
                            <p>
                                Reprehenderit optio placeat quasi excepturi architecto, explicabo
                                facilis perspiciatis error maxime magnam.
                            </p>
                        </div>
                        <div>
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
        </main>
    )
}