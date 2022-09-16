import React from "react";

function Header() {
  const date = new Date();
  const hours = date.getHours();
  const customColor = {
    color: ""
  };
  let greeting;
  if (hours < 12) {
    customColor.color = "red";
    greeting = "Good morning";
  } else if (hours < 18) {
    customColor.color = "green";
    greeting = "Good Afternoon";
  } else {
    customColor.color = "blue";
    greeting = "Good Evening";
  }

  return (
    <h1 className="heading" style={customColor}>
      {greeting}
    </h1>
  );
}
export default Header;
