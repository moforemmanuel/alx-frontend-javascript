namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {

    getRequirements(): string {
      return 'Here is ther list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      let message = this.teacher.experienceTeachingC ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      return message;
    }
  }
}

