import React from 'react';

const BlogsCard = ({blog}) => {
  const {question, answer} = blog
  return (
    <div class="col">

      <div class="card">

        <div class="card-body">

          <h5 class="card-title">{question}</h5>
          <p class="card-text">{answer}</p>

        </div>

      </div>

    </div>
  );
};

export default BlogsCard;