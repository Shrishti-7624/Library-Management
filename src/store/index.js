import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    currentUser: {},
    users: [],
    borrowedBooks: [],
    issuedBooks: [],
    IsLoggedIn: false
  },
  getters: {
    books: (state) => state.books,
  },

  mutations: {
    setUserData(state, payload) {
      state.users = payload;
    },
    deleteBook(state, payload) {
      state.books.splice(payload, 1)
    },
    setLogOut(state) {
      state.currentUser = {}
    },
    setBookEntry(state, payload) {
      state.books.push(payload);
    },
    getAllUsers(state , payload){
      state.users = payload
    },
    getBookData(state , payload) {
      state.books = payload
    },
    getBorrowedBook(state , payload) {
      if(payload == null) state.borrowedBooks = []
      else state.borrowedBooks = payload
    },
    getIssuedBook(state, payload) {
      if(payload == null) state.issuedBooks = []
      else state.issuedBooks = payload
    },
    getCurrentUser(state , payload) {
      state.currentUser = payload
    },
    borrowBook(state, payload) {
      const { index , borrowedBook } = payload
      if (index !== -1) {
        state.borrowedBooks[index].quantity++
      } else
        state.borrowedBooks.push(borrowedBook)
    },
    issueBook(state, payload) {
      const { index , issuedBook } = payload
      if (index !== -1) {
        state.issuedBooks[index].quantity++
      } else
        state.issuedBooks.push(issuedBook)
    },
    updateBook(state, payload) {
      state.books[payload.id] = payload.newBook
    }
  },
  actions: {
    setUserData({ commit }, payload){
      commit('setUserData' , payload)
    },
    setAllUsers({ state } ,  payload){
      state.users.push(payload)
      localStorage.setItem('users' , JSON.stringify(state.users))
    },
    setLogIn({ state }, payload){
      localStorage.setItem('currentUser' , JSON.stringify(payload))
      state.currentUser = payload
    },
    setLogOut({ commit }){
      commit('setLogOut')
      localStorage.setItem('currentUser', JSON.stringify({}))
    },
    setBookEntry({ commit }, payload){
      commit('setBookEntry', payload)
    },
    getAllUsers({ commit }){
      commit('getAllUsers' , JSON.parse(localStorage.getItem('users')))
    },
    getBookData({ commit }){
      const books = localStorage.getItem('books')
      if (!books){
        localStorage.setItem('books', JSON.stringify([]))
      }else{
        commit('getBookData' , JSON.parse(books))
      }
    },
    getBorrowedBook({ commit }){
      commit('getBorrowedBook', JSON.parse(localStorage.getItem("borrowedBook")))
    },
    getIssuedBook({ commit , state }){
      const user = state.currentUser.username
      const issuedBook = JSON.parse(localStorage.getItem("issuedBook"))
      commit('getIssuedBook', JSON.parse(localStorage.getItem("issuedBook")))
    },
    getCurrentUser({ commit }){
      commit('getCurrentUser', JSON.parse(localStorage.getItem("currentUser")))
    },
    borrowBook({ commit , state } , payload){
      const book = state.books[payload]
      const borrowedBook = {
        user: state.currentUser.username,
        title: book.title,
        ISBN: book.ISBN,
        category: book.category,
        price: book.price,
        due: new Date(Date.now() + 86400 * 1000 * 7).toDateString(),
        dueDate: Date.now() 
      }
      const index = state.borrowedBooks.findIndex(
        (row) => row.title === borrowedBook.title && row.user === borrowedBook.user
      );
      if (book.quantity > 0) {
        book.quantity--
        localStorage.setItem('books', JSON.stringify(state.books))
        commit('borrowBook', { index , borrowedBook})
        localStorage.setItem('borrowedBook', JSON.stringify(state.borrowedBooks))
      }
    },
    issueBook({ commit  , state } , payload){
      const book = state.books[payload]
      const issuedBook = {
        user: state.currentUser.username,
        title: book.title,
        ISBN: book.ISBN,
        category: book.category,
        price: book.price,
        due: Date.now(),
        dueDate: Date.now() 
      }
      const index = state.issuedBooks.findIndex(
        (row) => row.title === issuedBook.title && row.user === issuedBook.user
      );
      if (book.quantity > 0) {
        commit('issueBook', { index , issuedBook})
        localStorage.setItem('issuedBook', JSON.stringify(state.issuedBooks))
      }
    },
    getUserData({ commit }) {
      const user = JSON.parse(localStorage.getItem("users"));
      if (user) {
        commit("setUserData", user);
      }
    },
    addBookAdmin({ state }, payload) {
      let allBook = state.books;
      if (allBook) allBook.push(payload);
      localStorage.setItem("books", JSON.stringify(allBook));
    },
    deleteBook({ commit , state }, payload) {
      commit("deleteBook", payload);
      localStorage.setItem('books', JSON.stringify(state.books))
    },
    updateBook({ commit , state }, payload) {
      commit("updateBook", payload);
      localStorage.setItem('books', JSON.stringify(state.books))
    },
  },
});
