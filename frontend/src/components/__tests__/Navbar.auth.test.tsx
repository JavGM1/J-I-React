import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar auth modals', () => {
  it('opens login modal, shows validation on bad input, and closes on valid submit', async () => {
    render(<Navbar /> as any);

    // Open desktop login menu: find the menu item 'Iniciar sesión' in the dropdown menu
    const desktopToggle = screen.getAllByRole('button', { hidden: true })
      .find(b => b.getAttribute('id') === 'loginDropdown');
    // If the toggle exists, click to reveal menu
    if (desktopToggle) fireEvent.click(desktopToggle);

    // Click the 'Iniciar sesión' menu item to open modal
    const iniciar = screen.getAllByText(/Iniciar sesión/i)[0];
    fireEvent.click(iniciar);

  // Now modal should show; scope queries to the dialog
  const dialog = screen.getByRole('dialog');
  const modal = within(dialog);
  expect(modal.getByText(/Dirección de correo electrónico/i)).toBeInTheDocument();

  // Submit invalid email
  const email = modal.getByPlaceholderText(/Ingresa tu email/i);
  const password = modal.getByPlaceholderText(/Contraseña/i);
  fireEvent.change(email, { target: { value: 'bademail' } });
  fireEvent.change(password, { target: { value: '123' } });
  const enviar = modal.getByRole('button', { name: /Enviar/i });
  fireEvent.click(enviar);

  // invalid submit should keep the modal open
  expect(screen.getByRole('dialog')).toBeInTheDocument();

  // Submit valid data (valid email and password length >= 6) and verify modal closes
  fireEvent.change(email, { target: { value: 'test@example.com' } });
  fireEvent.change(password, { target: { value: '123456' } });
  fireEvent.click(enviar);

  // After valid submit the modal dialog should be removed
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('opens register modal and validates inputs', async () => {
    render(<Navbar /> as any);

    const desktopToggle = screen.getAllByRole('button', { hidden: true })
      .find(b => b.getAttribute('id') === 'loginDropdown');
    if (desktopToggle) fireEvent.click(desktopToggle);

    const registrar = screen.getAllByText(/Registrar/i)[0];
    fireEvent.click(registrar);

  // Should render register modal and scope to dialog
  const dialog2 = screen.getByRole('dialog');
  const modal2 = within(dialog2);
  expect(modal2.getByText(/Dirección de correo electrónico/i)).toBeInTheDocument();

  const email2 = modal2.getByPlaceholderText(/Ingresa tu email/i);
  const password2 = modal2.getByPlaceholderText(/Contraseña/i);
  const checkbox = modal2.getByLabelText(/Confirmo que soy mayor de 18 años/i);
  const enviar2 = modal2.getByRole('button', { name: /Enviar/i });

  // Invalid email
  fireEvent.change(email2, { target: { value: 'nope' } });
  fireEvent.change(password2, { target: { value: '123' } });
  fireEvent.click(enviar2);
  // invalid submit keeps modal open
  expect(screen.getByRole('dialog')).toBeInTheDocument();

  // Valid email but missing over18
  fireEvent.change(email2, { target: { value: 'reg@example.com' } });
  fireEvent.change(password2, { target: { value: '123456' } });
  fireEvent.click(enviar2);
  // missing over18 keeps modal open
  expect(screen.getByRole('dialog')).toBeInTheDocument();

  // Check the checkbox and submit — modal should close
  fireEvent.click(checkbox);
  fireEvent.click(enviar2);
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
