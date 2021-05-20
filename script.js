const age = 18;
const isFemale = false;
const driverStatus = 'bob';
if (age > 17) {
    console.log('Jij mag naar binnen');
}
else if(age < 18) {
    console.log('Helaas, jij moet nog even wachten');
}
if (isFemale) {
    console.log('Jij mag naar binnen');
}
else {
    console.log('Helaas, vandaag is het alleen voor dames');
}
if (driverStatus == 'bob') {
    console.log('Bedankt voor uw komst en wel thuis. Rij voorzichtig')
}
else if (driverStatus == 'drunk'){
    console.log('Bedankt voor uw komst. Ik zal een taxi voor u bellen, u mag zelf niet meer rijden.')
}