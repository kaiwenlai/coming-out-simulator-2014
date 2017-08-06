// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("Hi sweetie.");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("Oh, you started eating without me. You're very impatient.");
			n("...right.");
			break;
		case "wait":
			m("You could have started without me. No need to let your food get cold.");
			n("...sure.");
			break;
		case "play":
			m("It's immature to play with your food, you know.");
			n("Oh.");
			break;
	}

	m("Your father's running late. He'll be joining us for dinner in an hour's time.");

	Choose({
		"Cool. Let's eat.": function(message){
			n(message);
			n("*nom nom nom*");
			m(". . .");
			m("What’s your future plan?");
			Start_Dinner_2_1();
		},
		"I have something to tell both of you.": function(message){
			n(message);
			m("Alright. Tell us both later when he comes back.");
			n("Oh. Okay.");
			m(". . .");
			n("*nom nom nom*");
			m("So, what's your future plan?");
			Start_Dinner_2_1();
		},
		"Mom I need to tell you first.": function(message){
			n(message);
			m("Hold on son, I haven't see your college enrollment sheet!");
			n("I chosed...");
			m("Okay. Medical school?");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("Oh. Doctor?")
	n("Yeah. I’m not sure.");
	m("Really?");
	n("Er...");

	Choose({
		"Mom, that’s not I want.": function(message){
			$.studying_subject = "Chemistry";
			Start_Dinner_2_2(message);
		},
		"I like to let people feel happy.": function(message){
			$.studying_subject = "Calculus";
			Start_Dinner_2_2(message);
		},
		"Maybe it’s not a good choice.": function(message){
			$.studying_subject = "Computer Science";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("Good.");
	m("You really, really don't think about your future.");
	n(". . .");
	m("So, l tell you again.");
	m("Entering the Medical shcool is the best choice.");
	n("Actually, that is not what I love.");
	m("Seriously?");
	m("We need to talk baout that.");

	Choose({
		"Just find different possibility, Mom. ": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"Mom, I want to let everyone happy.": function(message){

			$.relationship = "best friend";
			n(message);

			$.lying_about_hanging_out = true;
			m("Yes you are, sweetie.");
			n("Um. Well--");
			m("It doesn’t matter to your future.");
			n("!");
			m(". . .");
			m("Alright, what do you want?");
			n("Bring the happiness..");
			Buddy_1_point_5();
		},
		"Like doctor?.": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		m("OBeing a doctor is good option.");
		n("Mom!");
		m(". . .");
		m("Alright,  I can’t understand you.");
		n("Probably.");
	}else{
		m("Hey, I am your mom.");
		n("Yes, you are.");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("Wait...");
	m("You don’t want to be a doctor, right..");
	m("Don’t make fun of your future.");
	$.lying_about_relationship = true;
	Choose({
		"Like I said, bring the happiness to others.": callback,
		"Well, I can be a magician.": callback,
		"What do you want me to do?": callback
	});
}

function Buddy_1_point_5(){

	m("Just... don't enter the wrong college.");
	m("People might look down on you.");

	Choose({
		"No, seriously.": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"The wrong idea might be the right idea.": Buddy_4,
		"What do you mean by... wrong idea?": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("Okay.");
	if($.lying_about_relationship){
		m("Just don't lie to me.");
		n("I won't.");
		m(". . .");
		m("Magician can’t bring you happiness.");
	}
	m("It's just that some people might assume things, ...");
	m("You know... not everyone will...");
	m("agree with you?");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("Just between mother and son, I think he might be... you know...");
	n("No, what?");
	m("Not worry about your future!");
	m("I DO, TOO.");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("You can’t be respectful, you know.)");
	n("...");
	m("Follow the social anticipation is the easy way.");
	m("...just follow it.");
	Choose({
		"You only think about yourself.": function(message){
			n(message);
			m("No!");
			m("I love you, son!");
			Buddy_Choice();
		},
		"Don't you have you own dream before!": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("Sweetie.");
					m("I won’t hurt you.");
					n("You will.");
					m(". . .");

					m("Maybe the answer is yes, but is not bad for your life.");
					n("I only want--");
					m("You want me to listen to you, but it doesn’t meant let you to");
					m("Be a magician!");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("I'm just being honest.");
				m("But yes, you don’t know what’s the society");
				n("I never said--");
				m("And you just want to be…");
				m("A magician!");
				Buddy_Choice();

			}

		},
		"What do you mean, he's not natural?": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("And since you say he's a 'good pal'...");
		m("People might think you're a gay like him, too.");
	}
	if($.relationship=="best friend"){
		m("And since you say he's your BEST friend...");
		m("People might think you're a gay like him, too.");
	}
	Choose({
		"Ha, he sure acts gay. Luckily, he's not.": function(message){
			n(message);
			m("See? You also think there's something not right about it.");
			n("...sure.");
			Buddy_Aftermath();
		},
		"What's wrong with being gay?!": function(message){
			n(message);
			m("Nothing! Nothing.");
			Buddy_Aftermath();
		},
		"Maybe... my friend might be gay.": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("Okay.");
					m("Just don't lie to me.");
					n("I won't.");
					m(". . .");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}

		}
	});
}


function Buddy_Aftermath(){

	m("Don't get me wrong.");
	m("I'm not saying those kind of people are bad!");
	m("I just think... you should be careful around one of them.");
	m("Jack might, you know, try to recruit you.");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"what.": Buddy_Aftermath_2,
		"whaaat.": Buddy_Aftermath_2,
		"whaaaaaaaaaaaaaaat.": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){

	n(message);

	n("How do you even...");
	n("Ugh, nevermind.");
	m("Nick, I'm sorry you find me annoying.");
	n("No, mom, stop doing th--");
	m("Let's go back to talking about your grades.");
	m("Now, what did you say you were studying tomorrow?");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	n("Errrmmmmm...");

	Choose({
		"Compsci?": function(message){
			$.studying_subject_2 = "Computer Science";
			Grades_Start(message);
		},
		"Chemistry?": function(message){
			$.studying_subject_2 = "Chemistry";
			Grades_Start(message);
		},
		"Calculus?": function(message){
			$.studying_subject_2 = "Calculus";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m(". . .");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("You first told me it was "+$.studying_subject+".");
	m("Now you tell me it's "+$.studying_subject_2+"?");
	$.lying_about_studying = true;
	n("Mom, I was just confus--");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("This is TWICE you've lied to me during this dinner.");
		n("I didn't lie about--");
	}
	m("Either way, your grades in both subjects are terrible.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("You hesitated for a moment there.");
	n("I was eating.");
	m("Okay.");
	if($.lying_about_hanging_out){
		m("I wonder if you're studying with Jack at all, or just always hanging out.");
		n("We study.");
	}
	m(". . .");
	m("Still, your grades in your "+$.studying_subject_2+" class are terrible.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
