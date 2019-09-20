import React, { useState } from "react";

import { NavLink } from "react-router-dom";

export default function TabNav() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>

      <NavLink to="/character">Characters</NavLink>

      <NavLink to="/location"> Location</NavLink>
    </div>
  );
}
