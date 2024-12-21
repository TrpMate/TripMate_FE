import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface FormFieldGroupProps {
  name: string
  label: string
  placeholder?: string
  type?: string
  field: any
}

export default function FormFieldGroup({
  name,
  label,
  placeholder,
  type = 'text',
  field,
}: FormFieldGroupProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input type={type} {...field} placeholder={placeholder} />
      </FormControl>
    </FormItem>
  )
}
