'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import RSVPForm from './rsvp-form'

interface RSVPDialogProps {
  children?: React.ReactNode
  triggerText?: string
  triggerClassName?: string
}

export default function RSVPDialog({
  children,
  triggerText = 'Confirmar asistencia',
  triggerClassName,
}: RSVPDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSuccess = () => {
    // Close dialog after successful submission
    setTimeout(() => {
      setIsOpen(false)
    }, 2000) // Give time for success toast to show
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button
            size="lg"
            className={
              triggerClassName ||
              'bg-neutral-700 hover:bg-neutral-800 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl'
            }
          >
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] top-4 p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-serif text-neutral-800 text-center poltawski-nowy">
            Confirmar Asistencia
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-80px)]">
          <div className="px-2">
            <RSVPForm onSuccess={handleSuccess} onCancel={handleCancel} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
