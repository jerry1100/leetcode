// N: number of logs
// M: max length of a log
// Time: O(M*N*log(N))
// Space: O(M*log(N))
function reorderLogFiles(logs: string[]): string[] {
    const letterLogs = [];
    const digitLogs = [];
    
    for (const log of logs) {
        const isDigitLog = !isNaN(Number(log[log.length - 1]));
        
        if (isDigitLog) {
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
    }
    
    letterLogs.sort((log1: string, log2: string) => {
        const regex = new RegExp(/ (.+)/);
        const [id1, content1] = log1.split(regex);
        const [id2, content2] = log2.split(regex);
        
        // Sort by content
        if (content1 < content2) {
            return -1;
        }
        if (content2 < content1) {
            return 1;
        }
        
        // Sort by identifier
        if (id1 < id2) {
            return -1;
        }
        if (id2 < id1) {
            return 1;
        }
        
        return 0;
    });
    
    return letterLogs.concat(digitLogs);
};