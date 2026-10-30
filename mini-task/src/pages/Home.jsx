import './css/home.estilos.css'
function Home() {
  // Correção: Ajustado para usar a sintaxe padrão de quebra de linha <br /> do JSX
  return (

    <section className="section-principal">

      <h1 className='titulo-app'>
        Bem-vindo ao <br /><br /><br />
        <span className='titulo-app--destaque'>Mini-Tasks</span>!
      </h1>
    </section>
  );
}
export default Home;