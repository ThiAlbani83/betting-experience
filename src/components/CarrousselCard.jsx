

const CarrousselCard = ({ name, role, surname, image }) => {
  return (
    <div className="bg-[#3055DC] rounded-bl-full relative w-[310px] h-[420px]">
      <div className="flex flex-col gap-2 text-[#E6E6E6] w-fit mx-auto">
        <span className="text-2xl">{name}</span>
        <span className="text-2xl">{surname}</span>
        <span className="text-base">{role}</span>
        <img
          src={image}
          alt="Victoria-Ceroni"
          className="absolute bottom-0 -right-20"
        />
      </div>
    </div>
  );
};

export default CarrousselCard;
