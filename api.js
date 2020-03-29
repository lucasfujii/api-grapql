import { RESTDataSource } from 'apollo-datasource-rest';

export class RestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/';
  }
           
  async getCollaborators() {
    const url = `/collaborator`;
    return await this.get(url);
  }

  async getCollaborator(collaboratorId){
    const url = `/collaborator/${collaboratorId}`;
    return await this.get(url);
  }

  async getFeedbackForCollaborator(collaboratorId){
    const url = `/collaborator/${collaboratorId}/feedback`;
    return await this.get(url);
  }

  async createFeedback(collaboratorId, input) {
    const url = `/collaborator/${collaboratorId}/feedback`;
    return this.post(url, JSON.stringify(input), {
      headers: {
        'Content-Type': 'application/json',
      },
    });  
  }

  async incrementLikeForFeedback(collaboratorId, feedbackId, input) {
    const url = `/collaborator/${collaboratorId}/feedback/${feedbackId}`;
    return this.put(url, JSON.stringify(input), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async deleteFeedback(collaboratorId, feedbackId) {
    return this.delete(`/collaborator/${collaboratorId}/feedback/${feedbackId}`);
  }

}