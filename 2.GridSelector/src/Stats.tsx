import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'

export const Stats = () => {
    const [colorCounter, setColorCounter] = useRecoilState(colorCounterState);
    const setColor = () => {
        setColorCounter({});
    };
    return (
      <>
        <div className="stats">
          <div>White: {colorCounter[COLORS.WHITE]}</div>
          <div>Red: {colorCounter[COLORS.RED]}</div>
          <div>Blue: {colorCounter[COLORS.BLUE]}</div>
        </div>
        <div>
          <button onClick={setColor}>Reset</button>
        </div>
      </>
    );
  };