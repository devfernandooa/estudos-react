
//Recebe duas props: titulo (texto da tarefa) e concluida (boolean)
function Itemtarefa({ titulo, concluida, aoClicar, aoRemover }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '5px 0',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textDecoration: concluida ? 'line-through' : 'none',
            backgroundColor: concluida ? '#f0f0f0' : 'white'
        }}>
            {/* Clicar no texto marca/desmarca */}
            <span
                onClick={aoClicar}
                style={{ cursor: 'pointer', flex: 1 }}
                title="Clique para marcar/desmarcar"
            >
                {titulo}
                {concluida && <span> ✅</span>}
            </span>

            {/* Botão de remover */}
            <button
                onClick={aoRemover}
                style={{ marginLeft: '10px', cursor: 'pointer', background: 'none', border: 'none' }}
                title="Remover tarefa"
            >
                ❌
            </button>
        </div>
    )
}

export default Itemtarefa;