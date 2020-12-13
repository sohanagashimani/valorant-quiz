var readlinesync = require("readline-sync");
const chalk = require('chalk');
console.log(chalk.red("Hello there!"));
var username = readlinesync.question(chalk.cyan("What is your name? "));
console.log(("Hey ") + chalk.greenBright(username) + (" Welcome to the ") + chalk.redBright("VALORANT") + (" quiz!!!"));
var score = 0;
console.log();
function play(question,answer){
    var useranswer = readlinesync.question(chalk.cyanBright(question));
    if(useranswer ==answer){
        console.log(chalk.greenBright("Right!"));
        score+=1;
    }else{
        console.log(chalk.red("Wrong!"));
    }
    console.log("Current score", score);
    console.log("-----------------------------------");
}
var questions = [{
    question: "How Are The Characters Called In Valorant?\na:Agents\nb:Players\nc:Soldiers\nd:Merchs ",
    answer:"a"
},{
    question: "Which agent do you get to play in tutorial?\na:Brimstone\nb:Jett\nc:Sova\nd:Sage ",
    answer:"c"
},
{
    question: "Which agent can heal in his/her own molotv ?\na:Viper\nb:Killjoy\nc:Brimstone\nd:Phoenix ",
    answer:"d"
},{
    question: "Which agent says these lines 'One more win and we are going out for drinks, lads.'?\na:Phoenix\nb:Breach\nc:Cypher\nd:Raze ",
    answer:"a"
},{
    question: "Which agent has the capability to hold a site alone by himself/hersefd?\na:Jett\nb:Sage\nc:Omen\nd:Cypher ",
    answer:"d"
},{
    question: "Who is the most toxic agent in valorant?\na:Phoenix\nb:Jett\nc:Omen\nd:Killjoy ",
    answer:"b"
},{
    question: "which agent is most vialble with the operator?\na:Jett\nb:Omen\nc:Reyna\nd:Raze ",
    answer:"a"
},{
    question: "When you kill 5 agents in a round but the last kill you get after round time, then whats it called ?\na:Won\nb:Clutch\nc:Ace\nd:Team ace ",
    answer:"a"
},{
    question: "How many female agents are there in the game?\na:5\nb:6\nc:7\nd:8 ",
    answer:"c"
},{
    question: "Which initiator is most viable in defence as well as attack?\na:Breach\nb:Sova\nc:Skye\nd:Omen ",
    answer:"b"
},{
    question: "which agent's smokes lasts longer in valorant?\na:Viper\nb:Brimstone\nc:Jett\nd:Omen ",
    answer:"d"
},{
    question: "Which agent cannot climb on top of all objects in the map?\na:Omen\nb:Jett\nc:Raze ",
    answer:"a"
},{
    question: "Which agent can heal all her teammates?\na:Sage\nb:Reyna\nc:Skye\nd:Viper ",
    answer:"c"
},{
    question: "Which agent may revive himself/herself?\na:Sage\nb:Phoenix\nc:Skye\nd:None ",
    answer:"b"
},{
    question: "Which agent's lines are these 'Damn Jett, you're kicking ass'?\na:Raze\nb:Reyna\nc:Skye\nd:Killjoy ",
    answer:"a"
}]
for( var i =0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer)
}
if(score == 15 ){
    console.log("Cheers you made a perfect score!")
}
console.log(chalk.greenBright("YaY! your score is: ",score))