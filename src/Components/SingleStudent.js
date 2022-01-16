function Student({photo,fname,dob,lname}) {

    return <div className="single-student">

        <div className="left">
            <img src={photo} className={"student-photo"}/>
        </div>

        <div className="right">
            <div className="name">
                <h1 >{fname} {lname}</h1>
            </div>
            <p className="dob">{dob}</p>
        </div>


    </div>
}
export default Student;