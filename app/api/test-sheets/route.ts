import { NextResponse } from 'next/server'
import { initializeSheet } from '@/lib/google-sheets'

export async function GET() {
  try {
    // Check if environment variables are configured
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Environment variables not configured',
          missing: {
            serviceAccount: !process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
            sheetId: !process.env.GOOGLE_SHEET_ID,
          },
        },
        { status: 500 }
      )
    }

    // Test the Google Sheets connection
    await initializeSheet()

    return NextResponse.json({
      success: true,
      message: 'Google Sheets connection successful!',
      timestamp: new Date().toISOString(),
      sheetId: process.env.GOOGLE_SHEET_ID?.substring(0, 10) + '...', // Show partial ID for security
    })
  } catch (error) {
    console.error('Google Sheets test error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Google Sheets connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function POST() {
  return NextResponse.json(
    { message: 'Use GET method to test connection' },
    { status: 405 }
  )
}
