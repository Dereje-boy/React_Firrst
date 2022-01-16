import "../../src/Styles/Admin/bottom.css"
import Table from "./Table";

function Bottom(props) {
    return <div className="Bottom">

        <div className="left-bottom">

            <div className="top-left">
                <select className={"databases"}>
                    <option value={"Students"}>Students</option>
                    <option value={"Books"}>Books</option>
                    <option value={"Admins"}>Admins</option>
                    <option value={"Rents"}>Rents</option>
                </select>
                <input type={"text"} placeholder={"searching for students...."} className={"search-input"} />

                <select className={"search-by"}>
                    <option value={"Firstname"}>Firstname</option>
                    <option value={"Lastname"}>Lastname</option>
                    <option value={"StudentID"}>StudentID</option>
                    <option value={"Department"}>Department</option>
                </select>

                <input type="button" value="Search" className="Search-button"/>
                <input type="button" value="Return" className="Return-button"/>
                <input type="button" value="Refresh" className="Refresh-button"/>

            </div>

            <div className="middle-left">
                <Table/>
            </div>

            <div className="bottom-left">

            </div>

        </div>

        <div className="right-bottom">
            <div className="firstname">
                <p>Firstname</p>
                <input type="text"/>
            </div>
            <div className="lastname">
                <p>Lastname</p>
                <input type="text"/>
            </div>
            <div className="studentID">
                <p>Student ID</p>
                <input type="text"/>
            </div>
            <div className="department">
                <p>Department</p>
                <input type="text"/>
            </div>
            <div className="gender">
                <p>Gender</p>
                <input type="text"/>
            </div>
            <div className="phoneNumber">
                <p>Phone Number</p>
                <input type="text"/>
            </div>

            <div className="editing">
                <button className="edit-mode">Edit Mode</button>
                <button className="update-button">Update</button>
                <button className="delete-button">Delete</button>
            </div>

        </div>

    </div>
}
export default Bottom