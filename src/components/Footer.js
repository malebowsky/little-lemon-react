import { useMediaQuery } from "../hooks/useMediaQuery";

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <footer style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img src="/logotype.png" alt="Little Lemon logotype" width="140px" />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    align: 'flex-start',
                    marginLeft: isMobile ? "40px" : "80px"
                }}>
                    <h3 style={{ marginBottom: "8px", marginLeft: isMobile ? '0px' : '2rem' }}>Navigation</h3>
                    <ul className="footer" style={{ flexDirection: 'column' }}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
            <p>© 2023 Little Lemon</p>
        </footer>
    );
}

export default Footer;