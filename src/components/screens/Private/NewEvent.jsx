import { useState } from 'react';
import { Input } from '../../elements/Forms/input';
import { Label } from '../../elements/Forms/labels';
import { Wrapper } from '../../elements/wrappers/form-wrapper';

const NewEvent = () => {
    const [data, setData] = useState({
        ename: '',
        date: '',
        starttime: '',
        location: '',
        distance: '',
        duration: '',
    });

    const { ename, date, starttime, location, distance, duraction } = data;
    const handleSubmit = () => {

    };

    return (
        <div>
            <h2>New Event</h2>
            <form
                method='post'
                className='newEvent'
                onSubmit={handleSubmit}>
                <Wrapper>
                    <Label
                        text='Event Name:'
                        label='eventName'
                    />
                    <Input
                        type='text'
                        id='eventName'
                        name='eventName'
                        autoComplete='off'
                        onChange={(e) => setData({
                            ...data,
                            ename: e.target.value
                        })}
                        value={ename}
                        required
                    />
                </Wrapper>
            </form>
        </div>
    );
};

export default NewEvent;
