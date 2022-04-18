
/// <reference path='./subjects/Subject.ts' />

namespace Subjects {

  export const cTeacher: Teacher = {
    firstName: 'Mofor',
    lastName: 'Emmanuel',
    experienceTeachingC: 10
  };
  export const cpp = new Cpp(cTeacher);
  console.log('C++');
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  export const java = new Java(cTeacher);
  console.log('Java');
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  export const react = new React(cTeacher);
  console.log('React');
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
}