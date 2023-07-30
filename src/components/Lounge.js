import { Link } from "react-router-dom"

const Lounge = () => {
    return (
        <section>
            <h1>AnJer Lounge Page</h1>
            <br />
            <p>Admins and Editors can hang out here! Lets Go.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Lounge
