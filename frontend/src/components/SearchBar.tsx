import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ onSearch, placeholder = "Introduce un término de búsqueda", className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <Form className={`d-flex ${className}`} role="search" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder={placeholder}
        className="search-input me-2"
        aria-label="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="outline-success" className="search-button">
        Buscar
      </Button>
    </Form>
  );
}
