import { MDBContainer } from "mdb-react-ui-kit";

export default function NotFound() {
   return (
      <>
         <div>
            <MDBContainer className="d-flex justify-content-center align-items-center min-100vh flex-column">
               <h1>Page Not Found</h1>
               <h4>You are trying to access a broken/unavailable website</h4>

               <h5>
                  Go back to {""}
                  <a href="/">Home Page</a>
               </h5>
            </MDBContainer>
         </div>
      </>
   );
}
