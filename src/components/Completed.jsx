import CompleteIcon from "../assets/icon-complete.svg"
const Completed = () => {
  return (
    <div className="w-full lg:w-[24.0625rem] ml-auto px-6 lg:px-0 flex items-center justify-center flex-col">
      <img src={CompleteIcon} alt="icon complete" className="mb-10" />
      <p className="uppercase text-veryDarkViolet text-2xl mb-7">Thank you!</p>
      <p className="text-lg text-darkGrayishViolet mb-12">
        We've added your card details
      </p>
      <button className="submit">Continue</button>
    </div>
  )
}

export default Completed
