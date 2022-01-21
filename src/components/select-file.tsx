import { ChangeEvent, useRef } from 'react'

interface IProps {
  onFile(file: File): void
}

const SelectFile = (props: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!inputRef || !event || !event.target || !event.target.files) return
    Array.from(event.target.files).forEach(file => props.onFile(file))
  }

  return (
    <>
      <input ref={fileInputRef} multiple type="file" onChange={onChange}/>
    </>
  )
}

export default SelectFile
