
const Layout = ({ children }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
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