import React, { forwardRef, InputHTMLAttributes, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { twMerge } from 'tailwind-merge'

export interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  labal: string
  error?: string
  className?: {
    container?: string
    input?: string
    label?: string
    error?: string
  }
  showClear?: boolean
  onClear?: () => void
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({
  labal,
  error,
  className,
  value,
  onChange,
  onClear,
  showClear = true,
  type = 'text',
  required = false,
  disabled = false,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onClear) {
      onClear()
    } else if (onChange) {
      const event = {
        target: {
          value: ''
        }
      } as React.ChangeEvent<HTMLInputElement>
      onChange(event)
    }
  }

  const containerClasses = twMerge(
    'relative',
    className?.container
  )

  const inputClasses = twMerge(
    'block rounded-lg px-2.5 pb-2 pt-5 w-full text-sm text-black border',
    'transition-colors duration-200',
    'hover:bg-lightGray/20 border-lightGray',
    'appearance-none focus:outline-none focus:ring-0',
    'focus:border-primary disabled:bg-gray-100 disabled:cursor-not-allowed',
    error && 'border-red-500 focus:border-red-500',
    className?.input
  )

  const labelClasses = twMerge(
    'absolute text-sm duration-200 transform -translate-y-4 scale-75',
    'top-4 z-10 origin-[0] start-2.5',
    'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0',
    'peer-focus:scale-75 peer-focus:-translate-y-4',
    isFocused ? 'text-primary' : 'text-gray-500',
    error && 'text-red-500',
    disabled && 'text-gray-400',
    className?.label
  )

  const errorClasses = twMerge(
    'text-red-500 text-sm mt-1',
    className?.error
  )

  return (
    <div className={containerClasses}>
      <input
        ref={ref}
        id={labal}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={inputClasses}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${labal}-error` : undefined}
        {...props}
      />
      <label
        htmlFor={labal}
        className={labelClasses}
      >
        {labal}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {showClear && value && typeof value === 'string' && value.trim().length > 0 && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute z-10 top-1/4 right-2 w-6 h-6 hover:bg-lightGray/20 
                   border border-gray-300 rounded-full flex items-center justify-center 
                   text-sm text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Clear input"
        >
          <IoClose />
        </button>
      )}

      {error && (
        <p
          className={errorClasses}
          id={`${labal}-error`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
})

CustomInput.displayName = 'CustomInput'

export default CustomInput