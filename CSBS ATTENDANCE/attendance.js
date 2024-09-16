function calculateAttendance() {
    const totalClasses = 490;
    const completedClasses = 287;
    const classesPerWeek = 29;
    const remainingWeeks = 7;
    const remainingMidWeeks = 3;

    const userAttendance = parseFloat(document.getElementById("attendance").value);
    const calcType = document.getElementById("calculationType").value.toUpperCase();

    // Validate user inputs
    if (isNaN(userAttendance) || userAttendance < 0 || userAttendance > 100) {
        alert("Please enter a valid attendance percentage between 0 and 100.");
        return;
    }

    if (calcType !== "M" && calcType !== "S") {
        alert("Please enter 'M' for Midterm or 'S' for Semester End.");
        return;
    }

    // Calculate attended classes based on current attendance percentage
    const attendedClasses = Math.ceil((userAttendance / 100) * completedClasses);

    let finalClasses;
    if (calcType === "M") {
        finalClasses = completedClasses + (remainingMidWeeks * classesPerWeek);
    } else if (calcType === "S") {
        finalClasses = totalClasses;
    }

    // Calculate the final expected attendance if no more classes are missed
    const finalAttendance = ((attendedClasses + (finalClasses - completedClasses)) / finalClasses) * 100;

    // Display the result
    document.getElementById("result").innerText = `Your expected final attendance is ${final