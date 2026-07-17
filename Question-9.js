// Function to get grade based on average
function getGrade(average) {
    if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Main function
function calculateStudentResults(students) {
    let result = [];
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        
        // Calculate total
        let total = 0;
        for (let j = 0; j < student.marks.length; j++) {
            total += student.marks[j];
        }
        
        // Calculate average
        let average = total / student.marks.length;
        
        // Get grade
        let grade = getGrade(average);
        
        // Add to result array
        result.push({
            name: student.name,
            total: total,
            average: average,
            grade: grade
        });
    }
    
    return result;
}

// Example Input
const students = [
    {
        name: "Ali",
        marks: [80, 70, 90]
    },
    {
        name: "Sara",
        marks: [60, 55, 65]
    }
];

console.log(calculateStudentResults(students));