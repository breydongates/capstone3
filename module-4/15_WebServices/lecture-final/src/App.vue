<!-- Template defines the way the component renders on the web page -->
<template>
  <div id="app">
    <app-header />
    <div class="pageRoot">      
      <router-view /> <!-- Display the current route's component here -->
    </div>
    <app-footer />
  </div>
</template>

<!-- Script is the core data and logic associated with the component. It is required -->
<script>
// Import allows us to import exported resources from .js and .vue files
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import questionService from '@/services/QuestionService.js';

export default {
  name: "App",
  // Components defines the components that must be referenced in the template
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    console.log('App Created!');

    // Fetch data from the server via a get call to myServerUrl /questions
    questionService
      .getAllQuestions()
      .then(response => {
        console.log('GET completed', response);

        if (response.status === 200) {
          // Commit a Vuex mutation named QUESTIONS_LOADED when question data is ready
          this.$store.commit('QUESTIONS_LOADED', response.data);
        } else {
          console.warn('Our actual response was', response);
        }
      })
      .catch(err => {
        console.error('Error getting data: ' + err.message);
      })
      .finally(() => console.debug('finally'));

    console.log('App created method has finished');
  }
};
</script>

<style>
/* Document Styling */

/* Move everything to use border box box sizing */
html {
  font-size: 16px;
  font-family: "Proxima Nova", Tahoma, Arial, sans-serif;
  box-sizing: border-box;
}

/* Give the main content area enough padding to look acceptable */
body {
  color: #363e8b;
  background-color: #999999;
  /* Specify the minimum mobile resolution we'll support */
  min-width: 300px;
}

#app {
    display: grid;
  grid-template-areas:
    "navBar"
    "mainBody"
    "footer";
  row-gap: 0.5rem;

}

main {
  grid-area: mainBody;
}

/* Use #999999 for the body's background color and white for the main content area's background color */

.pageRoot {
  background-color: white;
  padding: 1rem;
  grid-area: mainBody;
}

.pageRoot > * {
  display: grid;
  grid-template-areas: "squirrelPic" "mainBody";
  /* Specify the minimum height for this region. On small pages it can loop wierd if we don't do this */
  min-height: 400px;
}

/* If a section starts with a H1, set its margin-top to 0 and instead give it a padding-top. */
section > h1:first-child {
  margin-top: 0.25rem;
  padding-top: 0.25rem;
}

/* Sections should have their last child not have a margin bottom */
section > :last-child {
  margin-bottom: 0;
}

/* Sidebar Styling */

/* Asides should use a background color, a max-width of 20rem, and float right */
aside {
  grid-area: squirrelPic;
  background-color: #3b3e42;
  border: 1px solid #3b3e42;
  color: white;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 20rem;
  padding: 0.1rem;
}

aside cite {
  display: block;
}

/* Images inside of asides should have a max-width of 100% */
aside img {
  max-width: 100%;
  margin-bottom: 0.25rem;
}

/* Block quotes inside of asides should use some form of non-solid border top */
aside blockquote {
  border-top: 3px dotted #ffcb48;
  padding-top: 0.5rem;
}

cite {
  font-size: x-small;
}

blockquote {
  font-size: small;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

/* Cites inside of block quotes should be on the next line */
blockquote cite {
  text-align: right;
  margin-top: 0.5rem;
  color: #ffcb48;
  font-style: normal;
}

article .question a {
  color: white;
}

/* General Link Styling */

.router-link-active {
  color: #00adee;
  font-size: 110%;
}

nav a {
  padding: 1rem;
  display: block;
  text-align: center;
}

a {
  color: #8cc63f;
  text-decoration: none;
  font-weight: bold;
  font-size: 90%;
  cursor: pointer;
}

/* Links inside the main content area should be blue instead of green */
main a {
  color: #00adee;
}

/* The link should be a different color when you hover over it */
a:hover {
  color: #f6931d;
}

/* Responsive Design Rules */

@media screen and (min-width: 707px) {
  nav a {
    display: inline-block;
    padding: 0 1rem;
  }

  .pageRoot > * {
    column-gap: 0.5rem;
    grid-template-columns: 1fr 20rem;
    grid-template-areas: "mainBody squirrelPic" 
                         "mainBody ...";
  }
}

/* Customized Scrollbar Style */
::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  background: #999999;
}

::-webkit-scrollbar-thumb {
  background: #ffffff;
  box-shadow: #3b3e42 0.1rem 0.1rem;
  border-radius: 0.25rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffcb48;
}

/* Logic Previously in Forms.css */
/* Form Groups should have a bottom margin */
.form-group {
  margin-bottom: 1rem;
}

/* labels inside of form-groups should take the entire row and have some bottom margin */
.form-group label {
  display: block;
  margin-bottom: 0.25rem;
}

/* Labels inside of a form-check class should display inline-block, small font, and use a better cursor */
.form-check label {
  display: inline-block;
  font-size: small;
  cursor: pointer;
}

/* Form Fields directly inside of a form group class should take up a 65% width */
.form-group > input {
  width: 65%;
}

/* TextAreas should have the same width requirement as form groups, and a height of 5rem */
.form-group > textarea {
  width: 65%;
  height: 5rem;
}

/* Apply a different style to the last .form-check class immediately inside of a .form-check-grid */
.form-check-grid > .form-check:last-child {
  color: #c63f3f;
}

/* Inputs that are buttons or submits should use auto width, gray text / border, gold background color, and use a light gray shadow */
input[type="submit"],
input[type="button"] {
  background-color: #ffcb48;
  color: #3b3e42;
  border: 1px solid #3b3e42;
  box-shadow: #999999 2px 2px;
  width: auto;
  cursor: pointer;
}

/* Inputs that are buttons or submits should use orange background on hover */
input[type="submit"]:hover,
input[type="button"]:hover {
  background-color: #f6931d;
}

/* Inputs & textareas should use a dark gray border */
input,
textarea {
  border: 1px solid #3b3e42;
}
</style>
