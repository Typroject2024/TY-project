import './App.css'
import ContentHeader from './Components/ContentHeader/'

function App() {

  return (
    <>
      <ContentHeader name="Add Users" sub_content="Information about users"/>
      <div className='res-form'>
        <div className="form-box">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" maxLength={"10"} />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Warehouse Location</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Location" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Posistion</label>
            <select className="form-control form-select" name="" id="exampleFormControlInput1">
              <option className="form-control " value="None" selected>Select Posistion</option>
              <option className="form-control " value="Admin">Center Warehouse Manager</option>
              <option className="form-control " value="Admin">Sub Warehouse Manager</option>
              <option className="form-control " value="Admin">Outlet Manager</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" maxLength={"10"} />
           
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" maxLength={"10"} />
          </div>

    <div className="mb-3">

          <input type="submit" value={"Add"} className='form-button'/>
    </div>
    <div className="mb-3">

          <input type="reset" value={"Clear"} className='form-button'/>
    </div>
        </div>
      </div>
    </>
  )
}

export default App
