import Nav from "./Nav";

const Header = () => {

    return (
        <header style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
        }}>
            <img src="/logo.png" alt="Little Lemon logo" width="200px" />
            <Nav />
        </header>
    )
}

export default Header;