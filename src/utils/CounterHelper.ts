export function counter(id: string) {
    const count = document.getElementById(id) as HTMLElement;
    const statesNumber = 5;
    const experienceNumber = 80;
    const patientNumber = 1100;
    let i = 0;

    if (count) {
        if (id === 'statesNumber') {
            const interval = setInterval(() => {
                count.textContent = i.toString();
                i++;
                if (i > statesNumber) {
                    clearInterval(interval);
                }
            }, 200);
        } else if (id === 'experienceNumber') {
            const interval = setInterval(() => {
                count.textContent = i.toString();
                i += 20;
                if (i > experienceNumber) {
                    clearInterval(interval);
                }
            }, 200);
        } else if (id === 'patientNumber') {
            const interval = setInterval(() => {
                count.textContent = i.toString();
                i += 100;
                if (i > patientNumber) {
                    clearInterval(interval);
                }
            }, 200);
        }
    }
}
