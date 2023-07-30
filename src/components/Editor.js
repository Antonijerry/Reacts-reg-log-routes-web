import { Link } from "react-router-dom"

const Editor = () => {
    return (
        <section>
            <h1>Anjer Editors Page</h1>
            <br />
            <p>This is our editor page</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor
