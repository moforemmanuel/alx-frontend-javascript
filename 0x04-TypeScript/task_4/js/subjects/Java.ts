namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      let message = this.teacher.experienceTeachingJava? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      return message;
    }
  }


}