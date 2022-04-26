import './App.css';
// import ContenedorSimple from './Componentes/ComponenteSimple/ComponenteSimple';
// import Componente02 from './Componentes/Componente02/Componente02';
import Table01 from './Componentes/Table01/Table01';

function App() {

  const tableContent = [
    {id:'0', detaill:'Comida de perro', price:'15.000', state:'Entregado'},
    {id:'1', detaill:'Tocomples', price:'23.000', state:'Entregado'},
    {id:'2', detaill:'Agua mineral', price:'6.000', state:'En camino'},
    {id:'3', detaill:'Centella', price:'99.999', state:'Subastado'},
    {id:'4', detaill:'Chocolate de oro', price:'20.000', state:'Entregado'},
  ];

  return (
    <div>
      {/* <ContenedorSimple/>
      <Componente02/> */}
      {/* <div>
        {Array(4).fill(<Componente02/>)}
      </div> */}
      <Table01 content={tableContent}/>
    </div>
  );
}

export default App;
