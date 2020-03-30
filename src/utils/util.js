import * as R from 'ramda';

 export const setCreateDate = (input) => {
    if(R.isNil(input)) return;
    
    input.createdAt = new Date();
    return {...input};    
 }

 export const isDeleteFeedbacks = (dateNow, dateFeedback) => {
   const timelimit = 300000;

   return result = differenceInMilliseconds(dateNow, parseISO(dateFeedback)) < timelimit;    
 } 