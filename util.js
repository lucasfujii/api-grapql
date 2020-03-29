import toMilliseconds from '@sindresorhus/to-milliseconds';

import * as R from 'ramda';

export const convertHourStringToMilisseconds = (dateString) => {
    if (R.isNil(dateString)) return null;

    const parseDate = dateString.split('T');
    const parseHour = R.last(parseDate).split(':');
    
    const milliseconds = toMilliseconds({hours: +parseHour[0], minutes: +parseHour[1]});
    return milliseconds;
  }

 export const isDeleteFeedback = (dateLeft, dateRight) => {
    const timelimit = 300000;

    const dateNow = convertHourStringToMilisseconds(dateLeft);
    const dateFeedback = convertHourStringToMilisseconds(dateRight);

    return result = (dateNow-dateFeedback) < timelimit;    
 } 

 export const setCreateDate = (input) => {
    if(R.isNil(input)) return;
    
    input.createdAt = new Date();
    return {...input};    
 }