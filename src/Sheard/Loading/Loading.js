import React from 'react';

const Loading = () => {
  return (
    <div class="d-flex justify-content-center align-items-center text-success">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading; 