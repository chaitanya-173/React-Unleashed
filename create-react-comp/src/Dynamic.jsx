function Hello() {

  let number = 789;
  let fullName = () => {
    return 'Chaitanya Chaudhary';
  }
  return <p>
    Message No: {number} I am {fullName()}
  </p>
}

export default Hello