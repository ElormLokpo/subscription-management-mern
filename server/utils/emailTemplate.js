exports.emailTemplate = (titleMsg, bodyMsg)=>{
    return `
    
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Imprima&display=swap" rel="stylesheet">
                <style rel = 'stylesheet' type='text/css'>
                    body {
                        width: 100%;
                        font-family: Imprima, Arial, sans-serif;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                    }
                </style>
            </head>

            <body>
                <h6>Hi&nbsp;Edgar,</h2>
                <h2>${titleMsg}</h3>
                <p>
                    ${bodyMsg}
                </p>
            </body>
        </html>
    
    `
}