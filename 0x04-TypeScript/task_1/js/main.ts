interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean,
};

interface Directors extends Teacher {
    numberOfReports: number
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;

printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}


class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    workOnHomework(): string {
        return 'Currenctly working';
    }

    displayName(): string {
        return this.firstName;
    }
}


interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}