const introButton = document.getElementById("intro");
const motoButton = document.getElementById("moto");
const linksButton = document.getElementById("links");
const detailsField = document.getElementById("details");

introButton.addEventListener("click", function() {
    detailsField.innerHTML = `
    <h1>Introduction & Background</h1>
    <p>Hi there! My name is Jonathan Beadling (you can just call me Jon). This is my capstone project for my
    application into the #VetsWhoCode program. So a little background info on myself. I join the Marine Corp in
    2007 at 19 years old. About a year in while stationed in Camp Lejuene I served 1 tour in Iraq (operation OEF). 
    Afterwards I served out the rest of my time in Japan at Camp Fuji until I got out in 2011.</p> 
    
    <p>After the service I went to college on the GI bill, getting degress in Political Science and IT. Since 2016
    I've been working in the IT field starting from help desk to roles in tier 3 support and NOC positions.</p> 
    
    <p>I've always been a power user when it came to PCs so I naturally gravitated to the IT field. Whether
    it's building a new Desktop, playing with linux distros, or doing dumb things with software I've always
    been inclined to those sort of activities. </p>`;
});

motoButton.addEventListener("click", function() {
    detailsField.innerHTML = `
    <h1>Why I applied</h1>
    <p>Despite being in the IT field I've never really gotten into software engineering, 
    the creative process and the art of building has always eluded me. I have always resigned myself to 
    being a consumer and user of things. Lately though I have had the urge to do something more, oftentimes
    I fantasize about making something. Something I can be proud of, something that I can enjoy creating, 
    something that is a part of something big. My ultimate goal is to one day strike out on my own and 
    build something. What that is I have no idea. Before I can do any of that I need to get the skills 
    to do so.</p> 

    <p>While I have started to learn, the process has been slow and sometimes the motivation is hard. 
    discovered this program while surfing social media and after reviewing the Syllabus I have a good 
    feeling this is exactly what I need, more importantly it gives me an excellent opportunity to network 
    and learn from those who have a similar background to me and maybe that’ll help give me the discipline 
    and motivation I need to push through and learn what I need to learn. </p>

    <p>If given the opportunity I’m going to make this my #1 priority and focus on what I need to do to 
    accomplish my goals.</p>
    </p>`;
});

linksButton.addEventListener("click", function() {
    detailsField.innerHTML = `
    <h1>Links & samples</h1>
    <p>So here is the link to my <a href="https://github.com/Nel-Void" target="_blank">GitHub Profile</a>, 
    it's pretty bare right now with only a few projects but hopefully soon I can fill out all those green squares.
    </p>
    <p>A few basic projects I did:
    <ul>
        <li><a href="https://samplepasswordgenerator.netlify.app/" target="_blank">Password Generator</a></li>
        <li><a href="https://samplescoreboard.netlify.app/" target="_blank">Scoreboard</a></li>
    </ul>
    `;
});