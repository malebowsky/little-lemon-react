
const Layout = ({ children }) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gap: "2rem",
            overflow: "hidden",
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}>
            {children}
        </div>
    )
}

export default Layout;