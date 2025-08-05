import React, { useState } from 'react';

function Practice() {

    // Initialize state for the person
  const [person, setPerson] = useState({
    name: '',     // Person's name
    hobby: ''     // Person's hobby
  });

  // Handle input change for either name or hobby
  function handleChange(event) {
    const { name, value } = event.target;
    setPerson(prevPerson => ({
      ...prevPerson,
      [name]: value      // Update either name or hobby based on input
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    alert('Name: ' + person.name + '\nHobby: ' + person.hobby);
    // You can also submit this info to a server here if needed
  }

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Hobby:{' '}
          <input
            type="text"
            name="hobby"
            value={person.hobby}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
//   const [formData, setFormData] = useState({
//     name: '',
//     hobby: ''
//   });

//   function handleChange(event) {
//     console.log('Event object:', event);
//     console.log('event.target:', event.target);
//     console.log('event.target.name:', event.target.name);
//     console.log('event.target.value:', event.target.value);

//     const fieldName = event.target.name;
//     const fieldValue = event.target.value;

//     setFormData(prevData => ({
//       ...prevData,
//       [fieldName]: fieldValue
//     }));
//   }

//   return (
//     <div>
//       <h3>Type in the inputs and check the console</h3>
//       <form>
//         <label>
//           Name:{' '}
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             type="text"
//           />
//         </label>
//         <br />
//         <label>
//           Hobby:{' '}
//           <input
//             name="hobby"
//             value={formData.hobby}
//             onChange={handleChange}
//             type="text"
//           />
//         </label>
//       </form>
//     </div>
//   );


}

export default Practice;