// import {bindable} from 'aurelia-framework';

export class BookForm {
  constructor() {
    this.titleData = { name: 'title', prettyName: 'Title', maxLength: 50 };
    this.authorData = { name: 'author', prettyName: 'Author', maxLength: 50 };
    this.genreData = { name: 'genre', prettyName: 'Genre', maxLength: 50 };

    // This works for sending back up the chain but now I'm sending back the full bound object...
    // What's the point in binding them if I do this???
    // Only need binding down to the component, not back up to the parent
    // Ugh! I'm too tired to think straight!
    this.formValues = {
      title: '',
      author: '',
      genre: '',
      read: false
    }
  }

//   thisFormData() {
//     const formData = {};
//     formData.title = this.titleValue,
//     formData.author = this.authorValue,
//     formData.genre = this.genreValue,
//     formData.read = this.readValue

// console.log(formData);
//     return formData;
//   }
}
