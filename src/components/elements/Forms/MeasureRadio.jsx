import RadioWrapper from '../wrappers/radio-wrapper';
import { GenLabel } from './labels';

// eslint-disable-next-line react/prop-types
const MeasureRadio = ({ data, setData }) => {
    return (
        <RadioWrapper
            label='Select how the event is measured'
        >
            <input
                type='radio'
                id='miles'
                name='measurement'
                value='miles'
                onClick={() => setData({
                    ...data,
                    measurement: 'mi'
                })}
            />
            <GenLabel label='miles' text='mi' />

            <input
                type='radio'
                id='kilometers'
                name='measurement'
                value='kilometers'
                onClick={() => setData({
                    ...data,
                    measurement: 'km'
                })}
            />
            <GenLabel label='kilometers' text='km' />
        </RadioWrapper>
    );
};

export default MeasureRadio;
