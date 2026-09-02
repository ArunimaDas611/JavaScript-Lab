function greet() {
    alert("Welcome to JS programming!");

    console.table([
        {
            Name: "Sample User",
            Course: "JavaScript"
        }
    ]);

    console.time("Execution");
    console.timeEnd("Execution");
}