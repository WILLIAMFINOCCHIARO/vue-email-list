
// Ciao ragazzi,
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-List
// Descrizione
// Attrvaerso l'apposita API di Boolean :api:
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. 



const app = new Vue({
	el: '#root',
	data: {
	
	},
	methods: {

    

	},
  created(){

      // Make a request for a user with a given ID
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

});