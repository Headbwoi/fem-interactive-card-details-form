import CardBack from "../assets/bg-card-back.png"
import CardFront from "../assets/bg-card-front.png"
import CardLogo from "../assets/card-logo.svg"

const Card = ({ form }) => {
  let vale = form.number
  let splitted = vale.split("")
  let firstFour = splitted.splice(0, 4).toString().replaceAll(",", "")
  let secondFour = splitted.splice(0, 4).toString().replaceAll(",", "")
  let thirdFour = splitted.splice(0, 4).toString().replaceAll(",", "")
  let fourthFour = splitted.splice(0, 4).toString().replaceAll(",", "")
  return (
    <div className="px-4 md:px-0 pt-8 md:pt-0 relative flex flex-col">
      {/* back card */}
      <div className="w-[18rem] h-[10rem] lg:w-[27.9375rem] lg:h-[15.375rem] rounded-md translate-x-6 lg:translate-x-[35%] lg:translate-y-[115%] relative shadow-2xl ">
        <img src={CardBack} alt="back of card" className="w-full h-full" />
        <p className="text-White absolute right-10 lg:right-14 top-[43.5%] lg:top-[46%] tracking-widest text-xs">
          {form.cvc == "" ? "000" : form.cvc.toString().padStart(3, "0")}
        </p>
      </div>
      {/* front-card */}
      <div className="w-[18rem] h-[10rem] lg:w-[27.9375rem] lg:h-[15.375rem] rounded-md -translate-x-6 -translate-y-[4.275rem] lg:translate-x-[15%] lg:-translate-y-full relative shadow-2xl">
        <img src={CardFront} alt="back of card" className="w-full h-full" />
        <div className="absolute inset-5 lg:inset-8">
          <img
            src={CardLogo}
            alt="card-logo"
            className="w-[3.4375rem] h-8 lg:w-[5.4375rem] lg:h-[3.1875rem] mb-[1.5625rem] lg:mb-[3.4375rem] "
          />
          <p className="text-lg lg:text-2xl text-White tracking-widest mb-4 lg:mb-6 w-full flex justify-between items-center pr-5">
            <span className="w-[49px] lg:w-[73px]">
              {firstFour == "" ? "0000" : firstFour}
            </span>
            <span className="w-[49px] lg:w-[73px]">
              {secondFour === "" ? "0000" : secondFour}
            </span>
            <span className="w-[49px] lg:w-[73px]">
              {thirdFour === "" ? "0000" : thirdFour}
            </span>
            <span className="w-[49px] lg:w-[73px]">
              {fourthFour === "" ? "0000" : fourthFour}
            </span>
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lightGrayishViolet uppercase text-sm">
              {form.name == "" ? "Jane Appleseed" : form.name}
            </p>
            <p className="text-lightGrayishViolet uppercase text-sm">
              {form.month === "" ? "00" : form.month.padStart(2, "0")} /{" "}
              {form.year === "" ? "00" : form.year.padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
