function calcularEventos() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var abaRespostas = planilha.getSheetByName("Show_em_SP");
  var abaCalculos = planilha.getSheetByName("Calculos");
  
  var eventos = ["Dia 01/06", "Dia 08/06", "Dia 15/06", "Dia 22/06", "Dia 29/06"];
  var precos = [50, 50, 40, 70, 65];
  var custos = [30, 30, 35, 42, 51];
  
  // Cabeçalhos
  abaCalculos.getRange("A1").setValue("Evento");
  abaCalculos.getRange("B1").setValue("Total de Pessoas");
  abaCalculos.getRange("C1").setValue("Valor Total Arrecadado");
  abaCalculos.getRange("D1").setValue("Custo Total");
  abaCalculos.getRange("E1").setValue("Lucro Total");
  
  // Loop pelos eventos
  for (var i = 0; i < eventos.length; i++) {
    var evento = eventos[i];
    var totalPessoas = 0;
    var valorArrecadado = 0;
    var custoTotal = 0;
    
    // Loop pelas respostas do formulário
    for (var j = 2; j <= abaRespostas.getLastRow(); j++) {
      if (abaRespostas.getRange(j, 2).getValue() == evento) {
        var quantidade = abaRespostas.getRange(j, 3).getValue();
        totalPessoas += quantidade;
        valorArrecadado += quantidade * precos[i];
        custoTotal += quantidade * custos[i];
      }
    }
    
    // Cálculo do lucro
    var lucroTotal = valorArrecadado - custoTotal;
    
    // Escrever os resultados na planilha
    var linha = i + 2;
    abaCalculos.getRange("A" + linha).setValue(evento);
    abaCalculos.getRange("B" + linha).setValue(totalPessoas);
    abaCalculos.getRange("C" + linha).setValue(valorArrecadado);
    abaCalculos.getRange("D" + linha).setValue(custoTotal);
    abaCalculos.getRange("E" + linha).setValue(lucroTotal);
  }
}
