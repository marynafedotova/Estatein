import { Link } from "react-router-dom";

export default function NotFound(){
  return <div className="container">
    <div id="notFound">
    <h1>Error 404 - Page not found</h1>
    <Link go to="/" className="link-home">Go to main 🏠</Link>
    </div>
  </div>
}