"use client";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import IconContacts from "./IconContacts";

interface ContactErrors {
  email: {
    required: string;
    invalid: string;
  };
  message: {
    required: string;
    invalid: string;
  };
  asunto: {
    required: string;
    invalid: string;
  };
}

interface ContactButton {
  label1: string;
  label2: string;
}

interface ContactMeProps {
  title: string;
  label1: string;
  label2: string;
  label3: string;
  caracter: string;
  button: ContactButton;
  errors: ContactErrors;
}
function SendEmail({ t }: { t: ContactMeProps }) {
  const [dataEmail, setDataEmail] = useState({
    emailFrom: "",
    asunto: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    emailFrom: "",
    asunto: "",
    message: "",
  });
  const [countSend, setCountSend] = useState(0);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const count = parseInt(localStorage.getItem("emailSendCount") || "0");
    setCountSend(count);

    if (count >= 3) {
      setHasReachedLimit(true);
    }
  }, []);
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setDataEmail({
      ...dataEmail,
      [id]: value,
    });
    if (submitStatus !== "idle") setSubmitStatus("idle");
    if (id === "emailFrom") {
      if (!value) {
        setErrors((prev) => ({ ...prev, emailFrom: t.errors.email.required }));
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, emailFrom: t.errors.email.invalid }));
      } else {
        setErrors((prev) => ({ ...prev, emailFrom: "" }));
      }
    }
    if (id === "asunto") {
      if (!value) {
        setErrors((prev) => ({ ...prev, asunto: t.errors.asunto.required }));
      } else if (value.length < 3) {
        setErrors((prev) => ({ ...prev, asunto: t.errors.asunto.invalid }));
      } else {
        setErrors((prev) => ({ ...prev, asunto: "" }));
      }
    }
    if (id === "message") {
      if (!value) {
        setErrors((prev) => ({ ...prev, message: t.errors.message.required }));
      } else if (value.length < 10) {
        setErrors((prev) => ({ ...prev, message: t.errors.message.invalid }));
      } else {
        setErrors((prev) => ({ ...prev, message: "" }));
      }
    }
  };
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const { emailFrom, message, asunto } = dataEmail;
    const newErrors = {
      emailFrom: "",
      asunto: "",
      message: "",
    };

    if (!emailFrom) {
      newErrors.emailFrom = t.errors.email.required;
    } else if (!validateEmail(emailFrom)) {
      newErrors.emailFrom = t.errors.email.invalid;
    }
    if (!asunto) {
      newErrors.asunto = t.errors.asunto.required;
    } else if (asunto.length < 3) {
      newErrors.asunto = t.errors.asunto.invalid;
    }
    if (!message) {
      newErrors.message = t.errors.message.required;
    } else if (message.length < 10) {
      newErrors.message = t.errors.message.invalid;
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailFrom,
          asunto,
          message,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el correo");
      }

      setSubmitStatus("success");
      const newCount = countSend + 1;
      setCountSend(newCount);
      localStorage.setItem("emailSendCount", newCount.toString());

      if (newCount >= 3) {
        setHasReachedLimit(true);
      }
      setDataEmail({
        emailFrom: "",
        asunto: "",
        message: "",
      });
      
    } catch (error) {
      console.log("Error al enviar el email", error);
      setSubmitStatus("error");
    } finally {
      setSubmitStatus("idle")
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contacts"
      className="px-9 lg:px-16  flex flex-col lg:flex-row justify-center items-start lg:py-16 gap-8 mb-5 lg:mb-0"
    >
      <div className=" w-full flex  flex-col items-center gap-6 ">
        <SectionHeader titulo={t.title} />
      </div>
      <div className="w-full flex  flex-col jsutify-center items-center gap-9 ">
        {submitStatus === "success" && (
          <div className="min-w-[400px] bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p className="font-medium text-center">
              ¡Mensaje enviado con éxito!
            </p>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="min-w-[400px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-medium text-center">
              Ocurrió un error al enviar el mensaje. Por favor, inténtalo de
              nuevo.
            </p>
          </div>
        )}

        {hasReachedLimit && (
          <div className="min-w-[400px] bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
            <p className="font-medium text-center">
              Has alcanzado el límite de 3 mensajes. Gracias por contactarme.
            </p>
          </div>
        )}
        <form
          onSubmit={sendEmail}
          className="min-w-[400px] flex flex-col gap-7 justify-center items-center "
        >
          <div className="w-full flex flex-col justify-center items-start gap-2  ">
            <label htmlFor="emailFrom">{t.label1}</label>
            <input
              type="email"
              id="emailFrom"
              className="w-full rounded-lg border-1 border-primary-dark dark:border-primary-ligth py-2 px-5 bg-transparent focus:outline-none focus:border-2 transition-all"
              value={dataEmail.emailFrom}
              onChange={(e) => handleChange(e)}
              disabled={hasReachedLimit || isSubmitting}
            />
            {errors.emailFrom && (
              <p className="text-red-400 text-sm mt-1">{errors.emailFrom}</p>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2  ">
            <label htmlFor="asunto">{t.label3}</label>
            <input
              type="text"
              id="asunto"
              className="w-full rounded-lg border-1 border-primary-dark dark:border-primary-ligth py-2 px-5 bg-transparent focus:outline-none focus:border-2 transition-all"
              value={dataEmail.asunto}
              onChange={(e) => handleChange(e)}
              disabled={hasReachedLimit || isSubmitting}
            />
            {errors.asunto && (
              <p className="text-red-400 text-sm mt-1">{errors.emailFrom}</p>
            )}
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2 ">
            <label htmlFor="message">{t.label2}</label>
            <textarea
              value={dataEmail.message}
              name=""
              id="message"
              className="w-full min-h-[200px] rounded-lg border-1 border-primary-dark dark:border-primary-ligth py-2 px-5 bg-transparent  resize-none focus:outline-none focus:border-2 transition-all"
              onChange={(e) => handleChange(e)}
              disabled={hasReachedLimit || isSubmitting}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message}. {t.caracter}
              </p>
            )}
            {dataEmail.message && (
              <p className="text-sm mt-1">
                {t.caracter} ({dataEmail.message.length})
              </p>
            )}
          </div>
          <button
            className={`w-full font-semibold text-background py-2 rounded-lg transition-all duration-300 ease-in-out ${
              hasReachedLimit || isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-primary-dark dark:bg-primary-ligth  hover:-translate-y-2"
            }`}
            type="submit"
            disabled={hasReachedLimit || isSubmitting}
          >
            {hasReachedLimit ? t.button.label1 : isSubmitting ? "Enviando..." : t.button.label2}
          </button>
        </form>
      </div>
      <div className="flex lg:hidden justify-center items-center w-full mt-4">
        <IconContacts />
      </div>
    </section>
  );
}

export default SendEmail;
