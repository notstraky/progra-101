
export class Car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private createdAt: number;


    constructor( brand:string, type:string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 1234656789;
    }

    turnOn() {
        if (this.isRunning) {
            console.log('El carro ya esta encendido');
            return;
        } 

        if (this.fuelTank <= 0) {
            console.log('el carro no tiene combustible')
            return
        }

        this.isRunning = true;
        console.log('El carro se encendio');
    }

    fillTank(gas: number) {

        if (gas <= 0) {
            console.log('El gas tiene que ser positivo');
            return;
        }

        this.fuelTank += gas;

        if (this.fuelTank > 100) {
            this.fuelTank = 100;
        }

    }

}


let myNissan = new Car('Nissan', 'Automatico');
myNissan.fillTank(90)
myNissan.turnOn();
console.log(myNissan);




