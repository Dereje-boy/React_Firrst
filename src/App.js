import logo from './logo.svg';

import face2 from "./Photos/face 2.jpg"
import face3 from "./Photos/face 3.jpg"
import face4 from "./Photos/face 4.jpg"

import './App.css';
import Student from "./Components/SingleStudent";

function App() {
    return (
        <div className="App">
            <h1>Welcome to the list of students....</h1>

            <Student
                fname={students[0].fname}
                lname={students[0].lname}
                photo={students[0].photo}
                dob={students[0].dob}
            />
            <Student
                fname={students[1].fname}
                lname={students[1].lname}
                photo={students[1].photo}
                dob={students[1].dob}
            />
            <Student
                fname={students[2].fname}
                lname={students[2].lname}
                photo={students[2].photo}
                dob={students[2].dob}
            />
        </div>
    );
}

export default App;

let students = [
    {fname: "Dere", lname: "Boy", photo: face2, dob: "21/01/2022"},
    {fname: "Marnignh", lname: "Mike", photo: face3, dob: "21/01/2022"},
    {fname: "Rolfign", lname: "John", photo: face4, dob: "21/01/2022"},
]