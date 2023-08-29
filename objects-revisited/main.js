const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    shawn: {
      position: 'CEO',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    aaron: {
      position: 'Accountant',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    dennis: {
      position: 'Receptionist',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    marshall: {
      position: 'Manager',
      daysOfWeekWorking: ['W', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  const { daysOpen } = business;
  daysOpen.push('Sat', 'Sun');
  const { employees } = business;
  employees.shawn.daysOfWeekWorking.push('Sat', 'Sun');
  employees.aaron.daysOfWeekWorking.push('Sat', 'Sun');
  employees.dennis.daysOfWeekWorking.push('Sat', 'Sun');
  employees.marshall.daysOfWeekWorking.push('Sat', 'Sun');
}

addWeekends();
console.log('addWeekends:', business);

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    console.log('Days Open', business.daysOpen);

    // for (let i = 0; i < 4; i++) {
    //   business.employees = robert;
    // }

    function generateSchedule() {
      const schedule = [];
      const randomNumberOfDays = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < randomNumberOfDays; i++) {
        const randomWeekdayIndex = Math.floor(Math.random() * 5);
        if (i === 0) {
          schedule.push(business.daysOpen[randomWeekdayIndex]);
        } else if (!schedule.includes(business.daysOpen[randomWeekdayIndex]))
          schedule.push(business.daysOpen[randomWeekdayIndex]);
      }
      schedule.push(business.daysOpen[5]);
      schedule.push(business.daysOpen[6]);
      return schedule;
    }
    // console.log('Schedule generated:', generateSchedule())

    // function isFullTime(schedule){
    //   return schedule.length
    // }

    business.employees[xhr.response[0].name] = {
      position: 'Clerk',
      daysOfWeekWorking: generateSchedule(),
    };
    business.employees[xhr.response[1].name] = {
      position: 'Marketing Manager',
      daysOfWeekWorking: generateSchedule(),
    };
    business.employees[xhr.response[2].name] = {
      position: 'Admin Assistant',
      daysOfWeekWorking: generateSchedule(),
    };
    business.employees[xhr.response[3].name] = {
      position: 'Product Manager',
      daysOfWeekWorking: generateSchedule(),
    };
    console.log(business.employees);
  });
  xhr.send();
}

addEmployees();
