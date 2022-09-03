import {useRecoilState, useRecoilValue} from 'recoil';
import {boxState, colorState,BOX_NUM,  COLORS} from './state'

// components
export const Box = ({ id }:any) => {
    const [box, setBox] = useRecoilState(boxState(id));
    const color = useRecoilValue(colorState);
    const setColor = () => {
      setBox(color);
    };
    return <div className="box" style={{ background: box }} onClick={setColor} />;
  };
  
export const Grid = () => {
    let boxes:JSX.Element[] = [];
    for (let i = 0; i < BOX_NUM; i++) {
      boxes.push(<Box key={i} className="box" id={i} />);
    }
    return (
      <>
        <h2>Press on boxes to color:</h2>
        <div className="grid">{boxes}</div>
      </>
    );
  };