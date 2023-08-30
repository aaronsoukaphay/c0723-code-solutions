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
  business.daysOpen.push('Sat', 'Sun');
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sat', 'Sun');
  }
}

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
  for (const employee in business.employees) {
    if (business.employees[employee].daysOfWeekWorking.length >= 5) {
      business.employees[employee].isFullTime = true;
    } else {
      business.employees[employee].isFullTime = false;
    }
  }
}

function addEmployees() {
  const positions = [
    'Executive Manager',
    'Marketing Manager',
    'Project Manager',
    'Billing',
  ];
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    for (let i = 0; i < 4; i++) {
      const newEmployee = {
        position: positions[i],
        daysOfWeekWorking: generateSchedule(),
      };
      business.employees[xhr.response[i].name] = newEmployee;
    }
    isFullTime();
    console.log('business employees', business.employees);
  });
  xhr.send();
  business.totalEmployees += 4;
}

addEmployees();

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees -= 1;
}

deleteEmployee();

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

function handleDOMContentLoaded() {
  console.log('dom fully loaded');
  addWeekends();
  isFullTime();
}
