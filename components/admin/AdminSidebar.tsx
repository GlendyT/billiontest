import Logo from "../ui/Logo"
import AdminRoute from "./AdminRoute"

const adminNavigation = [
  {url: '/admin/products', text: 'Productos', blank: false},
  {url: '/song/bts', text: 'Ver Quiosco', blank: true},
]

export default function AdminSidebar() {

  return (
      <>
      <Logo/>
          <div className="space-y-3 ">
              <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
              <nav className="flex flex-col">
                  {adminNavigation.map(link => (
                    <AdminRoute
                     key={link.url}
                     link={link}
                    />
                  ))}
              </nav>
          </div>
      </>

  )
}