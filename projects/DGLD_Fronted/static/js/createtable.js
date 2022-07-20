var Ajax = function ()
{
    $.getJSON ("../../DGLD/datas.json", function (res)
    {
        
        var titles = res.title
        var datas = res.data
        for(var i =0 ; i < titles.length;i++){
            // var  begin = '<th class="table-title" onclick="clicke(' + i + ')">'
            var  begin = '<th scope="col" onclick="clicke(' + i + ')">'
            var  end = '</th>'
            var concent = begin + titles[i] + "↓" + end
            document.getElementById("table_header").innerHTML += concent
        }

        for(var i =0 ; i < datas.length;i++){
            var rowbegin = '<tr>'
            var rowend = '</tr>'
            // var begin = '<td class="table-text">'
            var begin = '<td>'
            var end = '</td>'
            var oneBegin = '<th scope="row">'
            var oneEnd = '</th>'
            var concent =''
            concent += rowbegin
            var j =0 
            for(var key in datas[i]){
                if(j != 0) concent += begin
                else concent += oneBegin
                if(datas[i][key] == 0.0) concent += '-'
                else concent += datas[i][key]
                if(j !=0 ) concent += end
                else concent +=oneEnd
                j++
            }
            concent += rowend
            document.getElementById("table_body").innerHTML += concent
        }
    });
}();

function clicke(i){
    var sortcol = 'col' + (i + 1);
    function desc(x,y){
        if(x[sortcol] != y[sortcol]) return y[sortcol] - x[sortcol]
        else return y['col1'] - x['col1'] 
    }
    $.getJSON ("../../DGLD/datas.json", function (res)
    {
        var datas = res.data
        datas.sort(desc)
        document.getElementById("table_body").innerHTML = ""
        for(var i =0 ; i < datas.length;i++){
            var rowbegin = '<tr>'
            var rowend = '</tr>'
            // var begin = '<td class="table-text">'
            var begin = '<td>'
            var end = '</td>'
            var oneBegin = '<th scope="row">'
            var oneEnd = '</th>'
            var concent =''
            concent += rowbegin
            var j =0 
            for(var key in datas[i]){
                if(j != 0) concent += begin
                else concent += oneBegin
                if(datas[i][key] == 0.0) concent += '-'
                else concent += datas[i][key]
                if(j !=0 ) concent += end
                else concent += oneEnd
                j++
            }
            concent += rowend
            document.getElementById("table_body").innerHTML += concent
        }
    });
}