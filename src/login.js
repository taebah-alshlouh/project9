import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {emailORUsername,login, password} from "./actions";


function Login(){
    const dispatch=useDispatch();
    
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }

    return(
        <section className="vh-100 mt-5">
  <div className="container-fluid h-custom">
    <div className=" d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img-fluid"
          alt="Sample image"
          style={{height: '400px',margin:"65px"}}
        />

      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={(e)=>Fun(e)}>
         
          <div className="divider d-flex align-items-center my-4">
            <h2 className="text-center fw-bold mx-3 mb-0" style={{color:'#FF4141',margin:'auto 150px'}}>SIGN IN</h2>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3"  style={{color:'#000000'}}>
              Email address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              onChange={(e)=>dispatch(emailORUsername(e.target.value))}
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4"  style={{color:'#000000'}}>
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(e)=>dispatch(password(e.target.value))}
            /> 
          </div>
          
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
            defaultValue="Login"
              type="submit"
              className="btn btn-danger btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem",color:"white" }}
            >SIGN IN</button>
            
            <p className="small fw-bold mt-2 pt-1 mb-0" style={{color:'#000000'}}>
              Don't have an account?{" "}
              <a href="../reg" className="link " style={{color:'#FF3B0B'}}>
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
 
    
</section>

    )

}

export default Login;