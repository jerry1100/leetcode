// N: number of employees
// Time: O(N)
// Space: O(N)

/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
    const employeeMap = new Map<number, Employee>();

    for (const employee of employees) {
        employeeMap.set(employee.id, employee);
    }

    const getTotalImportance = (employeeId: number): number => {
        const { importance, subordinates } = employeeMap.get(employeeId);
        return (
            importance +
            subordinates
                .map(getTotalImportance)
                .reduce((sum, num) => sum + num, 0)
        );
    };

    return getTotalImportance(id);
}
