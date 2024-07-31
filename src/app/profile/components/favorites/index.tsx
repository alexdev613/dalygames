import { FiEdit, FiX } from 'react-icons/fi';

export function FavoriteCard() {
  return (
    <div className="w-full bg-gray-800 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      <button className='self-start hover:scale-110 duration-300 transition-all'>
        <FiEdit size={24} color='#FFF' />
      </button>

      <p className='font-bold text-white'>Adicionar jogo</p>
    </div>
  )
}