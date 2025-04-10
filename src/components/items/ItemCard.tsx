import { Vinilo } from "../../types/Vinilo";
import cartAdd from "../../assets/icons/cart_add.svg"

interface ItemCardProps {
  item: Vinilo
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="w-full group">
      <div className="w-9/10 mx-auto">
        <img
          src={`/vinilos/covers/${item.albumImg}`}
          alt={item.album}
          className="w-full rounded group-hover:rotate-2 duration-100"
          id="item_card_image"
        />
      </div>
      <a href="#" className="block mt-3 text-center font-semibold text-xl duration-100">
        {item.album}
      </a>
      <div className="mt-1 flex justify-center items-center gap-x-5">
        <span className="text-green-600 font-bold text-lg">
          S/{item.precio.toFixed(2)}
        </span>
        <button className="p-1 rounded-full cursor-pointer bg-orange-500/60 hover:bg-orange-500">
          <img
            src={cartAdd}
            alt="Agregar al carrito"
            className="w-5"
          />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;