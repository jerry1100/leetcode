// N: number of cpdomains
// Time: O(N), length of cpdomain[i] is fixed so ignored in analysis
// Space: O(N)
function subdomainVisits(cpdomains: string[]): string[] {
    const counts = new Map<string, number>();

    for (const cpdomain of cpdomains) {
        const [countStr, domain] = cpdomain.split(" ");
        const count = Number(countStr);

        let subDomain = domain;
        do {
            const currCount = counts.get(subDomain) ?? 0;
            counts.set(subDomain, currCount + count);
            
            // Remove up to next '.'
            subDomain = subDomain.replace(/[^.]*\.?/, "");
        } while (subDomain);
    }

    const res = [];
    counts.forEach((count: number, domain: string) => {
       res.push(`${count} ${domain}`); 
    });
    
    return res;
};

