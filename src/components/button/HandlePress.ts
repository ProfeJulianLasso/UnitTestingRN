import React from 'react';

export const handlePress = (setData: React.Dispatch<any>) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setData(json));
};
