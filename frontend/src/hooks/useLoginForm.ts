import { useState } from "react";

export function useLoginForm(onSuccess?: () => void) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    setError("");
    if (onSuccess) onSuccess();
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
}
