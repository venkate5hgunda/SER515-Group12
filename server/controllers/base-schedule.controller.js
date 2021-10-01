const baseScheduleService= require('../services/base-schedule.service')
module.exports = {
    baseSchedule: () => {
    //Validation Request 
    return baseScheduleService.baseSchedule()   
  
    }
}