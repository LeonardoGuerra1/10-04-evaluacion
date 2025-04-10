import cartIcon from "../../assets/icons/cart_filled.svg"
import searchIcon from "../../assets/icons/search.svg"

const items = [
  {
    id: 1,
    label: "Recién llegado",
  },
  {
    id: 2,
    label: "Los más vendidos",
  },
  {
    id: 3,
    label: "Los más buscados",
  },
  {
    id: 4,
    label: "Ofertas",
  },
  {
    id: 5,
    label: "Géneros",
  },
  {
    id: 6,
    label: "Nosotros",
  },
]

function Navbar() {
  return (
    <div className="w-full bg-red-600 text-white">
      <div className="max-w-page mx-auto flex justify-between items-center py-1">
        <nav>
          <ul className="w-full flex justify-start items-center gap-x-5">
            {items.map(item => (
              <li key={item.id}>
                <a href="#" className="block py-2 px-3 font-medium rounded hover:text-yellow-300 hover:bg-white/20 duration-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-x-3">
          <div className="flex justify-center items-center gap-x-1">
            <button className="cursor-pointer w-6">
              <img
                src={searchIcon}
                alt="Cart"
                className="w-full"
              />
            </button>
            <input
              className="px-3 py-1 outline-0 rounded focus:bg-white/30 duration-100"
              type="search"
              placeholder="Buscar..."
            />
          </div>
          <button className="cursor-pointer w-6">
            <img
              src={cartIcon}
              alt="Cart"
              className="w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;