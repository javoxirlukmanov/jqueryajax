$(document).ready(function () {
    $('button').on("click", function () {
        var $inpVal = $('input[type=text]').val()
        newdata.find(item => item.Id === Number($inpVal))


    })

    const getapiobject = {
        url: "https://jsonplaceholder.typicode.com/todos/",
        datatype:'Json',
        success: function (data) {
            const newdata = [...data]


            const filtertrue = newdata.filter(data => data.completed === Boolean(true))
            filtertrue.map((data) => {
                let rows = $('<tr> <td>' + data.userId + '</td> <td>' + data.id + '</td> <td>' + data.title + '</td> <td>' + data.completed + '</td></tr>');
                $("#myTable").append(rows)
            })
            const FilterFalse = newdata.filter(data => data.completed === false)
            FilterFalse.map((data) => {
                let rows = $('<tr> <td>' + data.userId + '</td> <td>' + data.id + '</td> <td>' + data.title + '</td> <td>' + data.completed + '</td></tr>');
                $("#myTable2").append(rows)
            })





        },
        error: (jqXHR, textStatus, errorThrown) =>
        alert('error' + textStatus + '-' + errorThrown + jqXHR)
    }
    $.ajax(getapiobject)
});