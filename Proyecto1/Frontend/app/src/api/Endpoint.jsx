
/*
devuelve:
{
"status": 200,
"total":total (bytes),
"free": free (bytes)
}
(yo tengo que hacer la conversión en el front)
*/
export function getRam() {
    return fetch(`/getRam`, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    });
}

export function insertRam(porcentaje) {
    return fetch(`/insertRam?porcentaje=${porcentaje}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
}

/*
devuelve:
{
	"status":  200,
	"percent": usoCPU (yo tengo que hacer el cálculo de 100-percent)
}
*/
export function getCPU() {
    return fetch(`/getCPU`, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    });
}

export function getProcess() {
    return fetch(`/getProcess`, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    });
}

export function insertProcess() {
    return fetch(`/insertProcess`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
}

export function delProcess(pid) {
    return fetch(`/delProcess?pid=${pid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
}