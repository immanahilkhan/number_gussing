#! /usr/bin/env node is ko bolta hai shabang 

import inquirer from "inquirer";

const randomNumber=Math.floor(Math.random() * 6 + 1 ) ;

console.log("welcome to number gussing game");

const answer = await inquirer.prompt([
{
    name: "guessNumber",
    type:"number",
    message:"guess the number 1 - 6"
}
]);
if (answer.guessNumber=== randomNumber){
    console.log ("congrats you guess right number ")
}else {
    console.log ("sorry you'r not guess right number ")
    console.log ("game over ")
}