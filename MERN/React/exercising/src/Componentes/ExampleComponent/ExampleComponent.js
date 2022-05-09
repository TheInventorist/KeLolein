import { Link } from 'react-router-dom';
import './ExampleComponent.css'

const ExampleComponent = props => {
    return(
        <div>
        {
            props.info.map((item) => {
                return(
                    <h2 key={item.id}>{item.name}</h2>
                );
            })
        }
        <Link to="/about" component={<h2>asd</h2>}>About</Link>
        </div>
    );
}

export default ExampleComponent;