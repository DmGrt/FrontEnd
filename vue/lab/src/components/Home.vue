<template>
<html>
<body>
  <header>
  </header>
  <div class="wrapper">
  	<div class="boxes">
  		<div class="grayBack">
  			<h1 class="whiteGoth">My Devices:</h1>
  			<div class="whiteBorder">
  				<ul class="whiteGoth">
  					<li><h3 class="yellowText">DV1</h3><h3 class="greenText">active</h3></li>
  					<li><h3 class="yellowText">DV2</h3><h3 class="greenText">active</h3></li>
  					<li><h3 class="yellowText">DV3</h3><h3 class="redText">disabled</h3></li>
  				</ul>
  			</div>
  			<div class="whiteBorder">
  				<button class="buttons">Add new</button>
  				<button class="buttons">Delete Selected</button>
  			</div>
  		</div>
  		<div class="grayBack">
  			<h1 class="whiteGoth">Notifications:</h1>
  			<div class="whiteBorder">
  				<ul class="whiteGoth">
  					<li><h3 class="yellowText" font-weight=15>DV1</h3> is moving</li>
  					<li><h3 class="yellowText">DV2</h3> suspicious movement</li>
  				</ul>
  			</div>
  		</div>
  	</div>
  	<div class="mapOut">
    	<iframe class="map" src="https://www.google.com/maps/embed" loading="lazy"></iframe>
  	</div>
  </div>

</body>
</html>
</template>

<style>
*
{
  padding: 0;
  margin: 0;
}
html
{
  background-image: url('../components/img/back.png');
  background-size: cover;
}
html header
{
  background-image: url('../components/img/header.png');
  min-height: 218px;
  background-repeat: no-repeat;
  background-size: 100%;
}

.wrapper
{
  display: grid; 
  grid-template-columns: 35% 65%;
  padding: 0% 10% 0% 10%;
  grid-column-gap: 2%;
}

.boxes
{
  font-size: 1em;
  grid-template-rows: 60% 40%;
  grid-row-gap: 10%;
}

.map
{
  height: 96%;
  width: 96% ;
  padding: 2% 2% 2% 2%;
  border: none;
}

.mapOut
{
  background-color: #474747;
  border-radius: 0.5em;
}

.grayBack
{
  background-color: #474747;
  border-radius: 0.5em;
  padding: 1% 1% 1% 1%;
  margin: 0% 0% 5% 0%; 
}

.whiteGoth
{
  color: white;
  font-family: "Century Gothic";
  padding: 2% 0% 0% 2%;
  list-style: none;
}

.yellowText
{
    color:#fba90c
}

.greenText
{
    color: #2fef3c;
}

.redText
{
    color: #e80404;
}

.whiteBorder
{
  border-radius: 0.5em;
  border: 0.1em solid #ffffff;
  margin: 5% 5% 5% 5%;
}

.buttons
{
  font-weight: bold;
  margin: 5% 5% 5% 5%;
  font-size: 1.3em;
  color: #fba90c;
  background: none;
  border: none;
}

li
{ 
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;  
}


</style>