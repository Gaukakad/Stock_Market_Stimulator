function openForm5(){
    document.getElementById("formbg").style.display = "block";
    document.getElementById("sellmain").style.display = "block";
    var table = document.getElementById('customers');
    console.log(table)

    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
             //rIndex = this.rowIndex;
            //  document.getElementById("name").innerHTML = this.cells[1].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
             document.getElementById("sellprice").value = this.cells[5].innerHTML;
             document.getElementById("quantitysell").value = this.cells[3].innerHTML;
        };
    }
}