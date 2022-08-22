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
      message: "",
    },
    number: {
      error: false,
      message: "",
    },
    month: {
      error: false,
      message: "",
    },
    year: {
      error: false,
      message: "",
    },
    cvc: {
      error: false,
      message: "",
    },
  })

  const [checkNoErrors, setCheckNoErrors] = useState(false)

  const updateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }
  const nameValidator = () => {
    let pattern = /[0-9]/g
    if (form.name === "") {
      const newErrorState = {
        ...error,
        [error.name.error]: (error.name.error = true),
        [error.name.message]: (error.name.message =
          "Please Enter Your Full Name"),
      }
      setError(newErrorState)
    } else if (form.name.match(pattern)) {
      const newErrorState = {
        ...error,
        [error.name.error]: (error.name.error = true),
        [error.name.message]: (error.name.message =
          "Please Enter Your Full Name, No numbers allowed"),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.name.error]: (error.name.error = false),
        [error.name.message]: (error.name.message = ""),
      }
      setError(newErrorState)
    }
  }

  const numberValidator = () => {
    let pattern = /[a-zA-Z]/g
    if (form.number === "") {
      const newErrorState = {
        ...error,
        [error.number.error]: (error.number.error = true),
        [error.number.message]: (error.number.message =
          "Wrong format, numbers only"),
      }
      setError(newErrorState)
    } else if (form.number.match(pattern)) {
      const newErrorState = {
        ...error,
        [error.number.error]: (error.number.error = true),
        [error.number.message]: (error.number.message =
          "Please Enter Your Card Number, No Text Allowed"),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.number.error]: (error.number.error = false),
        [error.number.message]: (error.number.message = ""),
      }
      setError(newErrorState)
    }
  }

  const monthValidator = () => {
    if (form.month === "") {
      const newErrorState = {
        ...error,
        [error.month.error]: (error.month.error = true),
        [error.month.message]: (error.month.message = "Can't be blank"),
      }
      setError(newErrorState)
    } else if (Number(form.month) > 12) {
      const newErrorState = {
        ...error,
        [error.month.error]: (error.month.error = true),
        [error.month.message]: (error.month.message = "Enter Valid Month"),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.month.error]: (error.month.error = false),
        [error.month.message]: (error.month.message = ""),
      }
      setError(newErrorState)
    }
  }

  const yearValidator = () => {
    if (form.year === "") {
      const newErrorState = {
        ...error,
        [error.year.error]: (error.year.error = true),
        [error.year.message]: (error.year.message = "Can't be blank"),
      }
      setError(newErrorState)
    } else if (Number(form.year) > 30) {
      const newErrorState = {
        ...error,
        [error.year.error]: (error.year.error = true),
        [error.year.message]: (error.year.message =
          "Enter A Valid Expiry Year"),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.year.error]: (error.year.error = false),
        [error.year.message]: (error.year.message = ""),
      }
      setError(newErrorState)
    }
  }

  const cvcValidator = () => {
    if (form.cvc === "") {
      const newErrorState = {
        ...error,
        [error.cvc.error]: (error.cvc.error = true),
        [error.cvc.message]: (error.cvc.message = "Can't be blank"),
      }
      setError(newErrorState)
    } else {
      const newErrorState = {
        ...error,
        [error.cvc.error]: (error.cvc.error = false),
        [error.cvc.message]: (error.cvc.message = ""),
      }
      setError(newErrorState)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nameValidator()
    numberValidator()
    monthValidator()
    yearValidator()
    cvcValidator()
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
          {checkNoErrors && <Completed />}
          {/* <Completed /> */}
          {/* create a new state if theres no error on input then toggle the state if state is true the show completed and hide form  */}
        </div>
      </div>
    </>
  )
}

export default App
