import { useState } from "react"
import Card from "./components/Card"
import Form from "./components/Form"

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen ">
        <div className="container relative flex items-center justify-center flex-col lg:flex-row lg:min-h-screen">
          {/* left side */}
          <Card />
          {/* right side */}
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
