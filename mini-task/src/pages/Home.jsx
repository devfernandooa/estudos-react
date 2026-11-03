import Botao from '../components/ui/Botao';
import imagemHome from '../img/2151255098.jpg'; // Ajuste o nome exato do seu arquivo
function Home() {
  // Correção: Ajustado para usar a sintaxe padrão de quebra de linha <br /> do JSX
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">

      {/* Imagem */}
      <img
        src={imagemHome}
        alt="Ilustração Mini-Tasks"
        className="w-64 h-64 object-cover rounded-full shadow-lg mb-8 border-4 border-white"
      />

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Organize sua vida com o <span className="text-blue-600">Mini-Tasks</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        O seu gerenciador de tarefas simples, rápido e seguro.
        Faça login para começar a organizar o seu dia.
      </p>

      {/* Botão de Call to Action (Ação) */}
      <div className="flex gap-4">
        {/* Use o Link do React Router disfarçado de Botão, ou o seu componente Botao com onClick */}
        <Botao variant="primario" onClick={() => window.location.href = '/tarefas'}>
          Ir para Minhas Tarefas
        </Botao>
      </div>

    </div>
  );
}
export default Home;