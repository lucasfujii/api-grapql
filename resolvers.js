import * as R from 'ramda';
import { isDeleteFeedback, setCreateDate } from './util';

export default {
  Query: {
    getCollaborators: async (_source, _args, { dataSources: { restApi } }) => {
      return await restApi.getCollaborators();
    },
    getCollaborator: async (_source, { collaboratorId }, { dataSources: { restApi } }) => {
      const data = await restApi.getCollaborator(collaboratorId);
      if(R.isNil(data)) return;
      const colaborator = [];
      colaborator.push(data);
      return colaborator;
    },
    getFeedbackForCollaborator: async (_source, { collaboratorId }, { dataSources: { restApi } }) => {
      return await restApi.getFeedbackForCollaborator(collaboratorId);
    }
  }, 
   
  Mutation: {
    createFeedback: async (_source, { collaboratorId, input }, { dataSources: { restApi } }) => {
      return await restApi.createFeedback(collaboratorId, setCreateDate(input));
    },
    incrementLikeForFeedback: async (_source, { collaboratorId, feedbackId, input }, { dataSources: { restApi } }) => {
      return await restApi.incrementLikeForFeedback(collaboratorId,feedbackId,input);
    },
    deleteFeedback:  async (_source, { collaboratorId, feedbackId, dateFeedback }, { dataSources: { restApi } }) => {
      if(!isDeleteFeedback(new Date(), dateFeedback)) return;
      
      return await restApi.deleteFeedback(collaboratorId, feedbackId);
    }
  }
};