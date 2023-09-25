import { useState } from "react"

export default function useFormFields(initialState) {
  const [fields, setFields] = useState(initialState)

  return [
    fields,
    (e) => {
      setFields({
        ...fields,
        [e.target.id]: e.target.value,
      })
    },
  ]
}
