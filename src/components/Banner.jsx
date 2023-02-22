import {
   MDBBtn,
   MDBCol,
   MDBContainer,
   MDBInput,
   MDBRow,
} from "mdb-react-ui-kit";
import image1 from "../images/image1.png";
import { useState } from "react";

export default function Banner() {
   const [formValue, setFormValue] = useState({
      firstName: "",
      email: "",
   });

   const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };
   return (
      <>
         <div className="mainBackground d-flex flex-column ">
            <div className="min-60vh d-flex flex-column justify-content-center">
               <div className="headlineSection d-flex align-items-center">
                  <MDBContainer>
                     <MDBRow className="d-flex justify-content-center p-0 py-4 m-0 mx-5">
                        <div>
                           <MDBCol md={6} className="">
                              <div className="d-flex flex-column justify-content-center">
                                 <div className="d-md-flex d-block align-items-baseline m-0 p-0">
                                    <img className="mx-2" src={image1} alt="" />
                                    <h2 className="fw-normal m-0 d-flex ">
                                       <em>The</em>
                                    </h2>
                                 </div>
                                 <h1 className="m-0 bannerHeadline">
                                    <em>Fastest, Most Accurate</em>
                                 </h1>
                                 <h2 className="m-0">
                                    <em>Way to Close Your Books!</em>
                                 </h2>
                              </div>
                           </MDBCol>
                        </div>
                     </MDBRow>
                  </MDBContainer>
               </div>
            </div>
            <div className="min-40vh d-md-flex flex-column justify-content-center">
               <MDBContainer>
                  <MDBRow className="colorWhite mx-md-5 my-lg-0 my-4 d-flex">
                     <MDBCol
                        lg={4}
                        className="scheduleDemo py-4 px-3 d-flex justify-content-center align-items-center text-center  flex-column"
                     >
                        <h2 className="text-light">SCHEDULE A DEMO</h2>
                        <h5 className="text-light fw-normal">
                           Learn More About FloQast.
                        </h5>
                     </MDBCol>
                     <MDBCol
                        lg={8}
                        className="d-flex flex-column justify-content-center align-items-center mb-lg-0 mb-4 "
                     >
                        <h3 className="fw-bold colorFont d-lg-block d-flex flex-column text-center my-4 my-lg-2">
                           Learn How FloQast Can{" "}
                           <span className="colorMint">
                              Improve Your Month-End
                           </span>
                        </h3>
                        <MDBRow
                           tag="form"
                           className="d-flex align-items-center w-100 p-1"
                        >
                           <MDBCol md={4} className="px-1 my-3 my-md-0">
                              <MDBInput
                                 value={formValue.firstName}
                                 name="firstName"
                                 onChange={onChange}
                                 id="firstNameId"
                                 required
                                 label="First Name*"
                                 className="w-100 p-2"
                              ></MDBInput>
                           </MDBCol>
                           <MDBCol md={4} className="px-1 my-3 my-md-0">
                              <MDBInput
                                 value={formValue.email}
                                 type="email"
                                 name="email"
                                 onChange={onChange}
                                 id="emailId"
                                 required
                                 label="Email*"
                                 className="w-100 p-2"
                              ></MDBInput>
                           </MDBCol>
                           <MDBCol md={4} className="px-1 my-2 my-md-0">
                              <MDBBtn
                                 type="submit"
                                 className="w-100 p-1 buttonSchedule "
                              >
                                 Schedule Now
                              </MDBBtn>
                           </MDBCol>
                        </MDBRow>
                     </MDBCol>
                  </MDBRow>
               </MDBContainer>
            </div>
         </div>
      </>
   );
}
