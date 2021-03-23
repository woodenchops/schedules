import React, {useState, createContext} from 'react';

export const ScheduleContext = createContext();


export const ScheduleProvider = ({children}) => {

    const [schedules, setSchedules] = useState([
        {
            id: 1,
            name: 'schedule 1',
            firstAppoitmentId: {
                id: 0,
                date: '2021-06-20'
            },
            appointments: [
                {
                    scheduleId: 1,
                    id: 0,
                    name: 'appointment 1',
                    dateOfAppointment: '2021-06-20'
                },
                {
                    scheduleId: 1,
                    id: 1,
                    name: 'appointment 2',
                    dateOfAppointment: '2021-06-27'
                }
            ]
        },
        {
            id: 2,
            name: 'schedule 2',
            firstAppoitmentId: {
                id: 0,
                date: '2021-07-20'
            },
            appointments: [
                {
                    scheduleId: 2,
                    id: 0,
                    name: 'appointment 1',
                    dateOfAppointment: '2021-07-20'
                },
                {
                    scheduleId: 2,
                    id: 1,
                    name: 'appointment 2',
                    dateOfAppointment: '2021-07-27'
                },
                {
                    scheduleId: 2,
                    id: 2,
                    name: 'appointment 3',
                    dateOfAppointment: '2021-08-04'
                }
            ]
        }
    ]);


const formattedDate = (date) => {
   
    const removedHyohens = date.replace(/-/g, '');
    const parseed = parseInt(removedHyohens);
    console.log(parseed);
    return parseed;
    
}


const endAppointment = (scheduleId, selectedAppointment) => {

       setSchedules((currentSchedule) => {
     
                // filter out which schedule the appointment belongs to

               const filteredSchedules = currentSchedule && currentSchedule.length > 0 && currentSchedule.find(schedule => schedule.id === scheduleId);

               // from the filtered schedule, remove the appointment that was clicked 

               const filteredAppoitments = filteredSchedules && filteredSchedules.appointments.filter(appointment => {
                    return appointment.id !== selectedAppointment.id && appointment;
                });


                /* 
                
                loop through all schedules and update the appointment based on the scheduleId to find the schedule you clicked on.

               return {
                     ...schedule,
                     appointments: schedule.id === scheduleId ? filteredAppoitments : schedule.appointments
              
                    }

                
                    if the id of the current schedule in the loop matches the 'scheduleId' - (the schedule id that you clicked on)
                    - then update the appoitment property on that schedule to 'filteredAppoitments'. ELSE keep the original appointments prop - 'schedule.appointments'

                */

               const updatedSchedules = currentSchedule && currentSchedule.length > 0 && currentSchedule.map(schedule => ({
                     ...schedule,
                     appointments: schedule.id === scheduleId ? filteredAppoitments : schedule.appointments
                }));
                

                // return updated schedules array back to the state.
                return updatedSchedules;
        })

    }


const filterAllAppoitments = (currentSchedule, scheduleId) => {

     return currentSchedule.id !== scheduleId && currentSchedule;        
}


const filterSpecificAppoitments = (currentSchedule, scheduleId, selectedAppointment) => {


        const filteredAppoitments = currentSchedule && currentSchedule.appointments.filter(appointment => {
            return (formattedDate(selectedAppointment.dateOfAppointment) >= formattedDate(appointment.dateOfAppointment)) && appointment;
        });


        const finalFilter = filteredAppoitments && filteredAppoitments.length > 0 ? filteredAppoitments.filter(x => x.id !== selectedAppointment.id ) : [];

        
        const selectedSchedules = {
            ...currentSchedule,
            appointments: currentSchedule.id === scheduleId ? finalFilter : currentSchedule.appointments
        }

       return selectedSchedules;


}


const endSchedule = (scheduleId, selectedAppointment) => {


setSchedules((currentSchedule) => {

    return currentSchedule && currentSchedule.length > 0 && currentSchedule.map(schedule => {

        if(schedule && schedule.firstAppoitmentId.id === selectedAppointment.id) {
           return filterAllAppoitments(schedule, scheduleId);
        } else {
          return filterSpecificAppoitments(schedule, scheduleId, selectedAppointment);
        }

    });


    

 });

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