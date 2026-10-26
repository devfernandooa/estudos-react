import { useState } from 'react';

// Recebemos uma prop chamada "onAdicionar" (uma função que vem do App)

function FormularioTarefa({ onAdicionar }) {
    // Estado para controlar o que o usuário digita no input
    const [texto, setTexto] = useState('');


    function handleSubmit(evento) {
        evento.preventDefault();

        // Validação simples, não permite adicionar tarefa vazia
        if(texto.trim === '') return;

        // Chama a função que veio do pai
        onAdicionar(texto);

        // limpa o Input
        setTexto('');

    }


    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
            <input 
                type="text"
                placeholder="O que precisa ser feito."
                value={texto}  // O valor do input é controlado pelo estado
                onChange={(e) => setTexto(e.target.value)}// Atualiza o estado de cada letra digitada 
                style={{ padding:'8px', width: '300px', marginRight: '10px' }}
            />
            <button type='submit' style={{padding: '8px 16px'}}>Adicionar</button>

        </form>
    )
}

export default FormularioTarefa;