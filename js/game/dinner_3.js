// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("Mom.");

	Choose({
		"I'm not interestied in studying.": Tutor,
		"Look, I'm trying. I really am.": Tutor,
		"My future is fine.": Tutor
	});

}

function Tutor(message){

	n(message);
	m("I'm worried for you. This is a cruciel world.");

	if($.hippies){
		m("I think your advisor never thold you in the school..");
		n("What makes you say th--");
	}else if($.im_a_poet){
		m("You can't see the reality.");
		n("What makes you say th--");
	}

	m("Stop talking that, eat!");
	n("...what?");

	if($.studying_subject!=$.studying_subject_2){
		m("We can talk about your "+$.friends+" and "+$.school+".");
	}else{
		m("We can talk about "+$.your friend+".");
	}

	m("How's your best friend, L.");

	Choose({
		"Oh, he wants to study the LANGUAGE.": Tutor_Seeing,
		"He's good, not like me.": Tutor_Matchmake,
		"Can we talk about Him next time?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("I'm sorry, what did you say.");
	m("Does their parents mind it?");

	Choose({
		"His parents never mind it.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...Hello?");
			m(". . .");
			n("Anyone there?");
			m(". . .");
			Threat_School();
		},
		"Not kidding.": function(message){
			n(message);
			m("Okay. Don't mind his business.");
			n("You ask me!");
			m(". . .");
			m("Do you have a girlfriend in school?");
			n("Mom.");
			m("Just ask.");
			Threat_Tutor();
		},
		"They definiely moind it.": function(message){
			n(message);
			m(". . .");
			m("Okay.");
			m("Yes , they are.");
			n("But they won't stop.");

			if($.relationship=="friend"){
				m("\"Oh no\"...");
			}
			if($.relationship=="best friend"){
				m("\"Son\"...");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("Well, you can go out with him!");
	n("Tomorrow?");
	m("Yes, you sould take a small break.");
	m("Watc movie or something.");

	Choose({
		"But I don't have mood!": function(message){
			n(message);
			m("Seriously!");
			m("You evan can't make a good decision in daily life.");
			n("What? --");
			m("Just walk around tomorrow.");
			Threat_Tutor();
		},
		"We discussed the newest movie before.": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("Um. Bi?...");

			Show("nicky","dinner_nicky_defiant");

			n("Alright.");
			n("I try.");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"You just avoid the truth.": function(message){
			n(message);
			m("You'll change your mind when you grow up.");
			m("Raising a child takes a lot of effort.");
			n("...of course....");
			m("sweetie?");
			n("Nothing.");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("I can buy the ticket for you.");
	n("Seriously?!");
	n("No. I till don't want.");
	m(". . .");
	m("How long did you want to against my decision?");

	Choose({
		"I grow up, mom.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...Hello?");
			n("It's not weird.");
			m(". . .");
			Threat_School();
		},
		"I promise.": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("I knew it. You thouth you're an adult.");
				n("Huh?");
			}else{
				m("...I knew it.");
			}
			m("But it's too early.");
			Threat_Tutor();
		},
		"LALALALA.": function(message){
			n(message);
			m("Hey, be seriously.");
			if($.lying_about_hanging_out){
				m("We're not enemy.");
				n("Huh?");
			}
			m("i want you to be the best man in the world.");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){

	Show("nicky","dinner_nicky_defiant");

	n(". . .");
	m("Or we can go out tomorrow.");

	Choose({
		"With you!":function(message){
			n(message);
			m("Sweetie, I'm your friend!");
			n(". . .");
			m("Also nothing wrnng to go out with mom.");
			n(". . .");
			n("Are we done?");
			m("...");
			Plot_Twist();
		},
		"I am busy tomorrow.": function(message){
			n(message);
			m("Yes?");
			n("Yes.");
			m("...ok.");
			n(". . .");
			m("I won't force you.");
			Plot_Twist();
		},
		"Maybe?": function(message){
			n(message);
			m("Well, if don't mind.");
			m("Anything to let our relation better.");
			n("ugh.");
			m("Oh.");
			m("I won't force you.");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;

	m("Yes, but not enough.");

	Show("nicky","dinner_nicky_outrage");

	n("WHAT?!");
	m("I think you still have a lot of things to learn.");
	n("ARE YOU SERIOUS.");
	m("How about see Your uncle?");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"No, I know he is a doctor!": function(message){
			n(message);
			m("Don't be so rude!");
			m("It's YOUR uncle!");
			n(". . .");
			Plot_Twist();
		},
		"You can't do this to your CHILD!": function(message){
			n(message);
			m("Don't be so rude!");
			m("I'm your MOTHER, it's my right to do whatever I want with you!");
			n(". . .");
			Plot_Twist();
		},
		"Whatever, it's hard to talk to you.": function(message){
			n(message);
			m("Don't be so rude!");
			m("And watch it, he is a doctor.");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("You still don't want to talk to me?");
	m("I tried, Mom.");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"Oh my god. You read my texts.": function(message){
			n(message);
			m("Yes. See how smart you can be when you're not with Jack?");
			Plot_Twist_2();
		},
		"No, we didn't. We studied.": function(message){
			n(message);
			m("You are a very stubborn boy.");
			m("I read your text messages.");
			Plot_Twist_2();
		},
		"What makes you think that?": function(message){
			n(message);
			m("Because I read your text messages.");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("Before dinner. I was in your room.");

	// Dinner_1
	m("You yelled out '"+$.what_you_called_out+"' from downstairs, while I unlocked your phone...");
	m("And read what you and Jack have been sending to each other.");
	m("I'm your mother. I have the right.");

	n(". . .");

	if($.im_a_poet){
		m("Weird poetry?");
	}
	if($.hippies){
		m("Talking about smoking marijuana?");
	}
	if($.im_a_poet || $.hippies){
		m("Helping you lie to your own mother?");
		m("What else have you been doing behind my back?");
	}

	Choose({
		"This has to be a bad dream.": function(message){
			n(message);
			m("Like that 'Deception' movie?");
			n("It's... it's 'Inception'.");
			m("Don't talk back to me.");
			Plot_Twist_3();
		},
		"I'm sorry. I'm so sorry.": function(message){
			n(message);
			m("I forgive you.");
			m("You're my child, of course I forgive you.");
			Plot_Twist_3();
		},
		"I hate you.": function(message){
			n(message);
			m("That's okay.");
			m("I still love you, Nick.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
