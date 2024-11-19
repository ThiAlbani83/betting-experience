import SwitchToggle from "./SwitchToggle";
import Button from "./Button";

const HeroRight = () => {
  return (
    <div className="bg-[url('/noise-bg.png')] bg-cover bg-center place-content-center bg-no-repeat w-full lg:w-[80%] py-16 lg:py-0">
      <form className="max-w-[350px] sm:ml-10 pt-9 w-full px-7 pb-11 bg-[#131313] place-content-center place-self-center lg:place-self-start flex flex-col gap-8 rounded-md shadow-xl">
        <div className="flex flex-col gap-2">
          <label className="text-white">Digite seu nome</label>
          <input type="text" placeholder="John Doe" className="px-2 py-1 rounded-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Email</label>
          <input type="email" placeholder="johndoe@gmail.com" className="px-2 py-1 rounded-sm" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Whatsapp</label>
          <input type="text" placeholder="(11) xxxxx-xxxx" className="px-2 py-1 rounded-sm" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <label className="text-white">Você é organização?</label>
            <SwitchToggle />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">Você é empresa?</label>
            <SwitchToggle />
          </div>
        </div>
        <Button text="Enviar" />
      </form>
    </div>
  );
};

export default HeroRight;
