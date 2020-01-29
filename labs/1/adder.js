class Adder {

    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sum(a,b) {
        return (this.a + this.b);
    } 

    render(){
    let phrase = `<p> The sum of ${this.a} and ${this.b} is ${this.sum()} </p>`;
    console.log(phrase);
    }
}

module.exports = Adder;