import { useState } from "react"
import Card from "./components/Card"
import Completed from "./components/Completed"
import Form from "./components/Form"

function App() {
  const initialValues = {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [checkNoErrors, setCheckNoErrors] = useState(false)

  const updateField = (e) => {
    const { name, value } = e.target
    const nextFormState = {
      ...formValues,
      [name]: value,
    }
    setFormValues(nextFormState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(formValues))
  }

  const validate = (values) => {
    const errors = {}
    const nameRegex = /[0-9]/g
    const numberRegex = /[a-zA-Z]/g
    if (!values.name) {
      errors.name = "Please Enter Your Full Name"
    } else if (values.name.match(nameRegex)) {
      errors.name = "Please Enter Your Full Name, No numbers allowed"
    } else {
      errors.name = ""
    }

    if (!values.number) {
      errors.number = "Please Enter Your Full number"
    } else if (values.number.match(numberRegex)) {
      errors.number = "Wrong format, numbers only"
    } else {
      errors.number = ""
    }
    if (!values.month) {
      errors.month = "Can't be blank"
    } else if (Number(values.month) > 12) {
      errors.month = "Enter Valid Month"
    } else {
      errors.month = ""
    }
    if (!values.year) {
      errors.year = "Can't be blank"
    } else if (Number(values.year) > 30) {
      errors.year = "Enter Valid year"
    } else {
      errors.year = ""
    }
    if (!values.cvc) {
      errors.cvc = "Can't be blank"
    } else {
      errors.cvc = ""
    }
    if (
      errors.name == "" &&
      errors.number == "" &&
      errors.month == "" &&
      errors.year == "" &&
      errors.cvc == ""
    ) {
      setCheckNoErrors(true)
    } else {
      setCheckNoErrors(false)
    }
    return errors
  }

  const toggleError = () => {
    setCheckNoErrors(false)
  }

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <div className="container relative flex items-center justify-center lg:justify-between  flex-col lg:flex-row lg:min-h-screen">
          <Card form={formValues} />

          {checkNoErrors ? (
            <Completed toggleError={toggleError} />
          ) : (
            <Form
              form={formValues}
              updateField={updateField}
              handleSubmit={handleSubmit}
              error={errors}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
