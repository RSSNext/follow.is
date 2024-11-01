import * as React from 'react'

export function PowerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1.57-9.282H8.706a.646.646 0 0 1-.485-1.07l4.22-4.793c.39-.446 1.125-.168 1.125.423v4.013h1.723c.557 0 .853.653.485 1.07l-4.22 4.794c-.39.446-1.126.168-1.126-.423v-4.014Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
