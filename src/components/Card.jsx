import CardBack from "../assets/bg-card-back.png"
import CardFront from "../assets/bg-card-front.png"

const Card = () => {
  return (
    <div className="px-4 md:px-0 pt-8 md:pt-0 relative flex flex-col">
      {/* back card */}
      <div className="w-[18rem] h-[10rem] lg:w-[27.9375rem] lg:h-[15.375rem] rounded-md translate-x-7 lg:-translate-x-36 lg:translate-y-[115%]">
        <img src={CardBack} alt="back of card" className="w-full h-full" />
      </div>
      {/* front-card */}
      <div className="w-[18rem] h-[10rem] lg:w-[27.9375rem] lg:h-[15.375rem] rounded-md -translate-x-7 -translate-y-16 lg:-translate-x-60 lg:-translate-y-full">
        <img src={CardFront} alt="back of card" className="w-full h-full" />
      </div>
    </div>
  )
}

export default Card
