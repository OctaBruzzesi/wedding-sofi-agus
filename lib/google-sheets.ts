import { google } from 'googleapis'
import { RSVPFormData } from '@/lib/schemas/rsvp-schema'
import { formatArgentinaTimestamp } from '@/lib/utils/date-formatter'

// Google Sheets configuration
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

// Initialize Google Sheets API
export async function getGoogleSheetsInstance() {
  try {
    // Parse the service account key from environment variable
    const serviceAccountKey = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'
    )

    // Create JWT client
    const jwtClient = new google.auth.JWT({
      email: serviceAccountKey.client_email,
      key: serviceAccountKey.private_key,
      scopes: SCOPES,
    })

    // Authorize the client
    await jwtClient.authorize()

    // Create Google Sheets instance
    const sheets = google.sheets({ version: 'v4', auth: jwtClient })

    return sheets
  } catch (error) {
    console.error('Error initializing Google Sheets:', error)
    throw new Error('Failed to initialize Google Sheets API')
  }
}

// Format attendee data for Google Sheets - now creates separate rows for each attendee
export function formatAttendeeData(data: RSVPFormData) {
  const timestamp = formatArgentinaTimestamp()
  const rows: string[][] = []

  // Add main attendee as first row
  rows.push([
    timestamp,
    data.mainAttendee.name,
    data.mainAttendee.lastName,
    data.mainAttendee.phoneNumber || '',
    data.specialRequests || '',
    data.mainAttendee.needsTransport ? 'Sí' : 'No',
  ])

  // Add each additional attendee as separate rows
  data.additionalAttendees.forEach((attendee) => {
    rows.push([
      timestamp,
      attendee.name,
      attendee.lastName,
      attendee.phoneNumber || '',
      data.specialRequests || '', // Special requests apply to the whole group
      attendee.needsTransport ? 'Sí' : 'No',
    ])
  })

  return rows
}

// Write RSVP data to Google Sheets
export async function writeRSVPToSheet(data: RSVPFormData) {
  try {
    const sheets = await getGoogleSheetsInstance()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID not configured')
    }

    // Format the data - now returns multiple rows
    const rowsData = formatAttendeeData(data)

    // Append all rows to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Confirmaciones!A:F', // Updated range for new column structure
      valueInputOption: 'RAW',
      requestBody: {
        values: rowsData,
      },
    })

    console.log('Successfully wrote to Google Sheets:', response.data)
    return response.data
  } catch (error) {
    console.error('Error writing to Google Sheets:', error)
    throw new Error('Failed to save RSVP data')
  }
}

// Initialize the Google Sheet with headers (run this once)
export async function initializeSheet() {
  try {
    const sheets = await getGoogleSheetsInstance()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID not configured')
    }

    // Updated headers for the new structure
    const headers = [
      'Fecha y Hora',
      'Nombre',
      'Apellido',
      'Email',
      'Solicitudes Especiales',
      'Transporte',
    ]

    // Check if headers already exist
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Confirmaciones!A1:F1',
    })

    // If no headers exist, add them
    if (!existingData.data.values || existingData.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Confirmaciones!A1:F1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      })
      console.log('Headers initialized in Google Sheet')
    }

    return true
  } catch (error) {
    console.error('Error initializing sheet:', error)
    throw new Error('Failed to initialize Google Sheet')
  }
}
