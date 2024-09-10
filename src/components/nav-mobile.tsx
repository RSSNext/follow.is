import { Menu, X } from 'lucide-react'
import Link from 'next/link'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { siteInfo } from '@/constants'

export function NavMobile() {
  return (
    <Popover>
      <PopoverTrigger className="md:hidden group">
        <X className="hidden group-data-[state='open']:block" />
        <Menu className="group-data-[state='open']:hidden" />
      </PopoverTrigger>
      <PopoverContent
        className="md:hidden w-[calc(100vw-2rem)] -translate-x-2 shadow-sm"
        sideOffset={36}
      >
        {siteInfo.headerNav.map(navItem => (
          <Link
            key={navItem.href}
            href={navItem.href}
            className="block py-2 px-4 text-lg font-semibold"
          >
            {navItem.title}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  )
}
