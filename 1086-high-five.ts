// N: number of items
// Time: O(N*log(N))
// Space: O(N)

function highFive(items: number[][]): number[][] {
    const studentScores = new Map<number, number[]>();
    
    // Aggregate scores by id
    for (const [id, score] of items) {
        const scores = studentScores.get(id) || [];
        scores.push(score);
        studentScores.set(id, scores);
    }
    
    // Calculate average for each student
    const results = new Map<number, number>();
    for (const [id, scores] of studentScores) {
        const topScores = scores.sort((a, b) => b - a).slice(0, 5);
        const sum = topScores.reduce((sum, num) => sum + num);
        const average = Math.floor(sum/topScores.length);
        
        results.set(id, average);
    }
    
    // Return as sorted array by id
    return [...results].sort(([id1], [id2]) => id1 - id2);
};