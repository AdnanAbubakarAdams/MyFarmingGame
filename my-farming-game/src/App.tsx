// classes from utils
import Field from './utils/Field';

// components
import FieldTile from './components//FieldTile/FieldTile';

// Css
import './App.css';
import FieldLegend from "./components/FieldLegend/FieldLegend";

const field = new Field();

function App() {
  return (
    <div className="App">
      <div className="field">
        {field.tiles.map(fieldRow => {
          return (<div className="field__row">
            {fieldRow.map(tile => {
              return <FieldTile tile={tile} />
            })}
          </div>)
        })}
      </div>
      <div className='legend'>
        <FieldLegend />
      </div>
    </div>
  );
}

export default App;
