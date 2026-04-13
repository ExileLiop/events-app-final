import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2, "ПІБ обов'язкове (мін. 2 символи)"),
  email: z.string().email("Некоректний формат email"),
  dateOfBirth: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age >= 18;
  }, "Реєстрація дозволена тільки особам від 18 років"),
  source: z.string().min(1, "Оберіть джерело інформації"),
});