interface ErrorMessagesProps {
  errors: Record<string, any>
}

export default function ErrorMessages({ errors }: ErrorMessagesProps) {
  return (
    <>
      {Object.values(errors).map((error, i) => (
        <p key={i} className="text-xs text-red-600">
          *{error.message}
        </p>
      ))}
    </>
  )
}
