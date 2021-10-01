module.exports = {
    baseSchedule: () => {    
    const team = ['A', 'B', 'C', 'D','E'];
    let i, j;
    const pairs = [];

    for(i=0; i < team.length; i++) {
        for(j=0; j < team.length; j++) {
            if(i!=j) {
                pairs.push([team[i], team[j]])
            }
        }
    }
        return pairs;
    }
}