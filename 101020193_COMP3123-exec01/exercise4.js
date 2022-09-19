function angle_Type(degree) {
    if (degree > 0 && degree < 90) {
        return "Acute angle";
    }
    else if (degree == 90) {
        return "Right angle";
    }
    else if (degree > 90 && degree < 180) {
        return "Obtuse angle";
    }
    else if (degree == 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));