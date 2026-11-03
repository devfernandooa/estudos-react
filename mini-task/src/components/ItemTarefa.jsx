
//Recebe duas props: titulo (texto da tarefa) e concluida (boolean)
function Itemtarefa({ titulo, concluida, aoClicar, aoRemover }) {
    return (
        <div className='flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm'
        >
            {/* Clicar no texto marca/desmarca */}
            < span
                onClick={aoClicar}
                className="cursor-pointer flex-1 text-gray-800"
                title="Clique para marcar/desmarcar"
            >
                {titulo}
                {concluida && <span> ✅</span>}
            </span >

            {/* Botão de remover */}
            < button
                onClick={aoRemover}
                className="text-red-500 hover:text-red-700 transition-colors ml-4 text-lg bg-transparent border-none cursor-pointer"
                title="Remover tarefa"
            >
                ❌
            </button >
        </div >
    )
}

export default Itemtarefa;