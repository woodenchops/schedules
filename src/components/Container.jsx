import React, {useContext, useMemo} from 'react';
import  Schedule from './Schedule';
import {ScheduleContext} from '../context/ScheduleContext';

const Container = () => {

    const {schedules, endSchedule, endAppointment} = useContext(ScheduleContext);

    const schedulesMemo = useMemo(() => {
        return schedules;
    }, [schedules])


    return ( 
        <>
        <Schedule schedules={schedulesMemo} endSchedule={endSchedule} endAppointment={endAppointment} />
        </>
     );
}
 
export default Container;