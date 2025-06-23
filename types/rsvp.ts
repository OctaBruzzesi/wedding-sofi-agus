export interface Attendee {
  name: string
  lastName: string
  phoneNumber?: string
  needsTransport: boolean
}

export interface RSVPFormData {
  mainAttendee: Attendee
  additionalAttendees: Attendee[]
  totalAttendees: number
  specialRequests?: string
}

export interface RSVPSubmissionResponse {
  success: boolean
  message: string
  data?: RSVPFormData
}
