Vue.component("nav-bar", {
	template: `<div id="user-footer">
      <ul>
        <li><router-link to="/" class="gfgf"><i class="fa fa-user-o"></i></router-link></li>
        <li><router-link to="/search"><i class="fa fa-search"></i></router-link></li>
        <li>
            <router-link to="/messages" class="unread-nav">
                <i class="fa fa-envelope-open-o"></i>
                <span class="counter badge badge-primary">434</span>
            </router-link>
        </li>
        <li>
        	<router-link to="/notifications" class="unread-nav">
            <i class="fa fa-bell-o"></i>
            <span class="counter badge badge-primary">434</span>
           </router-link>
        </li>
      </ul>
</div>`
})

Vue.component("k-header", {
	template: `<div id="header">
  <ul>
      <li><a href="#"><i id="" class="fa fa-cog"></i></a></li>
      <li id="logo-li"><a href="#"><i id="logo-icon" class="fa fa-stethoscope"></i></a></li>
      <li><a href="#" v-on:click="modal ? modal = false : modal = true"><i id="" class="fa fa-pencil"></i></a></li>
  </ul>
</div>`
})

Vue.component("notification", {
	props: ["notification"],
	template: `<div class="notification">
  <ul class="question-holder">
      <li class="list-group-item py-5 answer-li">
          <div class="notif-type-text">{{ notification.replier }} replied your message <i class="fa fa-hand-o-down"></i>
          </div>
        <div class="media">
          <div class="media-object avatar avatar-md mr-4" style="background-image: url(static/img/jumbo-5.jpg)"></div>
          <div class="media-body">
            <div class="media-heading">
              <h5>{{ notification.username }}</h5>
            </div>
            <div>
             {{ notification.question }}
            </div>
            <ul class="media-list">
              <li class="media mt-4">
                <!-- <div class="media-object avatar mr-4" style="background-image: url(static/img/jumbo-5.jpg)"></div> -->
                <div class="media-body">
                  <strong>{{ notification.replier}} </strong>
                  {{ notification.reply }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
  </ul>
</div>`
})

Vue.component("message", {
	props: ["message"],
	template: `<div class="col-md-6 col-xl-4">
    <div class="card">
        <div class="card-status bg-blue"></div>
      <div class="card-header qn-title-container">
        <img class="qn-user-avatar" src="static/img/jumbo-5.jpg">
        <span class="card-title qn-title">{{ message.askedBy }} asked ...</span>
      </div>
      <div class="card-body qn-text">
        {{message.text}}
      </div>
      <div class="card-footer qn-footer">
        <ul>
            <li><a href="#"><i class="fa fa-reply"></i></a></li>
            <li><a href="#"><i class="fa fa-shield"></i></a></li>
            <li><a href="#"><i class="fa fa-remove"></i></a>
            </li>
            
          </ul>
      </div>
    </div>
</div>`
})

Vue.component("search-user", {
	props: ["user"],
	template: `<div class="search-user">
	  <a href="#">
	      <img class="search-user-img" src="/static/img/jumbo-5.jpg">
	      <p class="search-user-name">{{ user.username }}</p><br>
	      <p class="search-user-stat">{{ user.answered }} answered</p>
	  </a>
	</div>`
})

Vue.component("answer-li", {
	props: ["answer"],
	template: `<li class="list-group-item py-5 answer-li">
    <div class="media">
      <div class="media-object avatar avatar-md mr-4" style="background-image: url(&quot;static/img/jumbo-5.jpg&quot;);"></div>
      <div class="media-body">
      <div class="media-heading">
          <h5>{{ answer.answerer }}</h5>
      </div>
      <div>
      	{{ answer.question }}
      </div>
      <ul class="media-list">
	      <li class="media mt-4">
	          <div class="media-object avatar mr-4" style="background-image: url(&quot;static/img/jumbo-5.jpg&quot;);"></div>
	          <div class="media-body"><strong>{{ answer.username }}: </strong> {{ answer.answer }}
	          </div>
	      </li>
      </ul>
      </div>
  </div>
</li>`
})



const Profile = { 
	template: `
		<div class="user-profile">
      <div class="recent-answers">
        <ul class="list-group card-list-group">
        	<answer-li v-for="answer in answers" :answer="answer"></answer-li>
        </ul>
      </div>
    </div>`,
    data: function() {
    	return {
    		answers: [
    		   {answerer: "gwuah", question: "Donec ullamcorper nulla non metus auctor fringilla.lacinia quam", username: "Potakey", answer: "Donec ullamcorper nulla non metus auctor fringi"},
    			{answerer: "gwuah", question: "Donec ullamcorper nulla non metus auctor fringilla.lacinia quam", username: "Potakey", answer: "Donec ullamcorper nulla non metus auctor fringi"},
    			{answerer: "gwuah", question: "Donec ullamcorper nulla non metus auctor fringilla.lacinia quam", username: "Potakey", answer: "Donec ullamcorper nulla non metus auctor fringi"},
    		  {answerer: "gwuah", question: "Donec ullamcorper nulla non metus auctor fringilla.lacinia quam", username: "Potakey", answer: "Donec ullamcorper nulla non metus auctor fringi"},
    		]
    	}
    }
}

const Search = { 
	template: `
	<div id="search-menu-container">
	  <div id="search-menu">
	      <div class="search-box">
	          <div class="input-icon">
	              <span class="input-icon-addon">
	                <i class="fe fe-user"></i>
	              </span>
	              <input id="search-input" type="text" class="form-control" placeholder="Username">
	            </div>
	      </div>
	  </div>
	  <div class="search-results">
	  	<search-user v-for="user in users" :user="user"></search-user>
	  </div>
	</div>` ,
	data: function() {
		return {
			users: [
			{username: "PopcornSlander", answered: 800},
			{username: "PopcornSlander", answered: 800},
			{username: "PopcornSlander", answered: 800},
			{username: "PopcornSlander", answered: 800},
			{username: "PopcornSlander", answered: 800}
			]
		}
	}
}

const Notifications = { 
	template: `
			<div class="notifications">
				<notification v-for="notif in notifs" :notification="notif"></notification>
		</div>
	`,
	data: function() {
		return {
			notifs: [
			{username: "Griffith",replier: "Daniel Ofofi",question: "Do you sleep at night?",reply: "Ofcourse, who doesnt"},
			{username: "Griffith",replier: "Daniel Ofofi",question: "Do you sleep at night?",reply: "Ofcourse, who doesnt"},
			{username: "Griffith",replier: "Daniel Ofofi",question: "Do you sleep at night?",reply: "Ofcourse, who doesnt"},
			{username: "Griffith",replier: "Daniel Ofofi",question: "Do you sleep at night?",reply: "Ofcourse, who doesnt"},
			{username: "Griffith",replier: "Daniel Ofofi",question: "Do you sleep at night?",reply: "Ofcourse, who doesnt"}
			]
		}
	},

	created: async function() {
		// const res = await fetch("https://localhost:5000/notifs");
		// const notifs = await res.json();
		// this.notifs = notifs;
	}
}

const Messages = { 
	template: `
			<div id="messages" class="container">
      	<div class="row">
      		<message v-for="message in messages" :message="message"></message>
      	</div>
      </div>
	`,
	data: function() {
		return {
			messages: [
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"},
			{askedBy: "Griffith", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!"}
			]
		}
	},

	created: async function() {
		// const res = await fetch("https://localhost:5000/notifs");
		// const notifs = await res.json();
		// this.notifs = notifs;
	}
}

const routes = [
  { path: '/', component: Profile },
  { path: '/search', component: Search },
	{ path: '/messages', component: Messages },
	{ path: '/notifications', component: Notifications }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')


// vm = new Vue({
//     el: "#app",
//     data: {
//         name: "profile",
//         modal: false
//     }
// }) 