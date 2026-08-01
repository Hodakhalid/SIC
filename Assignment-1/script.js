function start() {
    alert("Welcome..❤️");

    const start = confirm("Are you sure you want to calculate your grade?");

    let  state ; 

    if (start) {

        let grade = Number(prompt("Enter Your grade"));

        if(Number.isNaN(grade)){
            alert("Please Enter The Valid Grade!")
        }

        else{

            if (grade >= 90) {
                alert("A");
                state = "A";
            }

            else if(grade >= 80){
                alert("B");
                state = "B";
            }

            else if(grade >= 70){
                alert("C");
                state = "C";
            }

            else if(grade >= 50){
                alert("D");
                state = "D";
            }

            else{
                alert("F");
                state = "F";
            }

            switch(state){
                case "A":
                    alert("Congratulations.🎉🎉");
                    break;

                case "B":
                    alert("Very Very Good.🎊🎊");
                    break;

                case "C":
                    alert("Good.💖");
                    break;

                case "D":
                    alert("Better luck next time!😊");
                    break;
                    
                default:
                    alert("Don't give up! Better luck next time.💪")
        }
    }
}
}
