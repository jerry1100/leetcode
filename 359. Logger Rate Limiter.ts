// N: total number of unique messages
// Time: O(1)
// Space: O(N)

class Logger {
    messageTimes: Map<string, number>;

    constructor() {
        this.messageTimes = new Map<string, number>();
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        const lastMessageTime = this.messageTimes.get(message);
        
        if (lastMessageTime !== undefined && timestamp - lastMessageTime < 10) {
            return false;
        }
        
        this.messageTimes.set(message, timestamp);
        
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */