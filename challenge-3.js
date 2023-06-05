const mark = {
    fullName: 'Mark Jackson',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        return bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        const bmi = this.mass / (this.height * this.height);
        return bmi;
    }

};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is higher than ${mark.fullName}'s (${mark.calcBMI().toFixed(2)})`);
}