namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      let message = this.teacher.experienceTeachingReact? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      return message;
    }
  }


}