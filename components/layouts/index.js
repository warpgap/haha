import React,{Fragment} from 'react'
import { Container} from "reactstrap";
import Header from "../header"
import "bootstrap/dist/css/bootstrap.min.css";
export default function Layout({children}) {
  return (
    <Fragment>
      <Container>
        <Header/>
      <main>
          {children}
      </main>
      </Container>
    </Fragment>
  )
}
