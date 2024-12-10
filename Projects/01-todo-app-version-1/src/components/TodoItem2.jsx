function TodoItem2() {

  let todoName = "Grind DSA";
  let todoDate = "11/12/2024";

  return (
    <div class="container">
      <div class="row cc-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger cc-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
