
const SpecialCard = ({ title, description }) => {
    return (
        <a href="/booking">
            <div className="special-card">
                <img src="/salad.png" alt="special" />
                <div className="special-card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}

const Specials = () => {

    return (
        <div className="specials-wrapper">
            <div className="headline">
                <h1>Specials</h1>
                <a href="/booking">
                    <button>
                        Reserve a Table
                    </button>
                </a>
            </div>
            <div className="specials">
                <SpecialCard
                    title="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <SpecialCard
                    title="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <SpecialCard
                    title="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
            </div>
        </div>
    )
}

export default Specials;