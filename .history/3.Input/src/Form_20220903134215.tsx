import {useRecoilState} from 'recoil';
import {colorCounterState, COLORS} from './state'

export const Form = () => {
  const dataset = useMemo(() => convertDatasetMapperIntoDataset(props.datasetMapper), [props.datasetMapper])
	const renderType = props.renderType ?? 2; //"layered";
	return (
		<ul 
			{...dataset}
			style={buildStyle(props)} 
			className={buildCSS(props)} 
			data-render-type={renderType}>
				{props.children}
		</ul>
	);
  };