import { createPortal } from "react-dom"

const Error = (props) => {
  return (
    <>
      {
        createPortal(<div>{props.title}</div>, document.getElementById('error-root'))
      }
    </>
  )
}

export default Error
