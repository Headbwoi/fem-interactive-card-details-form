const Form = ({ form, updateField, handleSubmit, error }) => {
  // const formatInput = (val) => {
  //   if (!val) return
  //   let splitter = val.toString().split("")

  //   let firstFour = splitter.splice(0, 4).toString().replaceAll(",", "")
  //   let secondFour = splitter.splice(0, 4).toString().replaceAll(",", "")
  //   let thirdFour = splitter.splice(0, 4).toString().replaceAll(",", "")
  //   let fourthFour = splitter.splice(0, 4).toString().replaceAll(",", "")
  //   if (val.length == 16) {
  //     val = `${firstFour} ${secondFour} ${thirdFour} ${fourthFour}`
  //     document.querySelector("#number").innerHTML = val
  //     // document.querySelector("#number").value = real
  //   }
  // }
  return (
    <section className="w-full lg:w-[24.0625rem] ml-auto px-6 lg:px-0">
      <form className="w-full " onSubmit={handleSubmit}>
        <div className=" mb-5">
          <label htmlFor="cardholder-name" className="label-main">
            Cardholder Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            className={`input-main w-full ${
              error.name.error ? "border-error" : "border-lightGrayishViolet"
            }`}
            placeholder="e.g. Jane Appleseed"
          />
          {error.name.error && (
            <p className="error-val">Wrong, format text only</p>
          )}
          {/* <p className="error-val">Wrong, format text only</p> */}
        </div>
        <div className=" mb-5">
          <label htmlFor="card-number" className="label-main">
            Card Number
          </label>
          <input
            type="text"
            name="number"
            id="number"
            maxLength={16}
            value={form.number}
            onChange={updateField}
            // onKeyUp={(e) => formatInput(e.target.value)}
            className={`input-main w-full ${
              error.number.error ? "border-error" : "border-lightGrayishViolet"
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {/* <p className="error-val">Wrong format, numbers only</p> */}
        </div>
        <div className="flex items-center justify-start space-x-3  mb-5">
          <div className="flex items-start flex-col">
            <label htmlFor="expiry date" className="label-main">
              Exp. Date (MM/YY)
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                name="month"
                maxLength={2}
                value={form.month}
                onChange={updateField}
                className="input-main w-[4.625rem]"
                placeholder="MM"
              />
              <input
                type="text"
                name="year"
                maxLength={2}
                value={form.year}
                onChange={updateField}
                className="input-main w-[4.625rem]"
                placeholder="YY"
              />
            </div>
            {/* <p className="error-val text-left">Can't be blank</p> */}
          </div>
          <div className="flex items-start flex-col">
            <label htmlFor="cvc" className="label-main">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              maxLength={3}
              value={form.cvc}
              onChange={updateField}
              className="input-main w-[126px]"
              placeholder="e.g. 123"
            />
            {/* <p className="error-val">Can't be blank</p> */}
          </div>
        </div>
        <button className="submit">Confirm</button>
      </form>
    </section>
  )
}

export default Form
