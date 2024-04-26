import inquirer from "inquirer";

let todo : string[] = [];

let condition = "true";
while(condition){

let addtask = await inquirer.prompt(
    [
        {
            name: "todos",
            type: "input",
            message: "do you want to add in your todo?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more in todo?",
            default: "false",
        }
    ]
);
todo.push(addtask.todos);
condition = addtask.addmore
console.log(todo);
}
