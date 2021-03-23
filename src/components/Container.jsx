import React, {useContext} from 'react';
import  Schedule from './Schedule';
import {ScheduleContext} from '../context/ScheduleContext';

const Container = () => {

    const {schedulesMemo, endSchedule, endAppointment} = useContext(ScheduleContext);

    return ( 
        <>
        <Schedule schedules={schedulesMemo} endSchedule={endSchedule} endAppointment={endAppointment} />
        </>
     );
}
 
export default Container;