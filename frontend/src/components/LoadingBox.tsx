import { Spinner } from "react-bootstrap";

import React from 'react'

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
    <span className="vissually-hidden">Loading..</span>
    </Spinner>
  )
}
