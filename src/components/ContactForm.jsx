import Button from "./Button";
import { cargo, segmento } from "../data/data";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [success, setSuccess] = useState(false); // Success message state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); // Error message state/ Error message state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cargo: "",
    segmento: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      cargo: formData.cargo,
      segmento: formData.segmento,
    };

    try {
      console.log("antes do response")
      console.log("Sending data:", data) // Log the data being sent
      
    const response = await axios.post(
      "http://localhost:8000/mailer.php",
      data,
      {
          headers: {
              "Content-Type": "application/json",
          },
          withCredentials: true,
          timeout: 30000 // Increased to 30 seconds
      }
    );
      
      console.log("depois do response")
      setSuccessMessage("Mensagem enviada com sucesso!");
      setSuccess(true);
      console.log(response.data);
      setErrorMessage("");
      setError(false);
    } catch (error) {
      console.log("Detailed error info:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.form
      initial={{ x: 750 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit}
      id="contact"
      className="max-w-[350px] sm:ml-10 pt-9 w-full px-7 pb-11 bg-[#131313] place-content-center place-self-center lg:place-self-start flex flex-col gap-4 rounded-md shadow-xl"
    >
      <div className="flex flex-col gap-2">
        <label className="text-white">Digite seu nome</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="px-2 py-1 rounded-sm"
          required
          minLength={2}
          pattern="[A-Za-z\s]+"
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
      <Button children={"mt-2"} text="Enviar" />
    </motion.form>
  );
};

export default ContactForm;
