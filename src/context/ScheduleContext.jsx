import React, {useState, createContext} from 'react';

export const ScheduleContext = createContext();


export const ScheduleProvider = ({children}) => {

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            name: 'schedule 1',
            firstAppoitmentId: 1,
            appointments: [
                {
                    scheduleId: 1,
                    id: 1,
                    name: 'appointment 1',
                },
                {
                    scheduleId: 1,
                    id: 2,
                    name: 'appointment 2',
                }
            ]
        },
        {
            id: 2,
            name: 'schedule 2',
            firstAppoitmentId: 1,
            appointments: [
                {
                    scheduleId: 2,
                    id: 1,
                    name: 'appointment 1',
                },
                {
                    scheduleId: 2,
                    id: 2,
                    name: 'appointment 2',
                },
                {
                    scheduleId: 2,
                    id: 3,
                    name: 'appointment 3',
                }
            ]
        }
    ]);


const endAppointment = (scheduleId, appointmentId) => {

       setSchedules((currentSchedule) => {
     
                // filter out which schedule the appointment belongs to

               const filteredSchedules = currentSchedule.find(s => s.id === scheduleId);

               // from the filtered schedule, remove the appointment that was clicked 

               const filteredAppoitments = filteredSchedules.appointments.filter(a => {
                    return a.id !== appointmentId && a;
                });


                /* 
                
                loop through all schedules and update the appointment based on the scheduleId to find the schedule you clicked on.

               return {
                     ...schedule,
                     appointments: schedule.id === scheduleId ? filteredAppoitments : schedule.appointments
              
                    }

                
                    if the id of the current schedule in the loop matches the scheduleId - (the schedule id that you clicked on)
                    - then update the appoitment property on that schedule to filteredAppoitments. ELSE keep the original appointments prop - schedule.appointments

                */

               const updatedSchedules = currentSchedule.map(schedule => {
                    return {
                     ...schedule,
                     appointments: schedule.id === scheduleId ? filteredAppoitments : schedule.appointments
              
                    }
                });
                

                // return updated schedules array back to the state.
                return updatedSchedules;
        })

    }

const endSchedule = (id) => {

setSchedules((currentSchedule) => {

     return currentSchedule.filter((schedule) => {

         return schedule.id !== id && schedule;
         
     });
 })

}


    const scheduleState = {
        schedules,
        endSchedule,
        endAppointment
    }

    return ( 
        <ScheduleContext.Provider value={scheduleState}>
            {children}
        </ScheduleContext.Provider>
     );
}
 
export default ScheduleProvider;