const Form = ({ form, updateField, handleSubmit, error }) => {
  return (
    <section className="w-full lg:w-[24.0625rem] ml-auto px-6 lg:px-0 form-el">
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
              error.name ? "border-error" : "border-lightGrayishViolet"
            }`}
            placeholder="e.g. Jane Appleseed"
          />
          {error.name && <p className="error-val">{error.name}</p>}
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
            className={`input-main w-full ${
              error.number ? "border-error" : "border-lightGrayishViolet"
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {error.number && <p className="error-val">{error.number}</p>}
        </div>
        <div className="flex items-baseline justify-start space-x-3  mb-5">
          <div className="flex items-start flex-col">
            <label htmlFor="expiry date" className="label-main">
              Exp. Date (MM/YY)
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                name="month"
                max={12}
                maxLength={2}
                value={form.month}
                onChange={updateField}
                className={`input-main w-[4.625rem] ${
                  error.month ? "border-error" : "border-lightGrayishViolet"
                } `}
                placeholder="MM"
              />
              <input
                type="text"
                name="year"
                maxLength={2}
                value={form.year}
                onChange={updateField}
                className={`input-main w-[4.625rem] ${
                  error.year ? "border-error" : "border-lightGrayishViolet"
                } `}
                placeholder="YY"
              />
            </div>
            {error.month && (
              <p className="error-val text-left">{error.month}</p>
            )}
            {error.year && <p className="error-val text-left">{error.year}</p>}
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
              className={`input-main w-[7.875rem] ${
                error.cvc ? "border-error" : "border-lightGrayishViolet"
              }`}
              placeholder="e.g. 123"
            />
            {error.cvc && <p className="error-val">Can't be blank</p>}
          </div>
        </div>
        <button className="submit">Confirm</button>
      </form>
    </section>
  )
}

export default Form
