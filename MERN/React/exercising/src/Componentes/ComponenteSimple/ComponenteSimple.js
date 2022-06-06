import React from "react";
import './ComponenteSimple.css';

// const ComponenteSimple = () => {
//     return(
//         <div className="box">
//             <h1>Hola componente</h1>
//         </div>
//     );
// };

// export default ComponenteSimple;

class ComponenteSimple extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: "someState"};
      }
      render() {
        return(
            <div className="box">
                <h1>Hola componente</h1>
            </div>
        );
      }
}

export default ComponenteSimple;