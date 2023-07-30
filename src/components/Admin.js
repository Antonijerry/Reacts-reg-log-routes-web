import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <section>
            <h1>Anjer Admins Page</h1>
            <br />
            <p>Hello this shows you are signed in as admin</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin
