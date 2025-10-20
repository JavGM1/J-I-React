import { useState } from "react";

export function useRegisterForm(onSuccess?: () => void) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [over18, setOver18] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(email: string) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Email inválido");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (!over18) {
      setError("Debes confirmar que eres mayor de 18 años");
      return;
    }
    setError("");
    if (onSuccess) onSuccess();
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    over18,
    setOver18,
    error,
    handleSubmit,
  };
}
