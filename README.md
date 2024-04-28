# scriptEmPlanilha
Criando scripts  JS para automação em Planilhas sheet ou google docs


Explicando algumas Funções:

function calcAge() {  // função que calcula idade
var sheet = Spredsheet.app.getActiveSheet(); // cria um obj e associa ele a planilha
var dateofbirth = sheet.getRange("c2:c16").getvalues(); // vai nesse range da tabela c2 até a c16 por exemplo, e pega os valores dentro 
dessas colunas e vai armazenar em uma variável

}
