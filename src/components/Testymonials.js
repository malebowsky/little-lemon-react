
const TestymonialCard = ({ name, review }) => {
    return (
        <a href="/">
            <div className="special-card" style={{
                alignItems: 'flex-start',
                maxWidth: '280px',
                }}>
                <img src="/person.png" alt="person" />
                <div className="special-card-content">
                    <h2>{name}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </a>
    )
}

const Testymonials = () => {

    return (
        <div className="testimonials-wrapper">
            <h1>Testimonials</h1>
            <div className="testimonials">
                <TestymonialCard
                    name="Sara Lopez"
                    review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
                />
                <TestymonialCard
                    name="Sara Lopez"
                    review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
                />
                <TestymonialCard
                    name="Sara Lopez"
                    review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
                />
                <TestymonialCard
                    name="Sara Lopez"
                    review="“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”"
                />
            </div>
        </div>
    )
}

export default Testymonials;