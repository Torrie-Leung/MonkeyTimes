import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red','orange','blue','green','yellow','purple'];
  const randomColour = colors[Math.floor(Math.random() * colors.length)];

  const className = randomColour + '-text';
  return (props) => {
    return(
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
      
    )
  }
}

export default Rainbow