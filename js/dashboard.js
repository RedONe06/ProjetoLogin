'use strict'
const mussarela = document.getElementById('radioMussarela');
const calabresa = document.getElementById('radioCalabresa');
const marguerita = document.getElementById('radioMarguerita');

const enviar = document.getElementById('enviar');
const estorno = document.getElementById('estorno');

var cCalabresa = 0;
var acCalabresa = 0.0;
var cMussarela = 0;
var acMussarela = 0.0;
var cMarguerita = 0;
var acMarguerita = 0.0;

enviar.addEventListener('click', vender)
estorno.addEventListener('click', estornar)

const btnPlanilha = document.getElementById("planilha")
btnPlanilha.addEventListener('click', planilhar)

function planilhar(){
    TableToExcel.convert(document.getElementById("tbl"));
}

function vender() {
    if (mussarela.checked) {
        cMussarela++; // cMussarela = cMussarela + 1; contador
        acMussarela += 30.00;
        document.getElementById('qMussarela').innerHTML = cMussarela;
        document.getElementById('vMussarela').innerHTML = acMussarela;
    } else if (calabresa.checked) {
        cCalabresa++;
        acCalabresa += 30.00;
        document.getElementById('qCalabresa').innerHTML = cCalabresa;
        document.getElementById('vCalabresa').innerHTML = acCalabresa;
    } else if (marguerita.checked) {
        cMarguerita++;
        acMarguerita += 30.00;
        document.getElementById('qMarguerita').innerHTML = cMarguerita;
        document.getElementById('vMarguerita').innerHTML = acMarguerita;
    }
}

function estornar() {
    if (mussarela.checked) {
        if (acMussarela > 0) {
            cMussarela--; // cMussarela = cMussarela - 1; contador
            acMussarela -= 30.00;
            document.getElementById('qMussarela').innerHTML = cMussarela;
            document.getElementById('vMussarela').innerHTML = acMussarela;
        }
    } else if (calabresa.checked) {
        if (acCalabresa > 0) {
            cCalabresa--;
            acCalabresa -= 30.00;
            document.getElementById('qCalabresa').innerHTML = cCalabresa;
            document.getElementById('vCalabresa').innerHTML = acCalabresa;
        }
    } else if (marguerita.checked) {
        if (acMarguerita > 0) {
            cMarguerita--;
            acMarguerita -= 30.00;
            document.getElementById('qMarguerita').innerHTML = cMarguerita;
            document.getElementById('vMarguerita').innerHTML = acMarguerita;
        }
    }

}
