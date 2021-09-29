import React from 'react'

function About() {
  return (
    <div id='about-section'>
      <h1 id='about-text'>About Us</h1>
      <h2>Welcome to New U!</h2>
      <p>New U is an all-in-one workout planner and knowledge hub. Here you will be able to create and store workout programs so you can better track your progress and actually see results!</p>
      <div className="image-text-container">
        <img src="./build-workout.png" alt="" />
        <div className="image-text">
          <p>This site was created with our users in mind! Most companies will build their "backend" and everything the company needs first, and then think about the user. We are different.</p>
          <p>New U was first created to be user-friendly and intuitive, with no complicated features or gimmiks. And with full-control over your own program, how can you not see the best results money can buy!</p>
                <h3>Start Free, Pay Later!</h3>
      <p>With New U, we understand that gettign started is often the hardest part of you journey. This is why we give you 2 months to  use our platform, absolutely free! We care about you, so you will get 100% unlimited access until you get into the habit of working on your goals.</p>

        </div>
      </div>
      
      <div className="image-text-container">
        <img src="./articles.png" alt="" />
        <div className="image-text">
          <h3>Never be Lost Again</h3>
      <p>Part of the journey is knowing how to get there. And with so much information on the internet, just how can you sort through it all in your free time and find what truly works?? Well, fret no more. We have gathered the best articles across the globe and provided links to them in our articles section, which is curated by a panel of highly acknowledged fitness professionals.</p>
      
      <p>Find exactly what you need, when you need it. Don't worry about losing your articles, either. With our favorites feature, you can save an article for later, either because you just liked it so much, or because there is a lot of info in the article, and you want to reference it later when you have more time.</p>
      <p>So what are you waiting for? Sign up and start on your goals for free, today!</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
