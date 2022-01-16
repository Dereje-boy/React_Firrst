import '../Styles/Admin/table.css'

function Table(tableData) {
    return <div className="table-container">
        <table className="table" onClick={TableClickListener}>
            <tbody>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Student ID</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Dorm</th>
                <th>Phone Number</th>
            </tr>
            <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Student ID</td>
                <td>Department</td>
                <td>Gender</td>
                <td>Dorm</td>
                <td>Phone Number</td>
            </tr>
            <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Student ID</td>
                <td>Department</td>
                <td>Gender</td>
                <td>Dorm</td>
                <td>Phone Number</td>
            </tr>
            <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Student ID</td>
                <td>Department</td>
                <td>Gender</td>
                <td>Dorm</td>
                <td>Phone Number</td>
            </tr>
            <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Student ID</td>
                <td>Department</td>
                <td>Gender</td>
                <td>Dorm</td>
                <td>Phone Number</td>
            </tr>
            </tbody>
        </table>
    </div>
}

export default Table

function TableClickListener(e) {
    console.log(e);
}