import { useState } from "react"
import Card from "./components/Card"
import Completed from "./components/Completed"
import Form from "./components/Form"

function App() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  })
  const [error, setError] = useState({
    name: {
      error: false,
    },
    number: {
      error: false,
    },
    month: {
      error: false,
    },
    year: {
      error: false,
    },
    cvc: {
      error: false,
    },
  })

  const updateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }
  const nameValidator = () => {
    let pattern = /[0-9]/g
    if (form.name === "" || form.name.match(pattern)) {
      const newErrorState = {
        ...error,
        [error.name.error]: (error.name.error = true),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.name.error]: (error.name.error = false),
      }
      setError(newErrorState)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nameValidator()
  }
  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <div className="container relative flex items-center justify-center lg:justify-between  flex-col lg:flex-row lg:min-h-screen">
          <Card form={form} />
          <Form
            form={form}
            updateField={updateField}
            handleSubmit={handleSubmit}
            error={error}
          />
          {/* <Completed /> */}
          {/* create a new state if theres no error on input then toggle the state if state is true the show completed and hide form  */}
        </div>
      </div>
    </>
  )
}

export default App
