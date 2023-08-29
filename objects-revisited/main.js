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
    const positions = [
      'Executive Manager',
      'Marketing Manager',
      'Project Manager',
      'Billing',
    ];

    for (let i = 0; i < 4; i++) {
      const newSchedule = generateSchedule();
      business.employees[xhr.response[i].name] = {
        position: positions[i],
        daysOfWeekWorking: newSchedule,
        isFullTime: isFullTime(newSchedule),
      };
    }
    console.log('business employees', business.employees);

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

    function isFullTime(schedule) {
      return schedule.length >= 5;
    }

    business.totalEmployees += 4;
  });
  xhr.send();
}

addEmployees();

// function deleteEmployee(employeeName) {
//   delete business.employees.employeeName
// }
