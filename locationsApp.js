Vue.component('star-rating', VueStarRating.default);

var app = new Vue({
  el: '#app',
  data: {
    ratings: [
      {rating: '4.0', total: 80, count: 20,},
      {rating: '4.3', total: 86, count: 20,},
      {rating: '3.7', total: 74, count: 20,},
      {rating: '4.8', total: 96, count: 20,},
    ],
  },
  methods: {
    setRating : function(id, newRating){
      this.ratings[id].count++;
      this.ratings[id].total += newRating;
      this.ratings[id].rating = (this.ratings[id].total / this.ratings[id].count).toFixed(1)
    },
    setRatingFMP : function(newRating){
      this.setRating(0, newRating);
    },
    setRatingEST: function(newRating){
      this.setRating(1, newRating);
    },
    setRatingLM : function(newRating){
      this.setRating(2, newRating);
    },
    setRatingAFC: function(newRating){
      this.setRating(3, newRating);
    }
  }
})
