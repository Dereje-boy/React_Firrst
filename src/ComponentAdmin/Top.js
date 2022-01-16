import "../../src/Styles/Admin/top.css"
import Infoken_logo from "../Photos/Infoken/infoken_Logo.jpg"
import admin_photo from "../Photos/Infoken/admin-photo.jpg"

function Top(props) {
    return <div className="top">
        <div className="left">
            <img src={Infoken_logo}/>
            <a href={"http://localhost:5000/"} target={'_blank'}>
                <h1>Infoken App</h1>
            </a>
        </div>
        <div className="right">
            <div className="admin-info">
                <h2 className="username">JohnMike@gmial.com</h2>
                <h2 className="fullname">John Mike</h2>
            </div>
            <img src={admin_photo} alt="admin photo" className="admin-photo"/>
            <a href={"http://localhost:5000/admin"}>
                <h1>Logout</h1>
            </a>
        </div>
    </div>
}

export default Top