document.addEventListener('DOMContentLoaded', () => {

  
  // submitForm()
  // buttonFunc()
  //
  //
  // function submitForm(){
  // let editButton = document.getElementById("edit-button")
  // let deleteButton = document.getElementById("delete-button")
  let formLocation = document.getElementById("the-div")
  formLocation.innerHTML = `
      <form id="note-form" action="index.html">
        Enter a Topic:
        <br>
        <input id="topic-input" placeholder="Type Here" type ="text" name = "topic">
        <br></br>
        Enter a Note:
        <br>
        <textarea id="note-input" placeholder="Type Here" type="text" name="note" style="rows:3;height:50px;font-size:8pt;"></textarea>
        <br></br>
        <input type="submit" value="submit">
      </form>`


  const noteform = document.getElementById("note-form")
  noteform.addEventListener("submit", function(e) {
    e.preventDefault()
    const noteLocation = document.getElementById("the-list")
    const topicInput = document.getElementById("topic-input").value
    const noteInput = document.getElementById("note-input").value

    noteLocation.innerHTML += `
          <div id="note">
          <h2>  NOTE </h2>
          <h3 id=topic>  ${topicInput} </h3>
          <p id=details>  ${noteInput} </p>
          <button id="edit-button"> EDIT </button>
          <button id="delete-button" action="delete"> DELETE </button>
          <div>`

    document.getElementById("topic-input").value = ""
    document.getElementById("note-input").value = ""
    //  })
    // }
    const deleteButton = document.getElementById("delete-button")
    deleteButton.addEventListener("click", function(e) {
      e.preventDefault
      noteArea = document.getElementById("note")
      noteArea.innerHTML = ""
      // function buttonFunc(){
      const editButton = document.getElementById("edit-button")
      editButton.addEventListener("click", function(e) {
        e.preventDefault
        noteArea = document.getElementById("note")
        console.log("clicked")
        noteArea.innerHTML = `<form id="edit-form">
              Edit Topic:
              <br>
              <input id="edit-topic-input" type ="text" name = "topic">
              <br></br>
              Edit Details:
              <br>
              <textarea id="edit-note-input" type="text" name="note" style="rows:3;height:50px;font-size:8pt;"></textarea>
              <br></br>
              <input type="submit" value="submit">
            </form>`

        const editForm = document.getElementById("edit-form")
        editForm.addEventListener("submit", function(e) {
          e.preventDefault
          const topicInputTwo = document.getElementById("edit-topic-input").value
          const noteInputTwo = document.getElementById("edit-note-input").value
          noteArea.innerHTML = `<div >
                    <h2>  NOTE </h2>
                    <h3>  ${topicInputTwo} </h3>
                    <p>  ${noteInputTwo} </p>
                    <div>`


        })
      })
    })
    // }
  })
})
