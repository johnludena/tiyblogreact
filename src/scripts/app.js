const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	// const Header = React.createClass({
	// 	render: () => {
	// 		return <h1>YOLO</h1>
	// 	}
	// })

	// ReactDOM.render(<Header/>,document.querySelector('.container'))

	const BlogView = React.createClass({
		render:() => {
			return (
				<div className="main-wrapper">
					<Hero />
					<ContentContainer />
					<FloatingWidget />
				</div>
			)
		}
	})


	const Hero = React.createClass({
		render:() => {
			return (
				<div id="hero">
				  <div className="banner-crop">
				    <img id="banner" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
				  </div>
				  <img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
				</div> 
			)
		}
	})

	const ContentContainer = React.createClass({
		render:() => {
			return (
				<div id="container">
				  <div id="left-col">
				    <h2>The Iron Yard | Houston</h2>
				    <p>Happenings and updates from The Iron Yard, Houston</p>
				    
				    <h3>Search</h3>
				    <input type="text" name="search" placeholder="Search Keywords" />   
				    
				  </div>
				  
				  <div id="right-col">
				    <h1>September 22 Starts a New Class of The Iron Yard Houston Students</h1> 
				    <p class="meta">By Brian Dorton, Campus Director at <a href="http://www.theironyard.com">The Iron Yard</a> Houston</p>
				    <div class="crop"><img class="featured-image" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" /></div>
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, esse consequatur ab molestias quod excepturi explicabo, veritatis aliquid ea tenetur consectetur maxime nisi laborum beatae voluptate eos nobis, quia temporibus.</p>
				    
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quos architecto suscipit, quibusdam dolores deleniti ipsam error repellat a beatae tempore quod animi incidunt veniam asperiores tenetur velit dicta aliquam!</p>
				  </div>
				      
				</div>
			)
		}
	})

	const FloatingWidget = React.createClass({
		render:() => {
			return (
				<div id="follow">
				  <h4>Never miss a post!</h4>
				  <img id="small-logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
				  <p className="social">
				    
				    <span className="username">tiyhouston</span><br />
				    <span className="tiy">The Iron Yard | Houston</span>
				  </p>
				  <a className="button" href="#">Follow</a>
				</div>
			)
		}
	})

	// mount the top-level component to the page.
	ReactDOM.render(<BlogView />, document.querySelector('.container'))
}

app()