'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { IoImageOutline } from 'react-icons/io5'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  allowMultiple?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      type,
      allowMultiple,
      value,
      defaultValue,
      label,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const safeValue =
      (value || defaultValue) !== undefined && type !== 'file'
        ? (value || defaultValue) ?? ''
        : ''

    const multipleAttr =
      type === 'file' ? { multiple: allowMultiple || false } : {}

    const inputId = React.useId()

    const localInputRef = React.useRef<HTMLInputElement>(null)

    const triggerClick = () => {
      localInputRef.current?.click()
    }

    return (
      <div className="relative w-full">
        {/* For non-file inputs */}
        {type !== 'file' && (
          <>
            {leftIcon && (
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                {leftIcon}
              </span>
            )}
            <input
              type={type === 'password' ? (show ? 'text' : 'password') : type}
              placeholder=" "
              className={cn(
                'flex peer h-14 w-full border-b border-borderColor px-3 pt-4 pb-2 text-sm placeholder:text-muted-foreground outline-none focus:outline-primary disabled:cursor-not-allowed disabled:opacity-50',
                leftIcon && 'pl-8',
                rightIcon && 'pr-12',
                className
              )}
              ref={ref}
              {...(safeValue !== undefined ? { value: safeValue } : {})}
              {...multipleAttr}
              {...props}
            />
            {(type === 'password' || rightIcon) && (
              <span className="absolute inset-y-0 right-0 flex items-center">
                {type === 'password' && !rightIcon && (
                  <Button
                    aria-label="toggle show password"
                    onClick={handleClick}
                    size="sm"
                    type="button"
                    variant="unstyled"
                    className="text-primary"
                  >
                    {show ? (
                      <IoMdEye className="h-6 w-6" />
                    ) : (
                      <IoMdEyeOff className="h-6 w-6" />
                    )}
                  </Button>
                )}
                {rightIcon}
              </span>
            )}
          </>
        )}

        {/* For file inputs */}
        {type === 'file' && (
          <>
            {/* Hidden input */}
            <input
              id={inputId}
              type="file"
              ref={localInputRef} // 👈 Use a local ref to manually trigger
              className="hidden"
              {...multipleAttr}
              {...props}
            />

            {/* Custom upload box
            <div
              onClick={triggerClick} // 👈 Clicking this triggers hidden input
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer border-borderColor bg-[#99D3B6] hover:bg-[#87c1a4] transition-colors"
            >
              <div className="flex flex-col items-center justify-center">
                <IoImageOutline className="w-10 h-10 text-white" />
                <p className="text-sm font-bold mt-5 text-white">
                  Select your file
                </p>
              </div>
            </div> */}
          </>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
