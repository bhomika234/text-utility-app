import React from "react";

const capitalize = (word = "") => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export default function Alert({ alert }) {
  if (!alert) return null;

  const { type, msg } = alert;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
      aria-live="assertive"
    >
      <strong>{capitalize(type)}</strong>: {msg}
    </div>
  );
}
