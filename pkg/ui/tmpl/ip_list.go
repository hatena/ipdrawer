package tmpl

var IPListTmpl = `
<html>
<head>
    <title>IP List</title>
</head>
<body>
    <div>
    <table>
    <tbody>
        {{ range . }}<tr>
        <td>{{ .Ip }}</td>
        <td>{{ .Tags }}</td>
        </tr>
        {{ end }}
    </tbody>
    </table>
    </div>
</body>
</html>

`
