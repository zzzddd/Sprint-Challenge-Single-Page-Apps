import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  return (
    <section className="search-form">
      // Add a search form here
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

// import React, { useState } from "react";

// export default function SearchForm({ onSearch }) {
//   // STRETCH TODO: Add stateful logic for query/form data
//   return (
//     <section className="search-form">
//       <form onSubmit={() => onSearch(name)}>
//         <input
//           onChange={handleInputChange}
//           placeholder="name"
//           value={name}
//           name="name"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </section>
//   );
// }
