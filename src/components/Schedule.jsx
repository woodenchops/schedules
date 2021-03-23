import React from 'react';
import PropTypes from 'prop-types';
import  Appointment from './Appointments';

const Schedule = ({schedules, endSchedule, endAppointment}) => {
    return ( 
        <>

        {schedules && schedules.length > 0 && schedules.map(schedule => (
            
            schedule.appointments && schedule.appointments.length > 0 && (
                    <div key={schedule.id} className="schedule_wrapper">
                        <h2>{schedule.name}</h2>
                        <Appointment appointments={schedule.appointments} endSchedule={endSchedule} endAppointment={endAppointment} scheduleId={schedule.id}/>
                    </div>
                )
            
        ))}

        </>
     );
}

Schedule.propTypes = {
    schedules: PropTypes.object.isRequired,
    endSchedule: PropTypes.func.isRequired,
    endAppointment: PropTypes.func.isRequired,
  };
 
export default Schedule;