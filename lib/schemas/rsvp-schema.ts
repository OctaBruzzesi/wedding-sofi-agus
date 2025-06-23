import { z } from 'zod'

export const attendeeSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  lastName: z
    .string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no puede exceder 50 caracteres')
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      'El apellido solo puede contener letras'
    ),
  phoneNumber: z
    .string()
    .regex(/^[+]?[0-9\s\-\(\)]{8,20}$/, 'Número de celular inválido')
    .optional()
    .or(z.literal('')),
  needsTransport: z.boolean().default(false),
})

export const rsvpFormSchema = z
  .object({
    mainAttendee: attendeeSchema,
    additionalAttendees: z.array(attendeeSchema).default([]),
    specialRequests: z
      .string()
      .max(500, 'Las solicitudes especiales no pueden exceder 500 caracteres')
      .optional()
      .or(z.literal('')),
  })
  .refine(
    (data) => {
      // Ensure at least the main attendee is present
      return (
        data.mainAttendee.name.trim() !== '' &&
        data.mainAttendee.lastName.trim() !== ''
      )
    },
    {
      message:
        'Debe completar al menos el nombre y apellido del asistente principal',
      path: ['mainAttendee'],
    }
  )

export type RSVPFormData = z.infer<typeof rsvpFormSchema>
export type AttendeeData = z.infer<typeof attendeeSchema>
