
//Recebe duas props: titulo (texto da tarefa) e concluida (boolean)
function Itemtarefa({titulo, concluida}){
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '5px 0',
            borderRadius: '4px',
            //Se concluida for true, aplica line-through (riscado) e fundo cinza.
            textDecoration: concluida ? 'line-through' : 'none',
            backgroundColor: concluida ? '#f0f0f0' : 'white'
        }}>
            {/**
             * Usa renderização condicional ({concluida && <span>✅</span>}) 
             * para mostrar o check só quando concluída.
             */}
            <span>
                {titulo}
                {concluida && <span> ✅</span>}
            </span>
        </div>
    )
}

export default Itemtarefa;