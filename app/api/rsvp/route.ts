import { NextRequest, NextResponse } from 'next/server'
import { rsvpFormSchema } from '@/lib/schemas/rsvp-schema'
import { writeRSVPToSheet } from '@/lib/google-sheets'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data using Zod schema
    const validationResult = rsvpFormSchema.safeParse(body)

    if (!validationResult.success) {
      console.error('Validation errors:', validationResult.error.errors)
      return NextResponse.json(
        {
          success: false,
          message: 'Datos inválidos',
          errors: validationResult.error.errors,
        },
        { status: 400 }
      )
    }

    const rsvpData = validationResult.data

    // Check if Google Sheets is properly configured
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error('Google Sheets not configured')
      return NextResponse.json(
        {
          success: false,
          message: 'Configuración del servidor incompleta',
        },
        { status: 500 }
      )
    }

    // Write to Google Sheets
    try {
      await writeRSVPToSheet(rsvpData)

      // Log successful submission (without sensitive data)
      console.log('RSVP submitted successfully:', {
        mainAttendee: `${rsvpData.mainAttendee.name} ${rsvpData.mainAttendee.lastName}`,
        totalAttendees: 1 + rsvpData.additionalAttendees.length,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Confirmación registrada exitosamente',
        data: {
          totalAttendees: 1 + rsvpData.additionalAttendees.length,
          timestamp: new Date().toISOString(),
        },
      })
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError)

      // Return a user-friendly error message
      return NextResponse.json(
        {
          success: false,
          message:
            'Error al guardar la confirmación. Por favor, intenta nuevamente.',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API route error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor',
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 })
}
