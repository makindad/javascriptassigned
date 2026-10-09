let age = prompt ("enter your age here:");
if (age >= 18){
    console.log(`you are old enough to drive.`);

}
else{
    let yearsLeft = 18;
    console.log('yearsLeft')
    let yearsLeft = 18 - age;
    console.log(`you are left with ${yearsLeft} years to drive`);
}