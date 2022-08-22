import CompleteIcon from "../assets/icon-complete.svg"
const Completed = ({ toggleError }) => {
  return (
    <div
      className={`w-full lg:w-[24.0625rem] ml-auto px-6 lg:px-0 flex items-center justify-center flex-col completed`}
    >
      <img src={CompleteIcon} alt="icon complete" className="mb-10" />
      <p className="uppercase text-veryDarkViolet text-2xl mb-7">Thank you!</p>
      <p className="text-lg text-darkGrayishViolet mb-12">
        We've added your card details
      </p>
      <button className="submit" onClick={toggleError}>
        Continue
      </button>
    </div>
  )
}

export default Completed
