'use client'

import { useState } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Minus, Users, Send, Loader2, Bus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { rsvpFormSchema, type RSVPFormData } from '@/lib/schemas/rsvp-schema'

interface RSVPFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export default function RSVPForm({ onSuccess, onCancel }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      mainAttendee: {
        name: '',
        lastName: '',
        phoneNumber: '',
        needsTransport: false,
      },
      additionalAttendees: [],
      specialRequests: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'additionalAttendees',
  })

  const addAttendee = () => {
    append({ name: '', lastName: '', phoneNumber: '', needsTransport: false })
  }

  const removeAttendee = (index: number) => {
    remove(index)
  }

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          totalAttendees: 1 + data.additionalAttendees.length,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: '¡Confirmación exitosa!',
          description:
            'Tu asistencia ha sido confirmada. ¡Nos vemos en la boda!',
          duration: 5000,
        })
        form.reset()
        onSuccess?.()
      } else {
        throw new Error(result.message || 'Error al confirmar asistencia')
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      toast({
        title: 'Error',
        description:
          'Hubo un problema al confirmar tu asistencia. Por favor, intenta nuevamente.',
        variant: 'destructive',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalAttendees = 1 + fields.length

  // Watch form values to calculate transport needs in real-time
  const watchedValues = form.watch()
  const mainNeedsTransport = watchedValues.mainAttendee?.needsTransport || false
  const additionalNeedingTransport =
    watchedValues.additionalAttendees?.filter(
      (attendee) => attendee?.needsTransport
    ) || []
  const totalNeedingTransport =
    (mainNeedsTransport ? 1 : 0) + additionalNeedingTransport.length
  const hasTransportNeeds = totalNeedingTransport > 0

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-neutral-800 mb-2">
          Confirmar Asistencia
        </h2>
        <p className="text-stone-700">
          Por favor, completa la información de todos los asistentes
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Main Attendee */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-neutral-50">
            <CardTitle className="flex items-center gap-2 text-neutral-800">
              <Users className="w-5 h-5" />
              Asistente Principal
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mainAttendee.name" className="text-stone-700">
                  Nombre *
                </Label>
                <Input
                  id="mainAttendee.name"
                  {...form.register('mainAttendee.name')}
                  placeholder="Tu nombre"
                  className="border-stone-200 focus:border-neutral-500"
                />
                {form.formState.errors.mainAttendee?.name && (
                  <p className="text-sm text-red-600">
                    {form.formState.errors.mainAttendee.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="mainAttendee.lastName"
                  className="text-stone-700"
                >
                  Apellido *
                </Label>
                <Input
                  id="mainAttendee.lastName"
                  {...form.register('mainAttendee.lastName')}
                  placeholder="Tu apellido"
                  className="border-stone-200 focus:border-neutral-500"
                />
                {form.formState.errors.mainAttendee?.lastName && (
                  <p className="text-sm text-red-600">
                    {form.formState.errors.mainAttendee.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mainAttendee.phoneNumber" className="text-stone-700">
                Número de Celular (opcional)
              </Label>
              <Input
                id="mainAttendee.phoneNumber"
                type="tel"
                {...form.register('mainAttendee.phoneNumber')}
                placeholder="1234567890"
                className="border-stone-200 focus:border-neutral-500"
              />
              {form.formState.errors.mainAttendee?.phoneNumber && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.mainAttendee.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Controller
                  name="mainAttendee.needsTransport"
                  control={form.control}
                  render={({ field }) => (
                    <Checkbox
                      id="mainAttendee.needsTransport"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-stone-300 data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-600"
                    />
                  )}
                />
                                <Label
                  htmlFor="mainAttendee.needsTransport"
                  className="text-stone-700 flex items-center gap-2"
                >
                  <Bus className="w-5 h-5" />
                  Incluir transporte desde CABA
                </Label>
              </div>
              {form.watch('mainAttendee.needsTransport') && (
            <div className="bg-white p-4 rounded-md border border-stone-200">
              <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="text-sm space-y-1 text-stone-700">
                  <p className="font-semibold">📍 Salida: Plaza Italia, Palermo</p>
                  <p className="font-semibold">🕐 Ida: 3:15 PM</p>
                  <p className="font-semibold">🔄 Vuelta: Sale 3:30 AM del salón</p>
                  <p className="text-xs text-stone-600 mt-2 italic">* El transporte es gratuito y regresa al mismo punto</p>
                </div>
              </div>
            </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Additional Attendees */}
        {fields.length > 0 && (
          <Card className="border-neutral-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-neutral-50 to-stone-50">
              <CardTitle className="flex items-center gap-2 text-neutral-800">
                <Plus className="w-5 h-5" />
                Acompañantes ({fields.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="space-y-4 p-4 bg-stone-50/50 rounded-lg border border-stone-100"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-neutral-800">
                      Acompañante {index + 1}
                    </h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeAttendee(index)}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-stone-700">Nombre *</Label>
                      <Input
                        {...form.register(`additionalAttendees.${index}.name`)}
                        placeholder="Nombre del acompañante"
                        className="border-stone-200 focus:border-neutral-500"
                      />
                      {form.formState.errors.additionalAttendees?.[index]
                        ?.name && (
                        <p className="text-sm text-red-600">
                          {
                            form.formState.errors.additionalAttendees[index]
                              ?.name?.message
                          }
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-stone-700">Apellido *</Label>
                      <Input
                        {...form.register(
                          `additionalAttendees.${index}.lastName`
                        )}
                        placeholder="Apellido del acompañante"
                        className="border-stone-200 focus:border-neutral-500"
                      />
                      {form.formState.errors.additionalAttendees?.[index]
                        ?.lastName && (
                        <p className="text-sm text-red-600">
                          {
                            form.formState.errors.additionalAttendees[index]
                              ?.lastName?.message
                          }
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-stone-700">Número de Celular (opcional)</Label>
                    <Input
                      type="tel"
                      {...form.register(`additionalAttendees.${index}.phoneNumber`)}
                      placeholder="1234567890"
                      className="border-stone-200 focus:border-neutral-500"
                    />
                    {form.formState.errors.additionalAttendees?.[index]
                      ?.phoneNumber && (
                      <p className="text-sm text-red-600">
                        {
                          form.formState.errors.additionalAttendees[index]
                            ?.phoneNumber?.message
                        }
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Controller
                        name={`additionalAttendees.${index}.needsTransport`}
                        control={form.control}
                        render={({ field }) => (
                          <Checkbox
                            id={`additionalAttendees.${index}.needsTransport`}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-stone-300 data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-600"
                          />
                        )}
                      />
                      <Label
                        htmlFor={`additionalAttendees.${index}.needsTransport`}
                        className="text-stone-700 flex items-center gap-2"
                      >
                        <Bus className="w-5 h-5" />
                        Incluir transporte desde CABA
                      </Label>
                    </div>
                    {form.watch(`additionalAttendees.${index}.needsTransport`) && (
                      <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200">
                        <div className="text-sm space-y-1 text-stone-700">
                          <p className="font-semibold">📍 Salida: Plaza Italia, Palermo</p>
                          <p className="font-semibold">🕐 Ida: 3:15 PM</p>
                          <p className="font-semibold">🔄 Vuelta: Sale 3:30 AM del salón</p>
                          <p className="text-xs text-stone-600 mt-2 italic">* El transporte es gratuito y regresa al mismo punto</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Add Attendee Button */}
        <div className="text-center">
          <Button
            type="button"
            variant="outline"
            onClick={addAttendee}
            className="border-neutral-600 text-neutral-600 hover:bg-neutral-50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Agregar acompañante
          </Button>
        </div>

        {/* Special Requests */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-neutral-800">
              Solicitudes Especiales (opcional)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              {...form.register('specialRequests')}
              placeholder="¿Alguna restricción alimentaria, necesidad especial o comentario?"
              className="border-stone-200 focus:border-neutral-500 min-h-[100px]"
            />
            {form.formState.errors.specialRequests && (
              <p className="text-sm text-red-600">
                {form.formState.errors.specialRequests.message}
              </p>
            )}
          </CardContent>
        </Card>

        <Separator className="bg-stone-200" />

        {/* Summary */}
        <div className="bg-gradient-to-r from-stone-50 to-neutral-50 p-4 rounded-lg border border-stone-200">
          <p className="text-center text-neutral-800 font-medium">
            Total de asistentes:{' '}
            <span className="text-2xl font-bold">{totalAttendees}</span>
          </p>
        </div>

        {/* Transport Information */}
        {hasTransportNeeds && (
          <div className="bg-gradient-to-r from-stone-50 to-neutral-50 p-6 rounded-lg border border-stone-200">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bus className="w-6 h-6 text-stone-600" />
                <h3 className="text-xl font-semibold text-stone-700">
                  Información de Transporte
                </h3>
              </div>
              <p className="text-stone-700 font-medium">
                {totalNeedingTransport} persona
                {totalNeedingTransport !== 1 ? 's' : ''} necesita
                {totalNeedingTransport === 1 ? '' : 'n'} transporte
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-stone-200">
              <div className="mt-2 p-3 bg-stone-50 rounded-lg border border-stone-200">
                <div className="text-sm space-y-1 text-stone-700">
                  <p className="font-semibold">📍 Salida: Plaza Italia, Palermo</p>
                  <p className="font-semibold">🕐 Ida: 3:15 PM</p>
                  <p className="font-semibold">🔄 Vuelta: Sale 3:30 AM del salón</p>
                  <p className="text-xs text-stone-600 mt-2 italic">* El transporte es gratuito y regresa al mismo punto</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className="border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Cancelar
            </Button>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-stone-600 to-neutral-700 hover:from-stone-700 hover:to-neutral-800 text-white px-8"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Confirmando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Confirmar Asistencia
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
