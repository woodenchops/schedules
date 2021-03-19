import React, {useState, createContext} from 'react';

export const ScheduleContext = createContext();


export const ScheduleProvider = ({children}) => {

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            name: 'schedule 1',
            appointments: [
                {
                    scheduleId: 1,
                    id: 98989999,
                    name: 'appointment 1',
                },
                {
                    scheduleId: 1,
                    id: 87866665655,
                    name: 'appointment 2',
                }
            ]
        },
        {
            id: 2,
            name: 'schedule 2',
            appointments: [
                {
                    scheduleId: 2,
                    id: 9098097777777,
                    name: 'appointment 1',
                },
                {
                    scheduleId: 2,
                    id: 9098097798888,
                    name: 'appointment 2',
                },
                {
                    scheduleId: 2,
                    id: 90980911117,
                    name: 'appointment 3',
                }
            ]
        }
    ]);


const endAppointment = (scheduleId, appointmentId) => {

       setSchedules((currentSchedule) => {
     
               const filteredSchedules = currentSchedule.find(s => s.id === scheduleId);

               const filteredAppoitments = filteredSchedules.appointments.filter(a => {
                    return a.id !== appointmentId && a;
                });


                const updatedSchedules = currentSchedule.map(x => {
                    return {
                     ...x,
                     appointments: x.id === scheduleId ? filteredAppoitments : x.appointments
              
                    }
                })
                
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