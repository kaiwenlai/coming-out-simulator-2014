// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){

	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("Hey, did you watch the STAR WALL AND CATS?");
	j("It is the famous movie made by Dr. Howard.");
	j("And guess who made the music?");
	n("You mentioned it thousand time.");
	n("It made by Larry Norhost.");
	j("You’re my best friend, bro.");
	j("Did you know the ending?");

	Choose({
		"I have no mood to talk about that.": Inception_Dream,
		"Cats become the host of the whole world!": Inception_Awake,
		"Doesn't matter. My mom doesn’t let me watch.": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("Why do you say that?");
	n("My parents.");
	j("Wait, you didn’t tell them, right?");

	Choose({
		"Hey, how can I tell them.": Sadsack,
		"I told them what I want.": function(message){
			$.im_a_poet = true;

			n(message);
			j("Did they support you?");
			n("I’m kidding. I dare not to tell them,");
			n("Coz they still want me to enter the Medical Schools.");
			j("Sorry for that.");
			n("It’s ok.");
			Thanks();
		},
		"There is no solution…": function(message){
			$.hippies = true;

			n(message);
			j("Oh, come on! Things will be better.");
			n("I hope so...");
			n("But I’m not you...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("You know cats are sooo bossy.");
	n("And cute.");
	j("Ah Lee, you should watch this movie.");
	j("Do you like Jerry or Tom.");

	Choose({
		"The winner goes to Jerry": function(message){
			n(message);
			Thanks();
		},
		"Meow~.": function(message){
			n(message);
			j("I knew it.");
			n("Love what you love.");
			n("Anyway...");
			Thanks();
		},
		"Oh again.": function(message){
			n(message);
			j("I'll interpret that you love both.");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("What happens?");
	n("I have to choose the college soon.");
	n("But does the society allow me to do what I want?");
	n("I don’t know where to go.");
	j("You can do it, trust me.");

	Choose({
		"Should I trust you?": function(message){

			$.im_a_poet = true;

			n("I love magic,");
			n("but it seems like not a ... ");
			j("You are good at making fun of people.");
			n("Really?");
			n("If they were you...");
			Thanks();

		},
		"Well, if you were right...": Sadsack,
		"I will try.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("but never be successful.");
			j("You are such an old man.");
			n("Hey, we are at the same age.");
			Thanks();

		}
	});

}

function Sadsack(message){

	$.sadsack = true;

	n(message);
	j("Aw, sorry to hear that.");
	j("I hope sharing the movie can make you happy.");
	n("A little bit.");
	Thanks();

}

function Thanks(){

	n("Thanks for sharing me <i>the STAR WALL AND CATS<i>.");
	j("Cheer up, bro.");
	j("I can read whatever you want.");
	n("Hnn, oh ,ye~");
	n("Let’s watch movie next time.");

	j("Sure.");
	n("I hope my parents can allow me to do whatever I want.");

	j("I wish you can tell you parents about what do you want to be.");
	n("Oh, I bet they want to kill me. LOL");

	j("Be yourself.");
	n("...");

	Choose({
		"It will be the WWW III.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("Really?");
			Hiding();
		},
		"I promise I will try my best..": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"I'm not ready to tell them yet.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("I can help you be ready.");
			Hiding();
		}
	});

}

function Hiding(){

	j("Lee, I will always support you.");

	if($.inception_answer=="awake"){
		j("Be cat, try to be bossy?");
	}
	if($.inception_answer=="dream"){
		j("Don’t be afraid of talking with your parents.");
	}

	if($.sadsack){
		j("You’re afraid to tell them?");
		j("But I know you can do it.");
	}

	n("Where is your confidence?");
	j("I told my parents that I want to study the language.");
	if($.hippies){
		n("We’re from different family.");
		n("It’s unfair to compare us.");
		n("I hope you can offer other example.");
		j("Hey! Come on.");
		n("Heh.");
		j("You have to use the right way to persuade them.");
	}else{
		j("And they were very supportive!");
	}

	j("Remember good communication makes good relationship.");
	j("What are you worry about?");

	Choose({
		"I’m afraid they will be angry after telling everything.": Hiding_2,
		"I don't know... I just...": Hiding_2,
		"I guess: just say it, right?": Hiding_2
	});

}

function Hiding_2(message){

	n(message);

	if($.coming_out_readiness=="no"){
		n("Again... WWW III remember?");
	}

	j("Yes, you're right.");
	j("I am looking forward to...");
	j("...because it is not easy for you.");

	n("Don’t make fun of me!");

	j("Right, use this courage to talk to them.");
	j("And tell them you don’t want to be a doctor.");

	if($.im_a_poet){
		n("Hi. MAGACIAN.");
	}else{
		n("It's not too bad...");
	}

	if($.coming_out_readiness=="yes"){
		j("You yourself just said you wish you could tell them.");
		j("Tell them.");
	}else{
		j("Lee.");
	}
	j("Tell them about your choice.");

	Choose({
		"Tonight?! Heck no.": Hiding_3,
		"Sigh... I'll try my best.": Hiding_3,
		"I'll just carefully hint at it.": Hiding_3
	});

}

function Hiding_3(message){

	n(message);
	j(". . .");
	n("I don't want to make them angry.");
	n("But I will try my best;");
	n("though I’m afraid their reaction.");
	j(". . .");
	n("It's dinnertime. I'm heading downstairs now.");

	j("Hey... I know that is not easy for you.");
	n("Thanks.");
	j("Don’t forget tell me their reaction.");
	switch($.inception_answer){
		case "dream": j("And you have to watch the movie with me."); break;
		case "awake": j("I think Cats are the best."); break;
		case "neither": j("Be Cats, be bossy."); break;
	}
	n("OK.");
	j("Okay~");
	if($.coming_out_readiness=="maybe"){
		j("Hope you changed your mind about being 'not ready to tell them yet'.");
	}
	j("Good luck. Text me in an hour.");

	var insult = "";
	if($.hippies) insult+=" new-age hippie";
	if($.im_a_poet) insult+=" amateur poet";
	n("See ya.");
	if(insult!=""){
		n("You"+insult+".");
	}else{
		n("You goof.");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
