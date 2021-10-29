import {useDispatch, useSelector} from 'react-redux';
/*import {Field, Form, Formik} from 'formik';
import {setAttributes} from './store/fishSlice';*/

const FishMenu = () => {
  const dispatch = useDispatch()
  const { fish } = useSelector(state => state);


  const handleFindClick = () => {
    console.log(fish);

    dispatch({ type: 'find_spot' });
};

  /* handleFishClick = () => {
      this.setState({ fish: fishAction() });
    };

     <div>
            <button type="button" onClick={this.handleFindClick}>
              Find a nice Spot
            </button>
          </div>
          {this.state.fish && <>Você pescou um {this.state.fish.name} de tamanho {this.state.fish.size}</>}


          <div>
            <button type="button" onClick={this.handleClick}>
              FISH THE FUCKER OUT
            </button>
          </div>
          {this.state.fish && <>Você pescou um {this.state.fish.name} de tamanho {this.state.fish.size}</>}*/
  return (
    <>
      <div>
        <h1>Fish</h1>
      </div>
      <div>
        <button type="button" onClick={handleFindClick}>
          Find a nice Spot
        </button>
      </div>
    </>
  );
};

export default FishMenu;
