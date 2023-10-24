$(function () {
    $.getJSON("js/automoveis.json", function (data) {
        
        function fillTable() {
            for (var i = 0; i < data['automoveis'].length; i++) {
                var row = $("<tr>");
                row.append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                row.append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append(row);
            }
        }
        fillTable(); 
        $("#searchButton").on("click", function () {
            var searchTerm = $("#searchInput").val().toLowerCase();
            $("#TableData tr").each(function () {
                var veiculo = $(this).find("td:eq(1)").text().toLowerCase(); 
                if (veiculo.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
                
            });
        });
    });
});