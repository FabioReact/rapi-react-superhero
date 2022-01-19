import React, { useState } from 'react'
import Button from './Button'

type Props = {
  title: string
  inputId: string
  label: string
  textButton: string
  onSubmitCallback: (data?: any) => void
}

const SearchCard = ({
  title,
  inputId,
  label,
  onSubmitCallback,
  textButton,
}: Props) => {
  const [searchHero, setSearchHero] = useState('')

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    onSubmitCallback(searchHero)
  }

  return (
    <form onSubmit={onSubmitHandler} className="text-center">
      <p className="text-2xl font-thin mb-2">{title}</p>
      <label htmlFor={inputId}>{label}</label>
      <input
        onChange={(e) => setSearchHero(e.target.value)}
        value={searchHero}
        className="border border-gray-300 rounded mb-2 px-2"
        type="text"
        id={inputId}
      />
      <Button>{textButton}</Button>
    </form>
  )
}

export default SearchCard
