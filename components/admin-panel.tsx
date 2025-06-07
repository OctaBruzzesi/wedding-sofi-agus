'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Loader2, Settings, TestTube } from 'lucide-react'

export default function AdminPanel() {
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const [connectionResult, setConnectionResult] = useState<any>(null)

  const testGoogleSheetsConnection = async () => {
    setIsTestingConnection(true)
    setConnectionResult(null)

    try {
      const response = await fetch('/api/test-sheets')
      const result = await response.json()
      setConnectionResult(result)
    } catch (error) {
      setConnectionResult({
        success: false,
        message: 'Network error',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    } finally {
      setIsTestingConnection(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-emerald-800 mb-2 flex items-center justify-center gap-2">
          <Settings className="w-8 h-8" />
          Panel de Administración
        </h1>
        <p className="text-green-700">
          Herramientas para gestionar las confirmaciones de la boda
        </p>
      </div>

      {/* Google Sheets Connection Test */}
      <Card className="border-green-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-2 text-emerald-800">
            <TestTube className="w-5 h-5" />
            Prueba de Conexión Google Sheets
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <p className="text-green-700 mb-4">
            Verifica que la integración con Google Sheets esté funcionando
            correctamente.
          </p>

          <Button
            onClick={testGoogleSheetsConnection}
            disabled={isTestingConnection}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {isTestingConnection ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Probando conexión...
              </>
            ) : (
              <>
                <TestTube className="w-4 h-4 mr-2" />
                Probar Conexión
              </>
            )}
          </Button>

          {connectionResult && (
            <div className="mt-4 p-4 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                {connectionResult.success ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <Badge
                  variant={connectionResult.success ? 'default' : 'destructive'}
                  className={connectionResult.success ? 'bg-green-600' : ''}
                >
                  {connectionResult.success ? 'Éxito' : 'Error'}
                </Badge>
              </div>

              <p className="text-sm text-gray-700 mb-2">
                {connectionResult.message}
              </p>

              {connectionResult.success && connectionResult.sheetId && (
                <p className="text-xs text-gray-500">
                  Sheet ID: {connectionResult.sheetId}
                </p>
              )}

              {connectionResult.error && (
                <p className="text-xs text-red-600 mt-2">
                  Error: {connectionResult.error}
                </p>
              )}

              {connectionResult.missing && (
                <div className="mt-2 text-xs text-red-600">
                  <p>Variables de entorno faltantes:</p>
                  <ul className="list-disc list-inside ml-2">
                    {connectionResult.missing.serviceAccount && (
                      <li>GOOGLE_SERVICE_ACCOUNT_KEY</li>
                    )}
                    {connectionResult.missing.sheetId && (
                      <li>GOOGLE_SHEET_ID</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Setup Instructions */}
      <Card className="border-blue-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50">
          <CardTitle className="text-blue-800">
            Instrucciones de Configuración
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3 text-sm text-blue-700">
            <p>Para completar la configuración:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Instala googleapis:{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  pnpm add googleapis
                </code>
              </li>
              <li>Configura Google Cloud Project y Service Account</li>
              <li>Crea el Google Sheet y compártelo con el service account</li>
              <li>
                Agrega las variables de entorno en{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  .env.local
                </code>
              </li>
              <li>Prueba la conexión usando el botón de arriba</li>
            </ol>
            <p className="mt-4">
              Consulta{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">
                SETUP-GOOGLE-SHEETS.md
              </code>{' '}
              para instrucciones detalladas.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-purple-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-purple-800">Estado del Sistema</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">✅</div>
              <p className="text-sm text-green-700 mt-1">Formulario RSVP</p>
              <p className="text-xs text-green-600">Funcionando</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">🔗</div>
              <p className="text-sm text-blue-700 mt-1">API Endpoints</p>
              <p className="text-xs text-blue-600">Configurados</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">⚙️</div>
              <p className="text-sm text-yellow-700 mt-1">Google Sheets</p>
              <p className="text-xs text-yellow-600">Pendiente configuración</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
