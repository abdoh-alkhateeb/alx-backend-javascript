namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
  };

  console.log('C++');
  cpp.setTeacher(cTeacher);
  cpp.getRequirements();
  cpp.getAvailableTeacher();

  console.log('Java');
  java.setTeacher(cTeacher);
  java.getRequirements();
  java.getAvailableTeacher();

  console.log('React');
  react.setTeacher(cTeacher);
  react.getRequirements();
  react.getAvailableTeacher();
}
