// Toggle the minors section
document.getElementById('toggleInput').addEventListener('change', function () {
    const minorsContainer = document.getElementById('minorsContainer');
    if (this.checked) {
        minorsContainer.style.display = 'block';
    } else {
        minorsContainer.style.display = 'none';
        document.getElementById('minorsList').innerHTML = '';
    }
});

// Handle "Add Minor" functionality
const addMinorBtn = document.getElementById('addMinorBtn');
const minorNameInput = document.getElementById('minorName');
const minorsList = document.getElementById('minorsList');

function addMinorToList() {
    const minorName = minorNameInput.value.trim();

    if (minorName !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'd-flex justify-content-between align-items-center me-3';
        listItem.textContent = minorName;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn p-0 text-danger remove-minor-btn';
        deleteBtn.innerHTML = '<i class="fa fa-xmark ps-3"></i>';
        deleteBtn.addEventListener('click', function () {
            minorsList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        minorsList.appendChild(listItem);

        minorNameInput.value = '';
        minorNameInput.focus();
    } else {
        alert('Introduceți numele minorului!');
    }
}

addMinorBtn.addEventListener('click', addMinorToList);

minorNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addMinorToList();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const inputs = Array.from(document.querySelectorAll("#gymForm input, #gymForm select"));

    inputs.forEach((input, index) => {
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });
    });
});

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
