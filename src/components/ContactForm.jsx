import Button from "./Button";
import { cargo, segmento } from "../data/data";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [success, setSuccess] = useState(false); // Success message state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false); // Error message state/ Error message state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cargo: "",
    segmento: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      cargo: formData.cargo,
      segmento: formData.segmento,
    };
    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwTtvCaImyaff8ikjy4e8SnClUBOFXd9o9qZXuN6lwtTlI-dJgHy6Ir4wtcZWolTLIGdg/exec",
        {
          method: "POST",
          mode: 'no-cors', // Add this line
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response) {
        setSuccessMessage("Dados enviados com sucesso!");
        setSuccess(true);
      } else {
        console.error("Erro na resposta do servidor:", response.status);
        setErrorMessage("Erro ao enviar os dados.");
        alert("Erro ao enviar os dados.");
      }
    } catch (error) {
      setErrorMessage("Erro ao enviar os dados. Tente novamente mais tarde.");
      console.log("Detailed error info:", {
        message: error.message,
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(!termsChecked);
  };

  return (
    <motion.form
      initial={{ x: 750 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit}
      id="contact"
      className="max-w-[350px] sm:ml-10 pt-4 w-full px-7 pb-6 bg-[#131313] flex flex-col gap-4 rounded-md shadow-xl"
    >
      <h1 className="mb-4 text-3xl text-center text-white">Inscreva-se</h1>
      <div className="flex flex-col gap-2">
        <label className="text-white">Digite seu nome</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-2 py-1 rounded-sm"
          required
          minLength={2}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Email</label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="px-2 py-1 rounded-sm"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Telefone (Whatsapp)</label>
        <input
          type="tel"
          name="phone"
          placeholder="(xx) xxxxx-xxxx"
          className="px-2 py-1 rounded-sm"
          pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
          maxLength="15"
          value={formData.phone}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length >= 2) {
              value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
            }
            if (value.length >= 10) {
              value = `${value.substring(0, 10)}-${value.substring(10)}`;
            }
            setFormData((prev) => ({
              ...prev,
              phone: value,
            }));
          }}
          required
        />{" "}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Cargo</label>
        <select
          name="cargo"
          className="px-2 py-1 text-sm rounded-sm"
          value={formData.cargo}
          onChange={handleChange}
        >
          {cargo.map((cargo) => (
            <option key={cargo} value={cargo}>
              {cargo}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Segmento</label>
        <select
          name="segmento"
          className="px-2 py-1 text-sm rounded-sm"
          value={formData.segmento}
          onChange={handleChange}
        >
          {segmento.map((segmento) => (
            <option key={segmento} value={segmento}>
              {segmento}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          onChange={handleCheckboxChange}
          className=""
        />
        <label htmlFor="terms" className="text-sm text-white">
          Li e concordo com os{" "}
          <Link
            to={"/terms-and-conditions"}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Termos e Condições!
          </Link>
        </label>
      </div>

      <button
        type="submit"
        disabled={!termsChecked}
        className={`px-4 py-2 mt-2 text-white duration-300 rounded-full ${
          termsChecked
            ? "bg-primary-medium hover:bg-primary-dark active:scale-95"
            : "bg-gray-500 cursor-not-allowed"
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          </div>
        ) : (
          "Enviar"
        )}
      </button>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </motion.form>
  );
};

export default ContactForm;
