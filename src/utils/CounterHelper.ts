export function counter(id: string) {
    let count = document.getElementById(id) as HTMLElement;
    let statesNumber = 5
    let experienceNumber = 80
    let patientNumber = 1100
    let i = 0

    if (count) {
        if (id === 'statesNumber') {
            let interval = setInterval(() => {
                count.textContent = i.toString();
                i++;
                if (i > statesNumber) {
                    clearInterval(interval);
                }
            }, 200);
        } else if (id === 'experienceNumber') {
            let interval = setInterval(() => {
                count.textContent = i.toString();
                i += 20;
                if (i > experienceNumber) {
                    clearInterval(interval);
                }
            }, 200);
        } else if (id === 'patientNumber') {
            let interval = setInterval(() => {
                count.textContent = i.toString();
                i += 100;
                if (i > patientNumber) {
                    clearInterval(interval);
                }
            }, 200);
        }
    }
}