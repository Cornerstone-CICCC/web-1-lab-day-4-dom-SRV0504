const form = document.querySelector('form');
const employeeList = document.getElementById('employeeList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const hireDate = document.getElementById('hire_date').value;
  const photo = document.getElementById('photo').files[0];

  const row = document.createElement('tr');

  const img = document.createElement('img');
  img.src = URL.createObjectURL(photo);
  img.alt = 'Photo';
  img.width = 50;
  const tdPhoto = document.createElement('td');
  tdPhoto.appendChild(img);

  const tdFirst = document.createElement('td');
  tdFirst.textContent = firstName;

  const tdLast = document.createElement('td');
  tdLast.textContent = lastName;

  const tdEmail = document.createElement('td');
  tdEmail.textContent = email;

  const tdDate = document.createElement('td');
  tdDate.textContent = hireDate;

  const tdActions = document.createElement('td');
  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.onclick = function () {
    if (confirm('Are you sure?')) {
      row.remove();
    }
  };
  tdActions.appendChild(btn);

  row.appendChild(tdPhoto);
  row.appendChild(tdFirst);
  row.appendChild(tdLast);
  row.appendChild(tdEmail);
  row.appendChild(tdDate);
  row.appendChild(tdActions);

  employeeList.appendChild(row);
  form.reset();
});
