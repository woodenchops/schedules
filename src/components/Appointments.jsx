import React from 'react';

const Appointment = ({appointments, endSchedule, endAppointment, scheduleId}) => {
    return ( 
        <>
         {appointments && appointments.length > 0 && appointments.map(appointment => (
            <div key={appointment.id} className="row">
                <span>{appointment.name}</span>
                <button onClick={() => endAppointment(scheduleId, appointment)}>End appointment</button>
                <button onClick={() => endSchedule(scheduleId, appointment)}>End schedule</button><br></br>
            </div>
        ))}
        </>
     );
}
 
export default Appointment;