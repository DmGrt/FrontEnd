<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<html>
<body>
	<header>
		
	</header>
	<div class="wrapper">
		<div class="LogIn">
			<div class="included">
			<input type="text" name="" placeholder="Login">
			<input type="password" name="" placeholder="Password">
			<button id="LogInButton">Log in</button>
			<nav>
        <RouterLink to="/h">Log in</RouterLink>
		</nav>
			</div>
		</div>
		<div class="CasesOfUses">
			<h1>Cases of uses:</h1>
			<p><span class="Yellow">Do you want to know where are your car, bicycle, or personal things now?</span> You find a solution for these needs.</p> 
				<p><span class="Yellow">Do you want to get notifications when your tracked device is moved not by you?</span> That’s also covered by us.</p>
				<p><span class="Yellow">Do you want to find your transport or things when they are stolen?</span> Of course, we know the answer, so we carried about it too.</p> 
		</div>
		<div class="Statistic">
			<h1>Statistic:</h1>
			<p><span class="Yellow">There are more than</span> 721,885 <span class="Yellow">cars,</span> 188,500 <span class="Yellow">bicycles, and more than</span> 25 million <span class="Yellow">bags are stolen or missed every year.</span></p>
			<p>Do you want to be in these numbers too?</p>
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
	grid-template-columns: 1fr 2fr;
	grid-gap: 2em;
	margin-bottom: 2em;
	
}
.CasesOfUses
{
	width: 80%;
	background-color: #474747;
	border-radius: 0.5em;
	padding: 1em;
	color: #ffffff;
	font-size: 1.3em;
	font-family: "Century Gothic";
	margin-left: 10%;
	grid-row: 1/3;
}
.CasesOfUses p
{
	padding: 1em;
}
.LogIn
{
	margin-left: 10%;
	background-color: #474747;
	border-radius: 0.5em;
	grid-row: 1/2;
}
.Statistic
{
	width: 80%;
	background-color: #474747;
	border-radius: 0.5em;
	padding: 1em;
	color: #ffffff;
	font-size: 1.3em;
	font-family: "Century Gothic";
	margin-left: 10%;
	grid-row: 2/3;
}
.Statistic p
{
	padding: 1em;
}
p .Yellow
{
	color: #fba90c;
}
.included 
{
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;

}
.included input
{
	width: 80%;
	margin-top: 2em;
	padding: 0.5em;
	border-radius: 0.5em;

}

.included button
{
	width: 40%;
	margin-top: 2em;
	margin-bottom: 2em;
	padding: 0.5em;
	border-radius: 0.5em;

}


</style>