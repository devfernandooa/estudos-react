import { useState } from 'react';
import Botao from './ui/Botao';

// Recebemos uma prop chamada "onAdicionar" (uma função que vem do App)

function FormularioTarefa({ onAdicionar }) {
    // Estado para controlar o que o usuário digita no input
    const [texto, setTexto] = useState('');


    function handleSubmit(evento) {
        evento.preventDefault();

        // Validação simples, não permite adicionar tarefa vazia
        if (texto.trim() === '') return;

        // Chama a função que veio do pai
        onAdicionar(texto);

        // limpa o Input
        setTexto('');

    }


    return (
        <form className='flex gap-2 mb-6' onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                placeholder="O que precisa ser feito."
                value={texto}  // O valor do input é controlado pelo estado
                onChange={(e) => setTexto(e.target.value)}// Atualiza o estado de cada letra digitada 

            />
            <Botao variant="primario" type="submit">
                Adicionar
            </Botao>

        </form>
    )
}

export default FormularioTarefa;