import { Languages } from '@/components/languages'
import { Logo } from '@/app/sections/home'
import { navData } from '@/routes'

export function Navbar() {
  return (
    <nav className=" grid grid-cols-[auto_1fr_auto] gap-6 text-lg  font-medium items-center  px-4 z-10 sticky top-0
    left-0 p-2  blur-10 h-[80px]  ">
      <Logo />
      <ul className="flex-1 gap-6  flex justify-end ">
        {navData.map((item) => (
          <li key={item.id} className="nav_item ">
            {item.label}
          </li>
        ))}
      </ul>
      <Languages />
    </nav>
  )
}