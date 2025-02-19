import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <>
            <header className="header">
                <h2>Ehsan CRM</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className="main">{children}</div>
            <footer className="footer">
                <a href="#" target="_blank" rel="noreferrer">
                    Ehsan CRM
                </a>{" "}
                Next.js Course | CRM Project &copy;
            </footer>
        </>
    );
};

export default Layout;
