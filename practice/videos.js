/* 
    Dada la siguiente cadena extraida de una pagina web (es una porsión de HTML)
    Cada línea corresponde al tiempo en minutos y segundos de un tipo de video
    Nuestro cliente nos solicita desarrollar una función que permita calcular el tiempo total en segundos,
    por tipo de video (Flexbox Video, Redux Video) 
*/


const str = `<ul>
<li data-time="5:17">Flexbox Video</li>
<li data-time="8:22">Flexbox Video</li>
<li data-time="3:34">Redux Video</li>
<li data-time="5:23">Flexbox Video</li>
<li data-time="7:12">Flexbox Video</li>
<li data-time="7:24">Redux Video</li>
<li data-time="6:46">Flexbox Video</li>
<li data-time="4:45">Flexbox Video</li>
<li data-time="4:40">Flexbox Video</li>
<li data-time="7:58">Redux Video</li>
<li data-time="11:51">Flexbox Video</li>
<li data-time="9:13">Flexbox Video</li>
<li data-time="5:50">Flexbox Video</li>
<li data-time="5:52">Redux Video</li>
<li data-time="5:49">Flexbox Video</li>
<li data-time="8:57">Flexbox Video</li>
<li data-time="11:29">Flexbox Video</li>
<li data-time="3:07">Flexbox Video</li>
<li data-time="5:59">Redux Video</li>
<li data-time="3:31">Flexbox Video</li>
</ul>`;

let tiempoTotal = 0;

function armarArray (str)
{
    return str
    .split('\n')
    .filter(line => line != '<ul>' && line != '</ul>')
    .map
    (
        cadena => ({
            min: parseInt(cadena.replace('<li data-time="', '')
                    .replace('</li>','')
                    .replace('">Redux Video', '')
                    .replace('">Flexbox Video', ''))*60,
            seconds: parseInt(cadena.replace('<li data-time="', '')
                    .replace('</li>','')
                    .replace('">Redux Video', '')
                    .replace('">Flexbox Video', '')
                    .substr(2, 4)
                    .replace(':', '')),
            type: String(cadena.replace('<li data-time="', '')
                        .replace('</li>','')
                        .replace('"', '')
                        .replace(':', '')
                        .split('>')
                        .splice(1))
        })
    )
    .map
    (
        cadena2 => ({
            time: cadena2.min + cadena2.seconds,
            type: cadena2.type
        })
    )

}

function tiempoPorTipo(tipo)
{
    armarArray(str)
    .filter(a => a.type === tipo)
    .forEach
    (
        element => 
        {
            tiempoTotal = tiempoTotal+element.time
        }
    )
    
    return 'Time: ' + tiempoTotal + ' seconds | Type: ' + tipo
}

console.log(armarArray(str))
console.log(tiempoPorTipo('Redux Video'))