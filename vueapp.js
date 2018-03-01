var app = new Vue({
  el: '#app',
  data: {
    description: '',
    eventTime: '',
    eventDay: '',
    location: '',
    error: false,
    events:[
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
      {event: '', loc: '', time: '', added: false},
    ],
  },
  methods:{
    addEvent: function(){
      if(this.eventDay > 31 || this.eventDay < 1){
        this.error = true;
      }
      else{
        this.events[this.eventDay - 1].event = this.description;
        this.events[this.eventDay - 1].loc = this.location;
        this.events[this.eventDay - 1].time = this.eventTime;
        this.events[this.eventDay - 1].added = true;
        this.error = false;
      }
    },
  }
})
