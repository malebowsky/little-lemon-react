
const Hero = () => {

    return (
        <div className="hero-wrapper">
            <div className="cta">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    From savory entrees to delectable desserts, our menu is sure to satisfy even the most discerning palate.
                </p>
                <a href="/booking">
                    <button>
                        Reserve a Table
                    </button>
                </a>
            </div>
            <img src="/restauranfood.png" alt="Food" />
        </div>
    )
}

export default Hero;