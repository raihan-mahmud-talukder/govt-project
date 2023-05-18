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
        </main>
    )
}