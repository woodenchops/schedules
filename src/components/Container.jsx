import React, {useContext} from 'react';
import  Schedule from './Schedule';
import {ScheduleContext} from '../context/ScheduleContext';

const Container = () => {

    const {schedules, endSchedule, endAppointment} = useContext(ScheduleContext);

    return ( 
        <>
        <Schedule schedules={schedules} endSchedule={endSchedule} endAppointment={endAppointment} />
        </>
     );
}
 
export default Container;