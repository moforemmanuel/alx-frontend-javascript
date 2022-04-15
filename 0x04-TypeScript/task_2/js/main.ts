interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    let instance: Director | Teacher; instance = (typeof salary === 'number' && salary < 500) ? new Teacher() : new Director();
    return instance;
}

// console.log(createEmployee(200));


function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director ? true : false;
}

function executeWork(employee: Teacher | Director): string {
    let message;
    if (employee instanceof Director) {
        message = employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        message = employee.workTeacherTasks();
    } else {
        message = 'Unknown Employee';
    }

    return message;
}

type Subjects = 'Math' | 'History';

function teachClass (todayClass: Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}