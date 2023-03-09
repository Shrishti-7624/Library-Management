import Vue from "vue";
import LoginVue from "@/components/Login.vue";
import SignUpVue from "@/components/SignUp.vue";
import ParentBook from '@/components/books/ParentBook.vue'
import BookItemVue from "@/components/books/BookItem.vue";
import UpdatebookVue from "@/components/books/Updatebook.vue";
import BookDetailsVue from "@/components/books/BookDetails.vue";
import ViewBookVue from '@/components/books/ViewBook.vue'
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
Vue.use(VueRouter);
const appRoutes = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      middleware: auth
    }
  },
  {
    path: '/bookitem',
    name: 'bookitem',
    component: BookItemVue,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/viewbook/:id',
    component: ViewBookVue
  },
  {
    path: '/bookdetails/:id',
    component: BookDetailsVue,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/signup',
    component: SignUpVue,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/parentbook',
    component: ParentBook,
    meta: {
      middleware: auth
    }
  },
  {
    path: '/updatebook/:id',
    component: UpdatebookVue,
    meta: {
      middleware: auth
    }
  }

]

const routes = [...appRoutes]

const router  = new VueRouter({
  mode: 'history',
  routes
})



export default router

