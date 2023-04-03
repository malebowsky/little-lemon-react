import { useMediaQuery } from "../hooks/useMediaQuery";
import Nav from "./Nav";

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <header style={{
            display: "flex",
            width: "100%",
            justifyContent: isMobile ? "center" : "space-between",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
        }}>
            <img src="/logo.png" alt="Little Lemon logo" width="200px" style={{marginBottom: isMobile ? '1rem' : '0px'}} />
            <Nav />
        </header>
    )
}

export default Header;