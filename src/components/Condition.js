import React, { useEffect, useState } from 'react';

const Condition = (props) => {
  const { location } = props;
  const { responseCity } = props;
  const { condition } = props;

  if (!condition || location !== responseCity) {
    return (
      <span></span>
    );
  }

  if (condition) {
    return (
      <span>{condition}</span>
    );
  }
}

export default Condition;

